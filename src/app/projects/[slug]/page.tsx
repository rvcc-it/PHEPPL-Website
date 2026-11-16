import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Building,
  Calendar,
  Layers,
  CheckCircle2,
  ShieldCheck,
  FileText,
} from "lucide-react";
import { getProjectBySlug, getAllProjects } from "@/sanity/lib/data";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) {
    return { title: "Project Case Study | PHEPPL" };
  }
  return {
    title: `${project.title} | PHEPPL Projects`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export const revalidate = 60;

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const allProjects = await getAllProjects();
  const relatedProjects = allProjects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <div className="pt-28 pb-20 bg-page">
      {/* Page Header */}
      <section className="relative py-16 md:py-24 bg-panel/40 border-b border-line overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="mb-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted hover:text-[#20A84A] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Project Portfolio</span>
            </Link>
          </div>

          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded bg-[#20A84A]/10 border border-[#20A84A]/25 text-xs font-bold uppercase tracking-widest text-[#20A84A]">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded bg-surface border border-line text-xs font-semibold text-body flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#20A84A]" />
                {project.year}
              </span>
              <span className="px-3 py-1 rounded bg-surface border border-line text-xs font-semibold text-accent-soft flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#20A84A]" />
                {project.status}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-heading uppercase tracking-tight">
              {project.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-body pt-2">
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-[#20A84A]" />
                <span className="font-semibold text-heading">Client:</span>
                <span>{project.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#20A84A]" />
                <span className="font-semibold text-heading">Location:</span>
                <span>{project.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Gallery, Overview & Scope (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Main Featured Photograph */}
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-line shadow-2xl">
              <Image
                src={project.imageUrl || "/images/projects/1.webp"}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061B2C] via-transparent to-transparent opacity-60" />
            </div>

            {/* In-Depth Project Description */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black font-heading text-heading uppercase">
                Project Overview & Execution Context
              </h2>
              <p className="text-body text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Scope of Work */}
            {project.scope && project.scope.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-line">
                <h3 className="text-xl font-bold font-heading text-heading uppercase">
                  Scope of Work & Deliverables
                </h3>
                <div className="space-y-3">
                  {project.scope.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-surface border border-line flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#20A84A] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Image Gallery */}
            {project.galleryUrls && project.galleryUrls.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-line">
                <h3 className="text-xl font-bold font-heading text-heading uppercase">
                  Project Gallery
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.galleryUrls.map((imgUrl, i) => (
                    <div
                      key={i}
                      className="relative aspect-[4/3] rounded-xl overflow-hidden border border-line group"
                    >
                      <Image
                        src={imgUrl}
                        alt={`${project.title} - View ${i + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 35vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Technical Specs Card & Tender CTA (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Technical Parameters Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-line space-y-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#20A84A]">
                <Layers className="w-4 h-4" />
                TECHNICAL SPECIFICATIONS
              </div>

              <div className="space-y-4 divide-y divide-line text-xs sm:text-sm">
                <div className="pt-2 flex justify-between items-center">
                  <span className="text-muted">Client:</span>
                  <span className="font-bold text-heading text-right">{project.client}</span>
                </div>
                <div className="pt-3 flex justify-between items-center">
                  <span className="text-muted">Location:</span>
                  <span className="font-bold text-heading text-right">{project.location}</span>
                </div>
                <div className="pt-3 flex justify-between items-center">
                  <span className="text-muted">Category:</span>
                  <span className="font-bold text-[#20A84A] text-right">{project.category}</span>
                </div>
                <div className="pt-3 flex justify-between items-center">
                  <span className="text-muted">Timeline / Year:</span>
                  <span className="font-bold text-heading text-right">{project.year}</span>
                </div>
                <div className="pt-3 flex justify-between items-center">
                  <span className="text-muted">Status:</span>
                  <span className="font-bold text-accent-soft text-right">{project.status}</span>
                </div>

                {project.technicalDetails &&
                  project.technicalDetails.map((td, i) => (
                    <div key={i} className="pt-3 flex justify-between items-center">
                      <span className="text-muted">{td.label}:</span>
                      <span className="font-bold text-heading text-right font-mono">{td.value}</span>
                    </div>
                  ))}
              </div>

              <div className="pt-4 border-t border-line">
                <Link
                  href={`/quote?service=${encodeURIComponent(project.category)}`}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#20A84A] hover:bg-[#19873b] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-lg active:scale-95"
                >
                  <span>Request Similar Project Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Related Projects */}
            {relatedProjects.length > 0 && (
              <div className="p-6 rounded-2xl bg-surface border border-line space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-heading border-l-2 border-[#20A84A] pl-2.5">
                  Other Executed Contracts
                </h4>
                <div className="space-y-4">
                  {relatedProjects.map((rp) => (
                    <Link
                      key={rp.slug}
                      href={`/projects/${rp.slug}`}
                      className="flex items-center gap-3 group/rp"
                    >
                      <div className="relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-line">
                        <Image
                          src={rp.imageUrl || "/images/projects/1.webp"}
                          alt={rp.title}
                          fill
                          className="object-cover group-hover/rp:scale-110 transition-transform"
                        />
                      </div>
                      <div className="overflow-hidden">
                        <h5 className="text-xs font-bold text-heading group-hover/rp:text-[#20A84A] transition-colors truncate">
                          {rp.title}
                        </h5>
                        <p className="text-[11px] text-muted truncate">
                          {rp.client} • {rp.location}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

