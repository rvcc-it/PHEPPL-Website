"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Wrench, Shield, Check } from "lucide-react";
import { ServiceData } from "@/sanity/lib/fallback-data";

interface ServicesSectionProps {
  services: ServiceData[];
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-page relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-panel/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-6 border-b border-line">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#20A84A]/10 border border-[#20A84A]/25 text-xs font-bold uppercase tracking-widest text-[#20A84A]">
              <Wrench className="w-3.5 h-3.5" />
              OUR CAPABILITIES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-heading uppercase tracking-tight">
              Engineering Solutions That Deliver.
            </h2>
          </div>

          <div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-body hover:text-[#20A84A] transition-colors group"
            >
              <span>Explore All Engineering Services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Services Grid (3 columns on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service._id}
              className="group rounded-2xl bg-panel/30 border border-line hover:border-[#20A84A]/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#20A84A]/10"
            >
              <div>
                {/* Photographic Service Panel with Hover Zoom */}
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={service.imageUrl || "/images/services/civil.webp"}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061B2C] via-[#061B2C]/40 to-transparent" />

                  {/* Category Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded bg-page/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-[#20A84A] border border-line">
                      {service.category}
                    </span>
                  </div>

                  {/* Step / Index Marker */}
                  <div className="absolute bottom-3 right-4 font-mono text-2xl font-black text-heading/30 group-hover:text-[#20A84A] transition-colors">
                    0{index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold font-heading text-heading group-hover:text-[#20A84A] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-sm text-body leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>

                  {/* Capabilities Bullet Highlights */}
                  {service.capabilities && service.capabilities.length > 0 && (
                    <div className="space-y-2 pt-2 border-t border-line">
                      {service.capabilities.slice(0, 2).map((cap, cIdx) => (
                        <div
                          key={cIdx}
                          className="flex items-start gap-2 text-xs text-muted"
                        >
                          <Check className="w-3.5 h-3.5 text-[#20A84A] flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{cap}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="px-6 pb-6 pt-2">
                <Link
                  href={`/services/${service.slug}`}
                  className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-lg bg-surface hover:bg-[#20A84A] text-body hover:text-white text-xs font-bold uppercase tracking-wider transition-all group/btn"
                >
                  <span>Detailed Specifications</span>
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

