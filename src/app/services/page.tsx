import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Wrench,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Shield,
  Zap,
} from "lucide-react";
import { getServices } from "@/sanity/lib/data";

export const metadata: Metadata = {
  title: "Engineering Services | Paanayil Heavy Engineering Projects Pvt. Ltd.",
  description:
    "Explore PHEPPL's heavy engineering services: structural steel fabrication, industrial plant construction, process piping, turnkey EPC, equipment erection, and plant maintenance.",
};

export const revalidate = 60;

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="pt-28 pb-20 bg-page">
      {/* Header */}
      <section className="relative py-16 md:py-24 bg-panel/40 border-b border-line overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#20A84A]/10 border border-[#20A84A]/25 text-xs font-bold uppercase tracking-widest text-[#20A84A]">
              <Wrench className="w-3.5 h-3.5" />
              CAPABILITIES & LIFECYCLE
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-heading uppercase tracking-tight">
              Engineering Solutions That Deliver.
            </h1>
            <p className="text-base sm:text-lg text-body leading-relaxed">
              From advanced shop fabrication to on-site crane rigging and turnkey EPC execution, PHEPPL brings unmatched engineering precision to demanding infrastructure and energy sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Services List with Detailed Capabilities */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        {services.map((service, index) => {
          const isEven = index % 2 === 1;
          return (
            <div
              key={service._id}
              id={service.slug}
              className="glass-card rounded-2xl border border-line overflow-hidden p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-[#20A84A]/40"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`lg:col-span-5 relative rounded-xl overflow-hidden border border-line aspect-[16/11] group ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={service.imageUrl || "/images/services/civil.webp"}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061B2C] via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded bg-page/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-[#20A84A] border border-line">
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-7 space-y-5 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#20A84A]">
                      SERVICE 0{index + 1}
                    </span>
                    <span className="h-3 w-[1px] bg-surface" />
                    <span className="text-xs font-semibold text-muted uppercase tracking-wider">
                      {service.category}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black font-heading text-heading uppercase leading-tight">
                    {service.title}
                  </h2>

                  <p className="text-sm sm:text-base text-body leading-relaxed">
                    {service.fullDescription || service.shortDescription}
                  </p>

                  {/* Capabilities List */}
                  {service.capabilities && service.capabilities.length > 0 && (
                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-muted">
                        Core Execution Deliverables:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.capabilities.map((cap, cIdx) => (
                          <div
                            key={cIdx}
                            className="flex items-start gap-2 text-xs text-body"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#20A84A] flex-shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-line">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#20A84A] hover:bg-[#19873b] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95"
                    >
                      <span>Technical Specs & Lifecycle</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href={`/quote?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface hover:bg-surface text-body hover:text-heading text-xs font-bold uppercase tracking-wider border border-line transition-all"
                    >
                      <span>Request Service Tender</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Bottom CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-gradient-to-r from-panel via-page to-panel border border-[#20A84A]/30 p-8 sm:p-12 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-black font-heading text-heading uppercase">
            Need a Customized Engineering Execution Strategy?
          </h3>
          <p className="text-sm sm:text-base text-body max-w-2xl mx-auto">
            Our estimation and technical design teams are ready to analyze your drawings, calculate tonnages, and prepare formal tender submissions.
          </p>
          <div>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#20A84A] hover:bg-[#19873b] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-lg shadow-[#20A84A]/30 active:scale-95"
            >
              <span>Submit RFQ / Drawings for Review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

