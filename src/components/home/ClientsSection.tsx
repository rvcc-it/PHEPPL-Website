"use client";

import React from "react";
import Image from "next/image";
import { Handshake } from "lucide-react";
import { ClientData } from "@/sanity/lib/fallback-data";

interface ClientsSectionProps {
  clients: ClientData[];
}

export function ClientsSection({ clients }: ClientsSectionProps) {
  return (
    <section className="py-20 bg-page border-t border-line relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#20A84A]/10 border border-[#20A84A]/25 text-xs font-bold uppercase tracking-widest text-[#20A84A]">
            <Handshake className="w-3.5 h-3.5" />
            CLIENT RELATIONSHIPS
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-heading uppercase tracking-tight">
            Trusted by Industry Leaders.
          </h2>
          <p className="text-sm text-muted">
            Showcasing proven client relationships and contracts executed across the energy, power utility, and national infrastructure sectors.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {clients.map((client) => (
            <div
              key={client._id}
              className="p-5 rounded-xl bg-surface border border-line hover:border-[#20A84A]/40 transition-all duration-300 flex flex-col items-center justify-center gap-3 text-center group h-36"
            >
              <div className="relative w-full h-16 flex items-center justify-center">
                {client.logoUrl ? (
                  <Image
                    src={client.logoUrl}
                    alt={client.name}
                    width={110}
                    height={55}
                    className="object-contain max-h-12 brightness-90 contrast-125 group-hover:brightness-105 group-hover:scale-105 transition-all duration-300"
                  />
                ) : (
                  <span className="text-xs font-bold text-heading">
                    {client.name}
                  </span>
                )}
              </div>

              <div className="space-y-0.5">
                <div className="text-[11px] font-bold text-body group-hover:text-[#20A84A] transition-colors line-clamp-1">
                  {client.name}
                </div>
                <div className="text-[10px] text-muted line-clamp-1">
                  {client.industry}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

