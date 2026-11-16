"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { careerFormSchema, CareerFormValues } from "@/lib/validations/forms";
import {
  Send,
  Upload,
  CheckCircle2,
  AlertCircle,
  Loader2,
  FileCheck,
  X,
} from "lucide-react";

interface CareerFormProps {
  defaultPosition?: string;
}

export function CareerForm({ defaultPosition = "" }: CareerFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
    reference?: string;
  } | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CareerFormValues>({
    resolver: zodResolver(careerFormSchema),
    defaultValues: {
      position: defaultPosition,
      honeypot: "",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 8 * 1024 * 1024) {
        alert("Resume file exceeds 8MB limit.");
        return;
      }
      setResumeFile(file);
    }
  };

  const onSubmit = async (values: CareerFormValues) => {
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const formData = new FormData();
      Object.entries(values).forEach(([k, v]) => {
        if (v) formData.append(k, v);
      });

      if (resumeFile) {
        formData.append("resume", resumeFile);
      }

      const res = await fetch("/api/careers", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitResult({
          success: true,
          message: data.message,
          reference: data.reference,
        });
        reset();
        setResumeFile(null);
      } else {
        setSubmitResult({
          success: false,
          message: data.message || "Failed to submit application.",
        });
      }
    } catch (err) {
      console.error(err);
      setSubmitResult({
        success: false,
        message: "An unexpected error occurred while sending your application.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-panel/40 border border-line rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
      <input
        type="text"
        {...register("honeypot")}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {submitResult ? (
        <div
          className={`p-6 rounded-xl border text-center space-y-4 animate-in fade-in duration-300 ${
            submitResult.success
              ? "bg-[#20A84A]/10 border-[#20A84A]/40 text-accent-soft"
              : "bg-red-500/10 border-red-500/40 text-red-300"
          }`}
        >
          <div className="w-12 h-12 rounded-full mx-auto flex items-center justify-center bg-surface">
            {submitResult.success ? (
              <CheckCircle2 className="w-6 h-6 text-[#20A84A]" />
            ) : (
              <AlertCircle className="w-6 h-6 text-red-400" />
            )}
          </div>

          <h4 className="text-xl font-bold font-heading text-heading">
            {submitResult.success ? "Application Received" : "Submission Failed"}
          </h4>

          <p className="text-xs sm:text-sm text-body leading-relaxed max-w-md mx-auto">
            {submitResult.message}
          </p>

          {submitResult.reference && (
            <div className="inline-block px-3 py-1.5 rounded bg-surface border border-line font-mono text-xs text-[#20A84A] font-bold">
              Application ID: #{submitResult.reference}
            </div>
          )}

          <div>
            <button
              onClick={() => setSubmitResult(null)}
              className="px-5 py-2 rounded-lg bg-surface hover:bg-surface text-heading text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Submit Another Profile
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-body">
                Full Name <span className="text-[#20A84A]">*</span>
              </label>
              <input
                type="text"
                placeholder="Applicant Full Name"
                {...register("applicantName")}
                className={`w-full px-4 py-3 rounded-lg bg-page border ${
                  errors.applicantName ? "border-red-500" : "border-line"
                } focus:border-[#20A84A] focus:outline-none text-heading text-sm placeholder-slate-500 transition-colors`}
              />
              {errors.applicantName && (
                <span className="text-[11px] text-red-400">
                  {errors.applicantName.message}
                </span>
              )}
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-body">
                Email Address <span className="text-[#20A84A]">*</span>
              </label>
              <input
                type="email"
                placeholder="applicant@email.com"
                {...register("email")}
                className={`w-full px-4 py-3 rounded-lg bg-page border ${
                  errors.email ? "border-red-500" : "border-line"
                } focus:border-[#20A84A] focus:outline-none text-heading text-sm placeholder-slate-500 transition-colors`}
              />
              {errors.email && (
                <span className="text-[11px] text-red-400">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-body">
                Contact Phone <span className="text-[#20A84A]">*</span>
              </label>
              <input
                type="tel"
                placeholder="+91..."
                {...register("phone")}
                className={`w-full px-4 py-3 rounded-lg bg-page border ${
                  errors.phone ? "border-red-500" : "border-line"
                } focus:border-[#20A84A] focus:outline-none text-heading text-sm placeholder-slate-500 transition-colors`}
              />
              {errors.phone && (
                <span className="text-[11px] text-red-400">
                  {errors.phone.message}
                </span>
              )}
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-body">
                Position Applied For <span className="text-[#20A84A]">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Senior Project Manager"
                {...register("position")}
                className={`w-full px-4 py-3 rounded-lg bg-page border ${
                  errors.position ? "border-red-500" : "border-line"
                } focus:border-[#20A84A] focus:outline-none text-heading text-sm placeholder-slate-500 transition-colors`}
              />
              {errors.position && (
                <span className="text-[11px] text-red-400">
                  {errors.position.message}
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-body">
                Total Years of Experience
              </label>
              <input
                type="text"
                placeholder="e.g. 7 Years in Heavy Structural Works"
                {...register("experienceYears")}
                className="w-full px-4 py-3 rounded-lg bg-page border border-line focus:border-[#20A84A] focus:outline-none text-heading text-sm placeholder-slate-500 transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-body">
                Current / Last Employer
              </label>
              <input
                type="text"
                placeholder="e.g. Infrastructure EPC Corp"
                {...register("currentCompany")}
                className="w-full px-4 py-3 rounded-lg bg-page border border-line focus:border-[#20A84A] focus:outline-none text-heading text-sm placeholder-slate-500 transition-colors"
              />
            </div>
          </div>

          {/* Resume Upload */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-body">
              Upload Resume / CV (PDF, DOC, DOCX - Max 8MB)
            </label>

            <div className="border-2 border-dashed border-line rounded-xl p-4 text-center hover:border-[#20A84A]/40 transition-colors bg-page/50">
              {resumeFile ? (
                <div className="flex items-center justify-between p-2.5 rounded bg-surface border border-line max-w-sm mx-auto">
                  <div className="flex items-center gap-2 overflow-hidden">
                    <FileCheck className="w-5 h-5 text-[#20A84A] flex-shrink-0" />
                    <span className="text-xs font-semibold text-heading truncate">
                      {resumeFile.name}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setResumeFile(null)}
                    className="p-1 text-muted hover:text-red-400"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div>
                  <input
                    type="file"
                    id="career-file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                  />
                  <label
                    htmlFor="career-file"
                    className="cursor-pointer inline-flex items-center gap-2 text-xs font-semibold text-body hover:text-heading"
                  >
                    <Upload className="w-4 h-4 text-[#20A84A]" />
                    <span>Choose resume file to attach</span>
                  </label>
                </div>
              )}
            </div>
          </div>

          {/* Cover note */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-body">
              Cover Note / Career Highlights (Optional)
            </label>
            <textarea
              rows={3}
              placeholder="Brief summary of certifications, projects executed, or leadership experience..."
              {...register("message")}
              className="w-full px-4 py-3 rounded-lg bg-page border border-line focus:border-[#20A84A] focus:outline-none text-heading text-sm placeholder-slate-500 transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-[#20A84A] hover:bg-[#19873b] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-lg active:scale-95 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting Application...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Job Application</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}

