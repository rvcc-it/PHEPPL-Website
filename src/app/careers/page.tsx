import React from "react";
import { Metadata } from "next";
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Users,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { getCareers } from "@/sanity/lib/data";
import { CareerForm } from "@/components/forms/CareerForm";

export const metadata: Metadata = {
  title: "Careers & Opportunities | Paanayil Heavy Engineering Projects Pvt. Ltd.",
  description:
    "Join PHEPPL's team of heavy engineering professionals, structural steel fabricators, and EPC project managers. View current vacancies and submit your resume.",
};

export const revalidate = 60;

export default async function CareersPage() {
  const careers = await getCareers();

  return (
    <div className="pt-28 pb-20 bg-page">
      {/* Header */}
      <section className="relative py-16 md:py-24 bg-panel/40 border-b border-line overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#20A84A]/10 border border-[#20A84A]/25 text-xs font-bold uppercase tracking-widest text-[#20A84A]">
              <Briefcase className="w-3.5 h-3.5" />
              JOIN OUR ENGINEERING TEAM
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-heading uppercase tracking-tight">
              Build Your Career with PHEPPL.
            </h1>
            <p className="text-base sm:text-lg text-body leading-relaxed">
              We offer ambitious engineers, fabricators, and project specialists the opportunity to work on landmark heavy structural and infrastructure contracts.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work with PHEPPL */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 border-b border-line">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-surface border border-line space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#20A84A]/10 text-[#20A84A] flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-heading uppercase">
              International Exposure
            </h3>
            <p className="text-xs text-body leading-relaxed">
              Cross-border career pathways between our Coimbatore works and RVCC Saudi Arabia operations on tier-1 energy contracts.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-surface border border-line space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#20A84A]/10 text-[#20A84A] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-heading uppercase">
              Zero-Harm Safety
            </h3>
            <p className="text-xs text-body leading-relaxed">
              ISO 45001:2015 safety leadership ensuring every employee and technician operates in protected, well-managed environments.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-surface border border-line space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#20A84A]/10 text-[#20A84A] flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-heading uppercase">
              Culture of Mastery
            </h3>
            <p className="text-xs text-body leading-relaxed">
              Mentorship under senior charted structural engineers, AWS/CSWIP welding inspectors, and certified PMP directors.
            </p>
          </div>
        </div>
      </section>

      {/* Current Openings & Application Form Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Job Vacancies (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#20A84A]">
                VACANCIES
              </span>
              <h2 className="text-3xl font-black font-heading text-heading uppercase">
                Current Openings
              </h2>
              <p className="text-sm text-muted">
                Review our active engineering and site positions or submit a general application.
              </p>
            </div>

            <div className="space-y-6">
              {careers.map((job) => (
                <div
                  key={job._id}
                  className="glass-card rounded-2xl border border-line p-6 sm:p-7 space-y-4 hover:border-[#20A84A]/40 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-line pb-4">
                    <div>
                      <h3 className="text-xl font-bold font-heading text-heading">
                        {job.title}
                      </h3>
                      <div className="text-xs font-bold text-[#20A84A] uppercase tracking-wider mt-0.5">
                        {job.department}
                      </div>
                    </div>

                    <span className="self-start sm:self-auto px-3 py-1 rounded bg-surface border border-line text-xs font-mono text-body">
                      {job.experience}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#20A84A]" />
                      {job.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#20A84A]" />
                      {job.type}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-body leading-relaxed">
                    {job.description}
                  </p>

                  {/* Requirements List */}
                  {job.requirements && job.requirements.length > 0 && (
                    <div className="space-y-1.5 pt-2">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-muted">
                        Qualifications:
                      </div>
                      {job.requirements.slice(0, 3).map((req, rIdx) => (
                        <div
                          key={rIdx}
                          className="flex items-start gap-2 text-xs text-body"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#20A84A] flex-shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="pt-2">
                    <a
                      href="#career-form"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#20A84A] hover:underline"
                    >
                      <span>Apply for this position below</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Application Form (5 cols) */}
          <div className="lg:col-span-5" id="career-form">
            <div className="sticky top-28 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-[#20A84A]">
                  FAST-TRACK CANDIDACY
                </span>
                <h3 className="text-2xl font-black font-heading text-heading uppercase">
                  Submit Your Application
                </h3>
                <p className="text-xs text-muted">
                  Fill out your professional credentials and attach your CV for direct evaluation by our HR team.
                </p>
              </div>

              <CareerForm defaultPosition="Senior Structural Engineer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

