"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  MapPin,
  Building,
  Calendar,
  ArrowRight,
  Filter,
  Layers,
} from "lucide-react";
import { ProjectData } from "@/sanity/lib/fallback-data";

interface ProjectsClientProps {
  initialProjects: ProjectData[];
}

export function ProjectsClient({ initialProjects }: ProjectsClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  const categories = useMemo(() => {
    const set = new Set(initialProjects.map((p) => p.category));
    return ["All", ...Array.from(set)];
  }, [initialProjects]);

  const locations = ["All", "India", "Saudi Arabia"];

  const filteredProjects = useMemo(() => {
    return initialProjects.filter((p) => {
      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || p.category === selectedCategory;

      const matchesLocation =
        selectedLocation === "All" ||
        (selectedLocation === "India" && p.location.toLowerCase().includes("india")) ||
        (selectedLocation === "Saudi Arabia" &&
          (p.location.toLowerCase().includes("saudi") || p.location.toLowerCase().includes("ksa")));

      return matchesSearch && matchesCategory && matchesLocation;
    });
  }, [initialProjects, searchQuery, selectedCategory, selectedLocation]);

  return (
    <div className="space-y-10">
      {/* Search & Filter Bar */}
      <div className="p-6 rounded-2xl bg-panel/40 border border-line backdrop-blur-md shadow-xl flex flex-col md:flex-row gap-4 justify-between items-center">
        {/* Search Input */}
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by client, location, or keyword..."
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-page border border-line focus:border-[#20A84A] focus:outline-none text-heading text-xs sm:text-sm placeholder-slate-500 transition-colors"
          />
        </div>

        {/* Location Filter */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-muted flex items-center gap-1.5 whitespace-nowrap">
            <MapPin className="w-3.5 h-3.5 text-[#20A84A]" />
            Location:
          </span>
          <div className="flex items-center gap-1">
            {locations.map((loc) => (
              <button
                key={loc}
                onClick={() => setSelectedLocation(loc)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  selectedLocation === loc
                    ? "bg-[#20A84A] text-white"
                    : "bg-surface hover:bg-surface text-body"
                }`}
              >
                {loc}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
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
      {filteredProjects.length === 0 ? (
        <div className="py-16 text-center space-y-3 bg-surface rounded-2xl border border-line">
          <p className="text-base text-body">
            No projects matched your selected filter criteria.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
              setSelectedLocation("All");
            }}
            className="px-4 py-2 rounded-lg bg-[#20A84A] text-white text-xs font-bold uppercase tracking-wider"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project._id}
              className="group rounded-2xl bg-panel/40 border border-line hover:border-[#20A84A]/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#20A84A]/10"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/11] w-full overflow-hidden">
                  <Image
                    src={project.imageUrl || "/images/projects/1.webp"}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061B2C] via-[#061B2C]/40 to-transparent" />

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

                  {/* Scope badges */}
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

              {/* Action Button */}
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
      )}
    </div>
  );
}

