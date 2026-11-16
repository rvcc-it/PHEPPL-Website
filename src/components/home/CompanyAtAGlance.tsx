"use client";

import React from "react";
import { Award, Briefcase, Factory, ShieldCheck, MapPin } from "lucide-react";

export function CompanyAtAGlance() {
  const stats = [
    {
      value: "2018",
      suffix: "",
      label: "Year Established",
      subtext: "Founded in Coimbatore, India",
      icon: Award,
    },
    {
      value: "45",
      suffix: "+",
      label: "Completed Projects",
      subtext: "Industrial & infrastructure contracts",
      icon: Briefcase,
    },
    {
      value: "18,000",
      suffix: " MT",
      label: "Fabrication Capacity",
      subtext: "Annual heavy structural throughput",
      icon: Factory,
    },
    {
      value: "100",
      suffix: "%",
      label: "Quality & Safety Compliance",
      subtext: "Triple ISO certified systems",
      icon: ShieldCheck,
    },
    {
      value: "2",
      suffix: " Hubs",
      label: "Operational Centers",
      subtext: "Coimbatore, India & Riyadh, KSA",
      icon: MapPin,
    },
  ];

  return (
    <section className="py-16 bg-deep border-y border-line relative overflow-hidden">
      {/* Background industrial grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="text-xs font-bold uppercase tracking-widest text-[#20A84A]">
            PROVEN TRACK RECORD
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-heading text-heading uppercase tracking-tight">
            Company At A Glance
          </h2>
          <p className="text-sm text-muted">
            Measurable engineering performance governed by verified international benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="glass-card p-6 rounded-xl border border-line hover:border-[#20A84A]/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-muted font-bold">
                    0{i + 1}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center text-body group-hover:text-[#20A84A] group-hover:bg-[#20A84A]/10 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl font-black font-heading text-heading tracking-tight">
                    {stat.value}
                    <span className="text-[#20A84A] text-2xl font-bold">
                      {stat.suffix}
                    </span>
                  </div>

                  <div className="text-xs font-bold uppercase tracking-wider text-body mt-2">
                    {stat.label}
                  </div>

                  <div className="text-[11px] text-muted mt-1 line-clamp-1">
                    {stat.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

