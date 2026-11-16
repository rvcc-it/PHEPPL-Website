import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  ShieldCheck,
  Award,
  Globe2,
  HardHat,
  Target,
  Compass,
  CheckCircle2,
  ArrowRight,
  Building2,
  Factory,
} from "lucide-react";
import { getAboutData, getCertifications } from "@/sanity/lib/data";

export const metadata: Metadata = {
  title: "About Us | Paanayil Heavy Engineering Projects Pvt. Ltd.",
  description:
    "Learn about PHEPPL, founded in 2018 in Coimbatore, India. Sister concern of Riyadh Villas Contracting Est., Saudi Arabia. Holding ISO 9001, 14001, 45001 certifications.",
};

export const revalidate = 60;

export default async function AboutPage() {
  const [aboutData, certifications] = await Promise.all([
    getAboutData(),
    getCertifications(),
  ]);

  return (
    <div className="pt-28 pb-20 bg-page">
      {/* Page Header */}
      <section className="relative py-16 md:py-24 bg-panel/40 border-b border-line overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#20A84A]/10 border border-[#20A84A]/25 text-xs font-bold uppercase tracking-widest text-[#20A84A]">
              <Building2 className="w-3.5 h-3.5" />
              CORPORATE PROFILE
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-heading uppercase tracking-tight">
              Engineering Expertise. Trusted Execution.
            </h1>
            <p className="text-base sm:text-lg text-body leading-relaxed">
              Paanayil Heavy Engineering Projects Private Limited (PHEPPL) is an established engineering and construction company founded in 2018 in Coimbatore, India, operating as a sister concern of Riyadh Villas Contracting Est. (RVCC), Riyadh, Saudi Arabia.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story & History */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#20A84A]">
              ESTABLISHED IN 2018
            </div>

            <h2 className="text-3xl sm:text-4xl font-black font-heading text-heading uppercase">
              Our Heritage & Foundation
            </h2>

            <div className="space-y-4 text-body text-sm sm:text-base leading-relaxed">
              <p>
                Founded in 2018 in the manufacturing hub of <strong>Coimbatore, Tamil Nadu</strong>, PHEPPL was incorporated with a clear industrial mission: to bridge the gap between traditional steel fabrication and modern turnkey EPC engineering execution.
              </p>
              <p>
                As a sister concern of <strong>Riyadh Villas Contracting Est. (RVCC)</strong>, established in 2006 in Riyadh, Kingdom of Saudi Arabia, PHEPPL leverages decades of combined expertise delivering mission-critical infrastructure for the Middle East’s leading power, oil and gas, and governmental clients including Saudi Aramco, Saudi Electricity Company (SECO), and GCCIA.
              </p>
              <p>
                From our dedicated 120,000 sq.ft heavy fabrication yard in Sulur, Coimbatore, our engineers, certified AWS welding inspectors, and project directors execute demanding structural packages conforming to international AISC, ASME, and Indian Standard (IS) specifications.
              </p>
            </div>

            {/* Sister Concern Callout */}
            <div className="p-5 rounded-xl bg-surface border border-line flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#20A84A]/10 text-[#20A84A] flex items-center justify-center flex-shrink-0 border border-[#20A84A]/20">
                <Globe2 className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-sm font-bold text-heading uppercase">
                  Global Synergy with RVCC, Riyadh
                </div>
                <p className="text-xs text-muted">
                  Direct cross-border operational coordination enables unified EPC tender bidding, global material procurement, and seamless technology transfer.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-line shadow-2xl">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/about/paanayil-heavy.webp"
                  alt="Paanayil Heavy Engineering Projects Official Logo and Identity"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#061B2C] via-transparent to-transparent opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-panel/25 border-y border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="glass-card p-8 sm:p-10 rounded-2xl border border-line space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#20A84A]/10 text-[#20A84A] flex items-center justify-center border border-[#20A84A]/25">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black font-heading text-heading uppercase">
                Our Vision
              </h3>
              <p className="text-body text-sm sm:text-base leading-relaxed">
                {aboutData.vision}
              </p>
            </div>

            {/* Mission */}
            <div className="glass-card p-8 sm:p-10 rounded-2xl border border-line space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#20A84A]/10 text-[#20A84A] flex items-center justify-center border border-[#20A84A]/25">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black font-heading text-heading uppercase">
                Our Mission
              </h3>
              <p className="text-body text-sm sm:text-base leading-relaxed">
                {aboutData.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-[#20A84A]">
            GUIDING PRINCIPLES
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-heading uppercase">
            Core Corporate Values
          </h2>
          <p className="text-sm text-muted">
            The foundation of every structural weld, tender estimate, and client milestone.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutData.values.map((val, idx) => (
            <div
              key={val.title}
              className="p-6 rounded-2xl bg-surface border border-line hover:border-[#20A84A]/40 transition-colors space-y-3"
            >
              <div className="text-xs font-mono font-bold text-[#20A84A]">
                0{idx + 1}
              </div>
              <h4 className="text-lg font-bold font-heading text-heading">
                {val.title}
              </h4>
              <p className="text-xs text-body leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HSE & Quality Policy Section */}
      <section className="py-20 bg-deep border-t border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#20A84A]/10 border border-[#20A84A]/25 text-xs font-bold uppercase tracking-widest text-[#20A84A]">
                <HardHat className="w-3.5 h-3.5" />
                HSE & QUALITY POLICY
              </div>

              <h2 className="text-3xl sm:text-4xl font-black font-heading text-heading uppercase">
                Uncompromising Safety. Audited Quality.
              </h2>

              <p className="text-body text-sm sm:text-base leading-relaxed">
                PHEPPL views safety and quality as inseparable dimensions of heavy engineering. We operate in accordance with certified <strong>ISO 9001:2015</strong>, <strong>ISO 14001:2015</strong>, and <strong>ISO 45001:2015</strong> management standards.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#20A84A] flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-bold text-heading">Zero Harm Target</h5>
                    <p className="text-xs text-muted">Strict personal protective equipment (PPE), daily safety briefings, and certified lifting operations.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#20A84A] flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-bold text-heading">100% Traceable Metallurgy</h5>
                    <p className="text-xs text-muted">Every structural plate, bolt, and weld electrode is documented with raw mill test certificates (MTC).</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#20A84A] flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-bold text-heading">Environmental Stewardship</h5>
                    <p className="text-xs text-muted">Enclosed grit blasting recovery, VOC emission controls, and waste segregation in adherence to ISO 14001:2015.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#20A84A] hover:bg-[#19873b] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-lg"
                >
                  <span>Request Engineering Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-line shadow-xl">
                <Image
                  src="/images/services/service_steel_works_metal_1778184492685.webp"
                  alt="Structural Steel Works"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-line shadow-xl translate-y-6">
                <Image
                  src="/images/projects/7.webp"
                  alt="Infrastructure Project Execution"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

