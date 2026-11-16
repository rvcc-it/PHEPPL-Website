"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormValues } from "@/lib/validations/forms";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
    reference?: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      honeypot: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitResult({
          success: true,
          message: data.message,
          reference: data.reference,
        });
        reset();
      } else {
        setSubmitResult({
          success: false,
          message: data.message || "Failed to send message.",
        });
      }
    } catch (err) {
      console.error(err);
      setSubmitResult({
        success: false,
        message: "Network error occurred. Please try again.",
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
            {submitResult.success ? "Message Dispatched" : "Transmission Error"}
          </h4>

          <p className="text-xs sm:text-sm text-body leading-relaxed">
            {submitResult.message}
          </p>

          {submitResult.reference && (
            <div className="inline-block px-3 py-1.5 rounded bg-surface border border-line font-mono text-xs text-[#20A84A] font-bold">
              Ticket Ref: #{submitResult.reference}
            </div>
          )}

          <div>
            <button
              onClick={() => setSubmitResult(null)}
              className="px-5 py-2 rounded-lg bg-surface hover:bg-surface text-heading text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Send Another Message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-body">
                Your Name <span className="text-[#20A84A]">*</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
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

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-body">
                Email Address <span className="text-[#20A84A]">*</span>
              </label>
              <input
                type="email"
                placeholder="email@company.com"
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
                Subject <span className="text-[#20A84A]">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Fabrication Tender Inquiry"
                {...register("subject")}
                className={`w-full px-4 py-3 rounded-lg bg-page border ${
                  errors.subject ? "border-red-500" : "border-line"
                } focus:border-[#20A84A] focus:outline-none text-heading text-sm placeholder-slate-500 transition-colors`}
              />
              {errors.subject && (
                <span className="text-[11px] text-red-400">
                  {errors.subject.message}
                </span>
              )}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-body">
              Message <span className="text-[#20A84A]">*</span>
            </label>
            <textarea
              rows={4}
              placeholder="How can PHEPPL assist your engineering or construction project?"
              {...register("message")}
              className={`w-full px-4 py-3 rounded-lg bg-page border ${
                errors.message ? "border-red-500" : "border-line"
              } focus:border-[#20A84A] focus:outline-none text-heading text-sm placeholder-slate-500 transition-colors`}
            />
            {errors.message && (
              <span className="text-[11px] text-red-400">
                {errors.message.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-[#20A84A] hover:bg-[#19873b] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-lg active:scale-95 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Corporate Message</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}

