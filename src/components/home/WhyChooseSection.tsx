"use client";

import React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  HardHat,
  Award,
  Cpu,
  Clock,
  Handshake,
  CheckCircle2,
} from "lucide-react";

export function WhyChooseSection() {
  const pillars = [
    {
      icon: Award,
      title: "Engineering Excellence & Codes",
      description:
        "Structural designs strictly conform to international engineering standards (AISC, ASME, AWS, and IS codes), ensuring extreme load-bearing reliability and structural longevity.",
    },
    {
      icon: ShieldCheck,
      title: "Triple ISO Certified Quality",
      description:
        "Certified in ISO 9001:2015 (Quality), ISO 14001:2015 (Environment), and ISO 45001:2015 (Safety). Every plate and weld undergoes 100% NDT inspection and traceable documentation.",
    },
    {
      icon: HardHat,
      title: "Zero-Incident Safety Culture",
      description:
        "Safety is an unconditional priority. We implement daily Job Safety Analysis (JSA), engineered tandem lifting plans, and proactive hazard prevention across every workshop and site.",
    },
    {
      icon: Cpu,
      title: "State-of-the-Art Yard Infrastructure",
      description:
        "120,000+ sq.ft fabrication yard in Sulur, Coimbatore, equipped with heavy 50T EOT gantry cranes, multi-torch CNC cutting beds, and climate-controlled blast and painting booths.",
    },
    {
      icon: Clock,
      title: "Critical-Path Project Execution",
      description:
        "Single-source EPC accountability and rigorous Primavera P6 milestone scheduling guarantee on-time project completion even in fast-track industrial shutdown environments.",
    },
    {
      icon: Handshake,
      title: "International Industry Trust",
      description:
        "Supported by our sister concern Riyadh Villas Contracting Est. (RVCC), Saudi Arabia, PHEPPL maintains proven execution partnerships with tier-1 energy and government entities.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-page relative overflow-hidden border-t border-line">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#20A84A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#20A84A]/10 border border-[#20A84A]/25 text-xs font-bold uppercase tracking-widest text-[#20A84A]">
            <ShieldCheck className="w-3.5 h-3.5" />
            THE PHEPPL ADVANTAGE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-heading uppercase tracking-tight">
            Built on Expertise. Driven by Quality.
          </h2>
          <p className="text-base text-body">
            Why leading energy conglomerates and infrastructure authorities rely on Paanayil Heavy Engineering Projects for mission-critical industrial execution.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="glass-card p-8 rounded-2xl border border-line hover:border-[#20A84A]/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center text-body group-hover:text-[#20A84A] group-hover:bg-[#20A84A]/10 border border-line transition-colors mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold font-heading text-heading group-hover:text-[#20A84A] transition-colors mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-body leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-line flex items-center gap-2 text-[11px] font-semibold text-accent-soft">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#20A84A]" />
                  <span>Verified Corporate Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

