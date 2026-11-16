import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/forms";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Spam honeypot
    if (body.honeypot && body.honeypot.trim().length > 0) {
      return NextResponse.json({ success: true, message: "Message received." });
    }

    const parsed = contactFormSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please correct the errors in the form.",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { data } = parsed;
    const ticketId = `MSG-${Date.now().toString(36).toUpperCase()}`;

    console.log(`[PHEPPL CONTACT ${ticketId}] From: ${data.name} <${data.email}>`);
    console.log(`Subject: ${data.subject} | Phone: ${data.phone}`);

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
            from: "PHEPPL Corporate Portal <contact@pheppl.com>",
            to: [process.env.CONTACT_NOTIFICATION_EMAIL || "info@pheppl.com"],
            subject: `[Corporate Inquiry: ${ticketId}] ${data.subject}`,
            html: `
              <h3>New Corporate Inquiry</h3>
              <p><strong>Ticket Ref:</strong> ${ticketId}</p>
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Phone:</strong> ${data.phone}</p>
              <p><strong>Subject:</strong> ${data.subject}</p>
              <p><strong>Message:</strong></p>
              <p>${data.message.replace(/\n/g, "<br>")}</p>
            `,
          }),
        });
      } catch (e) {
        console.error("Resend error:", e);
      }
    }

    return NextResponse.json({
      success: true,
      reference: ticketId,
      message: `Thank you for reaching out to PHEPPL. Your inquiry (#${ticketId}) has been received. An engineering representative will respond promptly.`,
    });
  } catch (error) {
    console.error("Error handling contact form:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message. Please reach us at info@pheppl.com." },
      { status: 500 }
    );
  }
}

