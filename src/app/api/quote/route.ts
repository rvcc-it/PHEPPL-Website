import { NextRequest, NextResponse } from "next/server";
import { quoteFormSchema } from "@/lib/validations/forms";

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";

    let bodyData: any = {};
    let attachmentName: string | null = null;
    let attachmentSize: number = 0;

    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      bodyData = {
        name: formData.get("name"),
        company: formData.get("company"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        projectName: formData.get("projectName"),
        projectLocation: formData.get("projectLocation"),
        serviceRequired: formData.get("serviceRequired"),
        projectDescription: formData.get("projectDescription"),
        honeypot: formData.get("honeypot") || "",
      };

      const file = formData.get("attachment") as File | null;
      if (file && file.size > 0) {
        // Enforce 10MB limit and safe extensions
        if (file.size > 10 * 1024 * 1024) {
          return NextResponse.json(
            { success: false, message: "Attachment exceeds the 10MB limit." },
            { status: 400 }
          );
        }
        const allowedExts = [".pdf", ".dwg", ".dxf", ".zip", ".doc", ".docx", ".xls", ".xlsx", ".png", ".jpg"];
        const ext = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
        if (!allowedExts.includes(ext)) {
          return NextResponse.json(
            { success: false, message: `File type ${ext} is not allowed. Please upload PDF, DWG, DXF, or ZIP.` },
            { status: 400 }
          );
        }
        attachmentName = file.name;
        attachmentSize = file.size;
      }
    } else {
      bodyData = await req.json();
    }

    // Spam honeypot check
    if (bodyData.honeypot && bodyData.honeypot.trim().length > 0) {
      return NextResponse.json({ success: true, message: "Enquiry submitted successfully." });
    }

    const parsed = quoteFormSchema.safeParse(bodyData);
    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed. Please verify the submitted information.",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { data } = parsed;

    // Secure submission record
    const enquiryId = `TND-${Date.now().toString(36).toUpperCase()}`;
    const timestamp = new Date().toISOString();

    console.log(`[PHEPPL ENQUIRY ${enquiryId}] From: ${data.company} (${data.name} <${data.email}>)`);
    console.log(`Project: ${data.projectName} | Location: ${data.projectLocation} | Service: ${data.serviceRequired}`);
    if (attachmentName) {
      console.log(`Attachment: ${attachmentName} (${(attachmentSize / 1024).toFixed(1)} KB)`);
    }

    // In a live production environment with RESEND_API_KEY, send notification email
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "PHEPPL Inquiries <tenders@pheppl.com>",
            to: [process.env.CONTACT_NOTIFICATION_EMAIL || "info@pheppl.com"],
            subject: `[New Tender Enquiry: ${enquiryId}] ${data.projectName} - ${data.company}`,
            html: `
              <h2>New Project Quote Request</h2>
              <p><strong>Enquiry Ref:</strong> ${enquiryId}</p>
              <p><strong>Client / Company:</strong> ${data.company}</p>
              <p><strong>Contact Person:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Phone:</strong> ${data.phone}</p>
              <p><strong>Project Name:</strong> ${data.projectName}</p>
              <p><strong>Location:</strong> ${data.projectLocation}</p>
              <p><strong>Service:</strong> ${data.serviceRequired}</p>
              <p><strong>Description:</strong></p>
              <p>${data.projectDescription.replace(/\n/g, "<br>")}</p>
              ${attachmentName ? `<p><strong>Attachment Attached:</strong> ${attachmentName}</p>` : ""}
            `,
          }),
        });
      } catch (mailError) {
        console.error("Resend mail dispatch failed:", mailError);
      }
    }

    return NextResponse.json({
      success: true,
      reference: enquiryId,
      message: `Thank you, ${data.name}. Your engineering enquiry has been received under reference #${enquiryId}. Our technical estimation team will review your specifications and contact you within 24 business hours.`,
    });
  } catch (error) {
    console.error("Error processing quote request:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred while processing your request. Please try again or contact us directly at info@pheppl.com." },
      { status: 500 }
    );
  }
}

