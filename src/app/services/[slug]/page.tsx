import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Wrench,
  Clock,
  Layers,
  FileCheck,
} from "lucide-react";
import { getServiceBySlug, getServices } from "@/sanity/lib/data";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) {
    return { title: "Service Details | PHEPPL" };
  }
  return {
    title: `${service.title} | PHEPPL Engineering Services`,
    description: service.shortDescription,
  };
}

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((s) => ({ slug: s.slug }));
}

export const revalidate = 60;

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const allServices = await getServices();
  const otherServices = allServices.filter((s) => s.slug !== service.slug);

  return (
    <div className="pt-28 pb-20 bg-page">
      {/* Header */}
      <section className="relative py-16 md:py-24 bg-panel/40 border-b border-line overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="mb-6">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted hover:text-[#20A84A] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Services</span>
            </Link>
          </div>

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#20A84A]/10 border border-[#20A84A]/25 text-xs font-bold uppercase tracking-widest text-[#20A84A]">
              <Wrench className="w-3.5 h-3.5" />
              {service.category}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-heading uppercase tracking-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-body leading-relaxed max-w-3xl">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Full Technical Scope & Methodology (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Main Hero Photograph */}
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-line shadow-2xl">
              <Image
                src={service.imageUrl || "/images/services/civil.webp"}
                alt={service.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061B2C] via-transparent to-transparent opacity-60" />
            </div>

            {/* In-Depth Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black font-heading text-heading uppercase">
                Technical Scope & Overview
              </h2>
              <div className="text-body text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  {service.fullDescription || service.shortDescription}
                </p>
                <p>
                  At PHEPPL, every structural assembly, process pipeline, and civil element is engineered in adherence to accredited <strong>ISO 9001:2015</strong> quality procedures and international building codes (AISC, AWS D1.1, ASME B31.3). Our Coimbatore yard infrastructure and sister concern coordination in Riyadh, Saudi Arabia, provide end-to-end assurance from material sourcing through final commissioning.
                </p>
              </div>
            </div>

            {/* Key Capabilities */}
            {service.capabilities && service.capabilities.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-line">
                <h3 className="text-xl font-bold font-heading text-heading uppercase">
                  Technical Deliverables & Capabilities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.capabilities.map((cap, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-surface border border-line flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#20A84A] flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-body">
                        {cap}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Methodology & Execution Lifecycle */}
            {service.methodology && service.methodology.length > 0 && (
              <div className="space-y-6 pt-4 border-t border-line">
                <div className="space-y-1">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#20A84A]">
                    WORKFLOW & LIFECYCLE
                  </div>
                  <h3 className="text-xl font-bold font-heading text-heading uppercase">
                    Engineering Execution Methodology
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.methodology.map((step) => (
                    <div
                      key={step.step}
                      className="p-5 rounded-xl bg-panel/30 border border-line space-y-2 relative"
                    >
                      <div className="text-xs font-mono font-black text-[#20A84A]">
                        PHASE {step.step}
                      </div>
                      <h4 className="text-base font-bold text-heading">
                        {step.title}
                      </h4>
                      <p className="text-xs text-body leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Sidebar Tender Enquiry & Navigation (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            {/* RFQ Card */}
            <div className="p-6 rounded-2xl bg-panel border border-[#20A84A]/40 shadow-2xl space-y-5">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#20A84A]">
                  TENDER & QUOTATION
                </span>
                <h3 className="text-xl font-bold font-heading text-heading">
                  Request a Tender for this Service
                </h3>
                <p className="text-xs text-body leading-relaxed">
                  Have project drawings, BOQ, or structural requirements? Transmit your documents to our engineering estimation team.
                </p>
              </div>

              <div className="space-y-3 pt-2 border-t border-line text-xs text-body">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#20A84A]" />
                  <span>ISO 9001:2015 Quality Verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#20A84A]" />
                  <span>24-Hour Technical Estimation Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-[#20A84A]" />
                  <span>NDA Confidentiality Guaranteed</span>
                </div>
              </div>

              <Link
                href={`/quote?service=${encodeURIComponent(service.title)}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#20A84A] hover:bg-[#19873b] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-lg active:scale-95"
              >
                <span>Request Project Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Other Services Navigation List */}
            <div className="p-6 rounded-2xl bg-surface border border-line space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-heading border-l-2 border-[#20A84A] pl-2.5">
                Related Capabilities
              </h4>
              <div className="space-y-2">
                {otherServices.slice(0, 5).map((os) => (
                  <Link
                    key={os.slug}
                    href={`/services/${os.slug}`}
                    className="block p-3 rounded-lg hover:bg-surface transition-colors text-xs text-body hover:text-heading font-semibold"
                  >
                    {os.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

