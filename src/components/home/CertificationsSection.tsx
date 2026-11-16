"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Award, FileCheck, CheckCircle } from "lucide-react";
import { CertificationData } from "@/sanity/lib/fallback-data";

interface CertificationsSectionProps {
  certifications: CertificationData[];
}

export function CertificationsSection({ certifications }: CertificationsSectionProps) {
  return (
    <section className="py-20 lg:py-24 bg-panel/35 border-t border-line relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#20A84A]/10 border border-[#20A84A]/25 text-xs font-bold uppercase tracking-widest text-[#20A84A]">
            <Award className="w-3.5 h-3.5" />
            STANDARDS & ACCREDITATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-heading uppercase tracking-tight">
            Certifications & Quality Assurance.
          </h2>
          <p className="text-sm sm:text-base text-body">
            PHEPPL operates strictly within accredited international frameworks, verified through independent statutory certifications and continuous third-party surveillance audits.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert._id}
              className="glass-card rounded-2xl p-6 border border-line hover:border-[#20A84A]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Certification Badge / Image */}
                <div className="relative w-full h-24 mb-4 bg-surface rounded-xl border border-line p-3 flex items-center justify-center overflow-hidden">
                  {cert.badgeUrl ? (
                    <Image
                      src={cert.badgeUrl}
                      alt={cert.name}
                      width={120}
                      height={60}
                      className="object-contain max-h-16 group-hover:scale-105 transition-transform"
                    />
                  ) : (
                    <ShieldCheck className="w-12 h-12 text-[#20A84A]" />
                  )}
                </div>

                <div className="text-xs font-mono font-bold text-[#20A84A] tracking-wider uppercase mb-1">
                  {cert.issuingBody}
                </div>

                <h3 className="text-xl font-bold font-heading text-heading mb-2">
                  {cert.name}
                </h3>

                <p className="text-xs text-body leading-relaxed">
                  {cert.scope}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-line flex items-center justify-between text-[11px] text-muted">
                <span className="flex items-center gap-1 text-accent-soft font-semibold">
                  <CheckCircle className="w-3 h-3 text-[#20A84A]" />
                  Verified Active
                </span>
                <span className="font-mono">{cert.code}</span>
              </div>
            </div>
          ))}
        </div>

        {/* MSME Statement Banner */}
        <div className="mt-10 p-6 rounded-2xl bg-surface border border-line flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-[#20A84A]/20 flex items-center justify-center text-[#20A84A] flex-shrink-0">
              <FileCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-heading uppercase tracking-wider">
                MSME Development Board of India Registered
              </div>
              <p className="text-xs text-muted mt-0.5">
                Officially accredited engineering enterprise under the Ministry of Micro, Small and Medium Enterprises, Government of India.
              </p>
            </div>
          </div>

          <div className="text-xs font-mono font-semibold text-accent-soft px-4 py-2 rounded-lg bg-[#20A84A]/10 border border-[#20A84A]/25 whitespace-nowrap">
            GOVT. OF INDIA VERIFIED
          </div>
        </div>
      </div>
    </section>
  );
}

