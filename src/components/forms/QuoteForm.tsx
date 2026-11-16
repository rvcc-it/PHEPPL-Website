"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteFormSchema, QuoteFormValues } from "@/lib/validations/forms";
import {
  Send,
  Upload,
  CheckCircle2,
  AlertCircle,
  Loader2,
  FileText,
  X,
} from "lucide-react";

interface QuoteFormProps {
  initialService?: string;
}

export function QuoteForm({ initialService = "" }: QuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
    reference?: string;
  } | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      serviceRequired: initialService,
      honeypot: "",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 10 * 1024 * 1024) {
        alert("File size exceeds the 10MB limit.");
        return;
      }
      setSelectedFile(file);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
  };

  const onSubmit = async (values: QuoteFormValues) => {
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, value.toString());
        }
      });

      if (selectedFile) {
        formData.append("attachment", selectedFile);
      }

      const res = await fetch("/api/quote", {
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
        setSelectedFile(null);
      } else {
        setSubmitResult({
          success: false,
          message: data.message || "Failed to submit enquiry. Please check your inputs.",
        });
      }
    } catch (err) {
      console.error(err);
      setSubmitResult({
        success: false,
        message: "Network error occurred. Please try again or reach us at info@pheppl.com.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions = [
    "Heavy Structural Steel Fabrication & Erection",
    "Industrial Plant Construction & Process Piping",
    "Infrastructure & Heavy Civil Engineering",
    "Turnkey EPC Project Execution",
    "Equipment Erection & Heavy Machinery Positioning",
    "Industrial Plant Maintenance & Turnaround Shutdowns",
    "General Structural Steel & Engineering Consultation",
  ];

  return (
    <div className="bg-panel/40 border border-line rounded-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-2xl relative">
      {/* Honeypot for spam bot trap */}
      <input
        type="text"
        {...register("honeypot")}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {submitResult ? (
        <div
          className={`p-6 sm:p-8 rounded-xl border text-center space-y-4 animate-in fade-in duration-300 ${
            submitResult.success
              ? "bg-[#20A84A]/10 border-[#20A84A]/40 text-accent-soft"
              : "bg-red-500/10 border-red-500/40 text-red-300"
          }`}
        >
          <div className="w-14 h-14 rounded-full mx-auto flex items-center justify-center bg-surface">
            {submitResult.success ? (
              <CheckCircle2 className="w-8 h-8 text-[#20A84A]" />
            ) : (
              <AlertCircle className="w-8 h-8 text-red-400" />
            )}
          </div>

          <h3 className="text-2xl font-black font-heading text-heading">
            {submitResult.success ? "Quote Request Submitted" : "Submission Failed"}
          </h3>

          <p className="text-sm max-w-lg mx-auto text-body leading-relaxed">
            {submitResult.message}
          </p>

          {submitResult.reference && (
            <div className="inline-block px-4 py-2 rounded-lg bg-surface border border-line font-mono text-xs text-[#20A84A] font-bold">
              Reference Ref: #{submitResult.reference}
            </div>
          )}

          <div className="pt-2">
            <button
              onClick={() => setSubmitResult(null)}
              className="px-6 py-2.5 rounded-lg bg-surface hover:bg-surface text-heading text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-body">
                Full Name <span className="text-[#20A84A]">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Anand Sundaram"
                {...register("name")}
                className={`w-full px-4 py-3 rounded-lg bg-page border ${
                  errors.name ? "border-red-500" : "border-line"
                } focus:border-[#20A84A] focus:outline-none text-heading text-sm placeholder-slate-500 transition-colors`}
              />
              {errors.name && (
                <span className="text-[11px] text-red-400">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Company */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-body">
                Company / Organization <span className="text-[#20A84A]">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Apex Infrastructure Ltd."
                {...register("company")}
                className={`w-full px-4 py-3 rounded-lg bg-page border ${
                  errors.company ? "border-red-500" : "border-line"
                } focus:border-[#20A84A] focus:outline-none text-heading text-sm placeholder-slate-500 transition-colors`}
              />
              {errors.company && (
                <span className="text-[11px] text-red-400">
                  {errors.company.message}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-body">
                Business Email <span className="text-[#20A84A]">*</span>
              </label>
              <input
                type="email"
                placeholder="e.g. anand@company.com"
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

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-body">
                Contact Phone <span className="text-[#20A84A]">*</span>
              </label>
              <input
                type="tel"
                placeholder="e.g. +91 98400 12345"
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

            {/* Project Name */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-body">
                Project Name <span className="text-[#20A84A]">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. 500kV GIS Substation Structural Framework"
                {...register("projectName")}
                className={`w-full px-4 py-3 rounded-lg bg-page border ${
                  errors.projectName ? "border-red-500" : "border-line"
                } focus:border-[#20A84A] focus:outline-none text-heading text-sm placeholder-slate-500 transition-colors`}
              />
              {errors.projectName && (
                <span className="text-[11px] text-red-400">
                  {errors.projectName.message}
                </span>
              )}
            </div>

            {/* Project Location */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-body">
                Project Location <span className="text-[#20A84A]">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Chennai / Coimbatore, India or Riyadh, KSA"
                {...register("projectLocation")}
                className={`w-full px-4 py-3 rounded-lg bg-page border ${
                  errors.projectLocation ? "border-red-500" : "border-line"
                } focus:border-[#20A84A] focus:outline-none text-heading text-sm placeholder-slate-500 transition-colors`}
              />
              {errors.projectLocation && (
                <span className="text-[11px] text-red-400">
                  {errors.projectLocation.message}
                </span>
              )}
            </div>
          </div>

          {/* Service Required */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-body">
              Required Engineering Service <span className="text-[#20A84A]">*</span>
            </label>
            <select
              {...register("serviceRequired")}
              className={`w-full px-4 py-3 rounded-lg bg-page border ${
                errors.serviceRequired ? "border-red-500" : "border-line"
              } focus:border-[#20A84A] focus:outline-none text-heading text-sm transition-colors`}
            >
              <option value="">Select a service category</option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.serviceRequired && (
              <span className="text-[11px] text-red-400">
                {errors.serviceRequired.message}
              </span>
            )}
          </div>

          {/* Project Description */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-body">
              Scope Description & Technical Specifications <span className="text-[#20A84A]">*</span>
            </label>
            <textarea
              rows={4}
              placeholder="Please describe estimated tonnage, steel grades, drawings status, site constraints, and delivery milestones..."
              {...register("projectDescription")}
              className={`w-full px-4 py-3 rounded-lg bg-page border ${
                errors.projectDescription ? "border-red-500" : "border-line"
              } focus:border-[#20A84A] focus:outline-none text-heading text-sm placeholder-slate-500 transition-colors`}
            />
            {errors.projectDescription && (
              <span className="text-[11px] text-red-400">
                {errors.projectDescription.message}
              </span>
            )}
          </div>

          {/* Optional Attachment Upload */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-body">
              Technical Drawing / BOQ Tender Document (Optional)
            </label>

            <div className="border-2 border-dashed border-line rounded-xl p-4 sm:p-6 text-center hover:border-[#20A84A]/50 transition-colors bg-page/50">
              {selectedFile ? (
                <div className="flex items-center justify-between p-3 rounded-lg bg-surface border border-line max-w-md mx-auto">
                  <div className="flex items-center gap-3 text-left overflow-hidden">
                    <FileText className="w-6 h-6 text-[#20A84A] flex-shrink-0" />
                    <div className="overflow-hidden">
                      <div className="text-xs font-bold text-heading truncate">
                        {selectedFile.name}
                      </div>
                      <div className="text-[10px] text-muted">
                        {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={removeFile}
                    className="p-1 text-muted hover:text-red-400"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div>
                  <input
                    type="file"
                    id="quote-file"
                    onChange={handleFileChange}
                    accept=".pdf,.dwg,.dxf,.zip,.doc,.docx,.xls,.xlsx"
                    className="hidden"
                  />
                  <label
                    htmlFor="quote-file"
                    className="cursor-pointer inline-flex flex-col items-center gap-2"
                  >
                    <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-[#20A84A]">
                      <Upload className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-body">
                      Click to upload tender drawings or specifications
                    </span>
                    <span className="text-[11px] text-muted">
                      PDF, DWG, DXF, ZIP, or DOC (Max 10MB)
                    </span>
                  </label>
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 bg-[#20A84A] hover:bg-[#19873b] text-white font-bold text-sm uppercase tracking-wider rounded-lg transition-all shadow-xl shadow-[#20A84A]/30 active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Transmitting Enquiry...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Tender Enquiry</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

