import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Users, Award, Shield, ArrowRight, CheckCircle2, User } from "lucide-react";
import { existsSync } from "fs";
import path from "path";
import { getManagement } from "@/sanity/lib/data";

export const metadata: Metadata = {
  title: "Board of Management | Paanayil Heavy Engineering Projects Pvt. Ltd.",
  description:
    "Meet the executive leadership and board of management driving PHEPPL's heavy engineering, EPC, and infrastructure execution excellence across India and Saudi Arabia.",
};

export const revalidate = 60;

// Local portraits live in /public; show a neutral placeholder until the file is added.
function hasLocalPhoto(url?: string) {
  if (!url) return false;
  if (/^https?:\/\//.test(url)) return true;
  return existsSync(path.join(process.cwd(), "public", url));
}

export default async function BoardOfManagementPage() {
  const management = await getManagement();

  return (
    <div className="pt-28 pb-20 bg-page">
      {/* Page Header */}
      <section className="relative py-16 md:py-24 bg-panel/40 border-b border-line overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#20A84A]/10 border border-[#20A84A]/25 text-xs font-bold uppercase tracking-widest text-[#20A84A]">
              <Users className="w-3.5 h-3.5" />
              EXECUTIVE LEADERSHIP
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-heading uppercase tracking-tight">
              Board of Management.
            </h1>
            <p className="text-base sm:text-lg text-body leading-relaxed">
              Guiding PHEPPL with decades of heavy engineering, petrochemical plant construction, and international EPC project leadership across India and the Arabian Gulf.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Profiles */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        {management.map((leader, index) => {
          const isFounder = index === 0;
          return (
            <div
              key={leader._id}
              className={`rounded-2xl border p-6 sm:p-8 lg:p-10 transition-all duration-300 ${
                isFounder
                  ? "bg-gradient-to-br from-panel via-page to-panel border-[#20A84A]/40 shadow-2xl"
                  : "glass-card border-line hover:border-[#20A84A]/30"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Profile Photo */}
                <div className="lg:col-span-4 relative">
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-line shadow-2xl group">
                    {hasLocalPhoto(leader.photoUrl) ? (
                      <Image
                        src={leader.photoUrl!}
                        alt={leader.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#082B4C] to-[#061B2C]">
                        <User className="w-24 h-24 text-slate-500" strokeWidth={1.25} />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061B2C] via-transparent to-transparent opacity-60" />
                  </div>

                  {isFounder && (
                    <div className="absolute -bottom-3 left-4 right-4 bg-[#20A84A] text-white text-[11px] font-bold uppercase tracking-wider py-1.5 px-3 rounded text-center shadow-lg">
                      Founder & Chief Executive Officer
                    </div>
                  )}
                </div>

                {/* Bio & Details */}
                <div className="lg:col-span-8 space-y-4">
                  <div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-heading">
                      {leader.name}
                    </h2>
                    <div className="text-sm sm:text-base font-bold text-[#20A84A] uppercase tracking-wider mt-1">
                      {leader.designation}
                    </div>
                    {leader.credentials && (
                      <div className="text-xs text-muted font-mono mt-1">
                        {leader.credentials}
                      </div>
                    )}
                  </div>

                  <p className="text-sm sm:text-base text-body leading-relaxed pt-2 border-t border-line">
                    {leader.bio}
                  </p>

                  <div className="pt-4 flex items-center gap-6 text-xs text-muted">
                    <span className="flex items-center gap-1.5 text-accent-soft font-semibold">
                      <Shield className="w-4 h-4 text-[#20A84A]" />
                      Executive Leadership
                    </span>
                    <span>•</span>
                    <span>PHEPPL Governance Committee</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Governance Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-12 rounded-2xl bg-surface border border-line space-y-6">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-[#20A84A]">
              CORPORATE GOVERNANCE
            </div>
            <h3 className="text-2xl sm:text-3xl font-black font-heading text-heading uppercase">
              Management Philosophy & Compliance
            </h3>
            <p className="text-sm text-body">
              PHEPPL’s board adheres to international corporate compliance, transparent stakeholder engagement, strict anti-corruption principles, and uncompromising workplace safety regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-line">
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-heading uppercase">
                Integrity & Compliance
              </h4>
              <p className="text-xs text-muted leading-relaxed">
                Adherence to ISO 9001:2015 statutory audit protocols, transparent billing, and contractual reliability across private and government projects.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-bold text-heading uppercase">
                Workforce Development
              </h4>
              <p className="text-xs text-muted leading-relaxed">
                Continual skill enhancement for certified AWS welders, structural detailers, and project managers with modern digital tools.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-bold text-heading uppercase">
                Health & Safety Priority
              </h4>
              <p className="text-xs text-muted leading-relaxed">
                Board-level oversight of zero-incident HSE targets, daily site risk assessments, and environmental management.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

