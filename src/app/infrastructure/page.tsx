import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Factory,
  Cpu,
  Truck,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Maximize2,
  Gauge,
} from "lucide-react";
import { getInfrastructure } from "@/sanity/lib/data";

export const metadata: Metadata = {
  title: "Infrastructure & Fleet | Paanayil Heavy Engineering Projects Pvt. Ltd.",
  description:
    "Explore PHEPPL's 120,000 sq.ft heavy structural fabrication yard in Sulur, Coimbatore, automated CNC machinery, 50T-150T crane fleet, and accredited testing laboratories.",
};

export const revalidate = 60;

export default async function InfrastructurePage() {
  const infrastructure = await getInfrastructure();

  return (
    <div className="pt-28 pb-20 bg-page">
      {/* Header */}
      <section className="relative py-16 md:py-24 bg-panel/40 border-b border-line overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#20A84A]/10 border border-[#20A84A]/25 text-xs font-bold uppercase tracking-widest text-[#20A84A]">
              <Factory className="w-3.5 h-3.5" />
              YARDS & MACHINERY FLEET
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-heading uppercase tracking-tight">
              Operational Infrastructure.
            </h1>
            <p className="text-base sm:text-lg text-body leading-relaxed">
              Equipped with 120,000+ sq.ft of covered heavy fabrication bays, multi-axis CNC profile cutters, heavy overhead gantry cranes, and automated submerged arc welding lines.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        {infrastructure.map((facility, index) => {
          const isEven = index % 2 === 1;
          return (
            <div
              key={facility._id}
              className="glass-card rounded-2xl border border-line p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-[#20A84A]/40"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Photo */}
                <div
                  className={`lg:col-span-5 relative rounded-xl overflow-hidden border border-line aspect-[16/11] group ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={facility.imageUrl || "/images/services/civil.webp"}
                    alt={facility.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061B2C] via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded bg-page/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-[#20A84A] border border-line">
                      {facility.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-7 space-y-5 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="text-xs font-mono font-bold text-[#20A84A] uppercase">
                      FACILITY / RESOURCE 0{index + 1}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black font-heading text-heading uppercase leading-tight">
                      {facility.title}
                    </h2>
                    <div className="text-xs text-muted font-medium">
                      Location: {facility.location}
                    </div>
                  </div>

                  {facility.capacity && (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#20A84A]/10 border border-[#20A84A]/25 text-xs font-bold text-accent-soft font-mono">
                      <Gauge className="w-4 h-4 text-[#20A84A]" />
                      <span>Capacity: {facility.capacity}</span>
                    </div>
                  )}

                  <p className="text-sm sm:text-base text-body leading-relaxed">
                    {facility.description}
                  </p>

                  {/* Specifications */}
                  {facility.specs && facility.specs.length > 0 && (
                    <div className="space-y-2 pt-2 border-t border-line">
                      <div className="text-xs font-bold uppercase tracking-wider text-muted">
                        Equipment & Facility Features:
                      </div>
                      <div className="space-y-1.5">
                        {facility.specs.map((spec, sIdx) => (
                          <div
                            key={sIdx}
                            className="flex items-start gap-2 text-xs text-body"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#20A84A] flex-shrink-0 mt-0.5" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Yard Safety & Logistics Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-12 rounded-2xl bg-panel border border-[#20A84A]/30 text-center space-y-5">
          <h3 className="text-2xl sm:text-3xl font-black font-heading text-heading uppercase">
            Heavy Haulage & Nationwide Rigging Logistics
          </h3>
          <p className="text-sm text-body max-w-2xl mx-auto leading-relaxed">
            In addition to stationary fabrication yards, PHEPPL operates certified mobile crane fleets and heavy haulage partnerships across industrial transport corridors throughout Southern India and Saudi Arabia.
          </p>
          <div className="pt-2">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#20A84A] hover:bg-[#19873b] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-lg active:scale-95"
            >
              <span>Inquire About Fabrication Capacity</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

