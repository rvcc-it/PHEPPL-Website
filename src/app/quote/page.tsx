import React from "react";
import { Metadata } from "next";
import {
  FileText,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Mail,
  Lock,
} from "lucide-react";
import { QuoteForm } from "@/components/forms/QuoteForm";

export const metadata: Metadata = {
  title: "Request a Quote & Project Tender | Paanayil Heavy Engineering Projects Pvt. Ltd.",
  description:
    "Submit your heavy engineering project drawings, structural specifications, and tender requests to PHEPPL for formal commercial estimation.",
};

interface QuotePageProps {
  searchParams: Promise<{ service?: string }>;
}

export default async function QuotePage({ searchParams }: QuotePageProps) {
  const { service } = await searchParams;

  return (
    <div className="pt-28 pb-20 bg-page">
      {/* Header */}
      <section className="relative py-16 md:py-24 bg-panel/40 border-b border-line overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#20A84A]/10 border border-[#20A84A]/25 text-xs font-bold uppercase tracking-widest text-[#20A84A]">
              <FileText className="w-3.5 h-3.5" />
              FORMAL TENDER & RFQ PORTAL
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-heading uppercase tracking-tight">
              Request An Engineering Quote.
            </h1>
            <p className="text-base sm:text-lg text-body leading-relaxed">
              Transmit your project requirements, structural drawings, or bill of quantities (BOQ). Our technical estimation department provides transparent, competitive commercial proposals within 24 business hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Quote Form & Verification Sidebar */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: The Form (8 cols) */}
          <div className="lg:col-span-8">
            <QuoteForm initialService={service || ""} />
          </div>

          {/* Right Column: Trust Assurance & Workflow (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* NDA & Confidentiality Box */}
            <div className="p-6 rounded-2xl bg-surface border border-line space-y-4">
              <div className="flex items-center gap-2.5 text-[#20A84A]">
                <Lock className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-wider text-heading">
                  Strict Confidentiality & NDA
                </span>
              </div>
              <p className="text-xs text-body leading-relaxed">
                All engineering drawings, proprietary process schematics, and commercial tender documents submitted are treated with strict confidentiality under corporate non-disclosure standards.
              </p>
            </div>

            {/* Estimation Lifecycle */}
            <div className="p-6 rounded-2xl bg-surface border border-line space-y-4">
              <div className="text-xs font-bold uppercase tracking-widest text-muted">
                PROPOSAL LIFECYCLE
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#20A84A]/20 text-[#20A84A] flex items-center justify-center font-bold font-mono text-[11px] flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h5 className="font-bold text-heading uppercase">Drawing & Spec Intake</h5>
                    <p className="text-muted mt-0.5">Tonnage calculation, steel grade checks, and constructability review.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#20A84A]/20 text-[#20A84A] flex items-center justify-center font-bold font-mono text-[11px] flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h5 className="font-bold text-heading uppercase">Technical Feasibility</h5>
                    <p className="text-muted mt-0.5">Evaluation of yard capacity, crane lifting requirements, and timeline.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#20A84A]/20 text-[#20A84A] flex items-center justify-center font-bold font-mono text-[11px] flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h5 className="font-bold text-heading uppercase">Commercial Bid Submission</h5>
                    <p className="text-muted mt-0.5">Itemized BOQ costing, milestones schedule, and QA/QC documentation plan.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Urgent Inquiries */}
            <div className="p-6 rounded-2xl bg-panel border border-[#20A84A]/30 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-[#20A84A]">
                URGENT SHUTDOWN / TENDER DEADLINE?
              </div>
              <h4 className="text-sm font-bold text-heading uppercase">
                Direct Technical Estimation Line
              </h4>
              <p className="text-xs text-body">
                If your tender deadline is imminent, call our lead estimation engineer directly:
              </p>
              <div className="pt-2 space-y-1.5 text-xs text-body">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#20A84A]" />
                  <a href="tel:+914222980000" className="hover:text-heading font-mono">
                    +91 422 298 0000 (India)
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#20A84A]" />
                  <a href="tel:+966112345678" className="hover:text-heading font-mono">
                    +966 11 234 5678 (Saudi Arabia)
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#20A84A]" />
                  <a href="mailto:tenders@pheppl.com" className="hover:text-heading">
                    tenders@pheppl.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

