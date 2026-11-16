"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Building2, Globe2 } from "lucide-react";
import { AboutData } from "@/sanity/lib/fallback-data";

interface CompanyIntroSectionProps {
  data: AboutData;
}

export function CompanyIntroSection({ data }: CompanyIntroSectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-panel/25 relative overflow-hidden border-t border-line">
      {/* Background technical accents */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Project / Facility Imagery & Floating Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-line shadow-2xl group">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={data.imageUrl || "/images/about/paanayil-heavy.webp"}
                  alt="PHEPPL Heavy Engineering Facilities and Fabrication Yard"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#061B2C] via-transparent to-transparent opacity-60" />

              {/* Corner industrial bracket accents */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#20A84A]" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#20A84A]" />
            </div>

            {/* Floating Experience & Certification Element */}
            <div className="sm:absolute -bottom-8 -right-6 mt-4 sm:mt-0 bg-page border border-[#20A84A]/30 rounded-xl p-5 shadow-2xl backdrop-blur-xl max-w-xs">
              <div className="flex items-start gap-3.5">
                <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-[#20A84A]/10 text-[#20A84A] flex-shrink-0 border border-[#20A84A]/20">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl font-black font-heading text-heading">
                    ISO CERTIFIED
                  </div>
                  <div className="text-xs text-[#20A84A] font-semibold mt-0.5">
                    9001:2015 • 14001:2015 • 45001:2015
                  </div>
                  <p className="text-[11px] text-muted mt-1">
                    Registered with MSME Development Board of India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Company Introduction */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#20A84A]/10 border border-[#20A84A]/25 text-xs font-bold uppercase tracking-widest text-[#20A84A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#20A84A]" />
              {data.sectionLabel || "WHO WE ARE"}
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-heading tracking-tight uppercase leading-[1.15]">
              {data.heading || "Engineering Expertise. Trusted Execution."}
            </h2>

            <div className="space-y-4 text-body text-base leading-relaxed">
              <p>
                <strong>Paanayil Heavy Engineering Projects Private Limited (PHEPPL)</strong> is an
                engineering and construction company established in <strong>2018</strong> in <strong>Coimbatore, India</strong>.
              </p>
              <p>
                The company states that it holds accredited <strong>ISO 9001:2015</strong>, <strong>ISO 14001:2015</strong>, and <strong>ISO 45001:2015</strong> certifications, and is registered with the <strong>MSME Development Board of India</strong>.
              </p>
              <p>
                Operating as a sister concern of <strong>Riyadh Villas Contracting Est. (RVCC), Riyadh, Saudi Arabia</strong>, PHEPPL brings international engineering execution disciplines to heavy structural steel fabrication, turnkey industrial plant construction, and high-specification civil infrastructure.
              </p>
            </div>

            {/* Core Capability Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-body">
                <CheckCircle2 className="w-4 h-4 text-[#20A84A] flex-shrink-0" />
                <span>Heavy Structural Steel Fabrication</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-body">
                <CheckCircle2 className="w-4 h-4 text-[#20A84A] flex-shrink-0" />
                <span>Turnkey EPC Project Management</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-body">
                <CheckCircle2 className="w-4 h-4 text-[#20A84A] flex-shrink-0" />
                <span>Plant Construction & Process Piping</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-body">
                <CheckCircle2 className="w-4 h-4 text-[#20A84A] flex-shrink-0" />
                <span>Zero-Harm Safety Management</span>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-surface hover:bg-[#20A84A] text-white font-bold text-xs uppercase tracking-wider rounded-md border border-line hover:border-transparent transition-all shadow-lg active:scale-95 group"
              >
                <span>Learn More About PHEPPL</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

