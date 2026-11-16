"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Building, Calendar, Layers } from "lucide-react";
import { ProjectData } from "@/sanity/lib/fallback-data";

interface FeaturedProjectsSectionProps {
  projects: ProjectData[];
}

export function FeaturedProjectsSection({ projects }: FeaturedProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Heavy Structural Fabrication",
    "Industrial Plant & Piping",
    "Infrastructure & Civil",
    "Turnkey EPC Engineering",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-20 lg:py-28 bg-panel/20 border-t border-line relative overflow-hidden">
      {/* Background technical grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#20A84A]/10 border border-[#20A84A]/25 text-xs font-bold uppercase tracking-widest text-[#20A84A]">
              <Layers className="w-3.5 h-3.5" />
              PORTFOLIO OF EXECUTION
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-heading uppercase tracking-tight">
              Featured Engineering Projects.
            </h2>
            <p className="text-sm sm:text-base text-body">
              Demonstrating heavy structural steel capabilities, turnkey industrial plant delivery, and high-precision civil infrastructure across India and the Middle East.
            </p>
          </div>

          <div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#20A84A] hover:bg-[#19873b] text-white font-bold text-xs uppercase tracking-wider rounded-md transition-all shadow-lg active:scale-95 group"
            >
              <span>Explore All Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-[#20A84A] text-white shadow-lg shadow-[#20A84A]/25"
                  : "bg-surface hover:bg-surface text-body border border-line"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.slice(0, 6).map((project) => (
            <div
              key={project._id}
              className="group rounded-2xl bg-panel/40 border border-line hover:border-[#20A84A]/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#20A84A]/10"
            >
              <div>
                {/* Image Container with Zoom and Overlays */}
                <div className="relative aspect-[16/11] w-full overflow-hidden">
                  <Image
                    src={project.imageUrl || "/images/projects/1.webp"}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061B2C] via-[#061B2C]/40 to-transparent" />

                  {/* Badges on Image */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-page/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-[#20A84A] border border-line">
                      {project.category}
                    </span>

                    <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-[10px] font-semibold text-slate-200 border border-white/10 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#20A84A]" />
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#20A84A]">
                      <Building className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{project.client}</span>
                    </div>

                    <h3 className="text-xl font-bold font-heading text-heading group-hover:text-[#20A84A] transition-colors leading-snug">
                      <Link href={`/projects/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-muted">
                    <MapPin className="w-3.5 h-3.5 text-muted flex-shrink-0" />
                    <span>{project.location}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-body leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Scope Tags */}
                  {project.scope && project.scope.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.scope.slice(0, 3).map((item, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-surface text-[10px] text-body border border-line"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 pb-6 pt-2">
                <Link
                  href={`/projects/${project.slug}`}
                  className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-lg bg-surface hover:bg-[#20A84A] text-body hover:text-white text-xs font-bold uppercase tracking-wider transition-all group/btn"
                >
                  <span>View Project Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

