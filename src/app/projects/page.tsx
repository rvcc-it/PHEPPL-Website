import React from "react";
import { Metadata } from "next";
import { Layers } from "lucide-react";
import { getAllProjects } from "@/sanity/lib/data";
import { ProjectsClient } from "@/components/projects/ProjectsClient";

export const metadata: Metadata = {
  title: "Projects Portfolio | Paanayil Heavy Engineering Projects Pvt. Ltd.",
  description:
    "Explore PHEPPL's portfolio of heavy structural steel fabrication, industrial plant construction, and infrastructure projects across India and Saudi Arabia for clients including Saudi Aramco, SECO, and GCCIA.",
};

export const revalidate = 60;

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <div className="pt-28 pb-20 bg-page">
      {/* Header */}
      <section className="relative py-16 md:py-24 bg-panel/40 border-b border-line overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#20A84A]/10 border border-[#20A84A]/25 text-xs font-bold uppercase tracking-widest text-[#20A84A]">
              <Layers className="w-3.5 h-3.5" />
              PROJECT PORTFOLIO
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-heading uppercase tracking-tight">
              Engineering Excellence Across Borders.
            </h1>
            <p className="text-base sm:text-lg text-body leading-relaxed">
              Discover verified structural steel, EPC plant, and civil infrastructure projects delivered by Paanayil Heavy Engineering Projects across India and Saudi Arabia.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Portfolio Filter & Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <ProjectsClient initialProjects={projects} />
      </section>
    </div>
  );
}

