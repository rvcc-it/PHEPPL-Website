import { NextRequest, NextResponse } from "next/server";
import { careerFormSchema } from "@/lib/validations/forms";

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";
    let bodyData: any = {};
    let resumeName: string | null = null;
    let resumeSize: number = 0;

    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      bodyData = {
        applicantName: formData.get("applicantName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        position: formData.get("position"),
        experienceYears: formData.get("experienceYears") || "",
        currentCompany: formData.get("currentCompany") || "",
        message: formData.get("message") || "",
        honeypot: formData.get("honeypot") || "",
      };

      const resumeFile = formData.get("resume") as File | null;
      if (resumeFile && resumeFile.size > 0) {
        if (resumeFile.size > 8 * 1024 * 1024) {
          return NextResponse.json(
            { success: false, message: "Resume file size exceeds the 8MB limit." },
            { status: 400 }
          );
        }
        const allowedExts = [".pdf", ".doc", ".docx"];
        const ext = resumeFile.name.slice(resumeFile.name.lastIndexOf(".")).toLowerCase();
        if (!allowedExts.includes(ext)) {
          return NextResponse.json(
            { success: false, message: "Please upload your resume in PDF or Word format (.pdf, .doc, .docx)." },
            { status: 400 }
          );
        }
        resumeName = resumeFile.name;
        resumeSize = resumeFile.size;
      }
    } else {
      bodyData = await req.json();
    }

    if (bodyData.honeypot && bodyData.honeypot.trim().length > 0) {
      return NextResponse.json({ success: true, message: "Application submitted." });
    }

    const parsed = careerFormSchema.safeParse(bodyData);
    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { data } = parsed;
    const applicationId = `APP-${Date.now().toString(36).toUpperCase()}`;

    console.log(`[PHEPPL CAREER ${applicationId}] Applicant: ${data.applicantName} <${data.email}>`);
    console.log(`Role: ${data.position} | Experience: ${data.experienceYears}`);
    if (resumeName) {
      console.log(`Resume Uploaded: ${resumeName} (${(resumeSize / 1024).toFixed(1)} KB)`);
    }

    return NextResponse.json({
      success: true,
      reference: applicationId,
      message: `Thank you, ${data.applicantName}. Your application for the ${data.position} role has been registered (Ref: #${applicationId}). Our Human Capital talent acquisition team will review your profile.`,
    });
  } catch (error) {
    console.error("Career application error:", error);
    return NextResponse.json(
      { success: false, message: "Error submitting application. Please email your CV to careers@pheppl.com." },
      { status: 500 }
    );
  }
}

