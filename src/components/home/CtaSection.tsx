"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PhoneCall, Mail } from "lucide-react";

export function CtaSection() {
  return (
    <section className="theme-dark relative py-24 md:py-32 overflow-hidden bg-page">
      {/* Background Industrial Photograph with Cinematic Navy Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/home-hero.webp"
          alt="Heavy Industrial Infrastructure"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-page/90 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061B2C] via-[#061B2C]/95 to-[#082B4C]/80" />
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#20A84A]/15 border border-[#20A84A]/30 text-xs font-bold uppercase tracking-widest text-[#20A84A]">
          <span className="w-2 h-2 rounded-full bg-[#20A84A] animate-ping" />
          START A CONVERSATION
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading text-heading uppercase tracking-tight leading-tight">
          LET&apos;S BUILD SOMETHING EXCEPTIONAL.
        </h2>

        <p className="text-lg sm:text-xl text-body max-w-2xl mx-auto font-normal leading-relaxed">
          Looking for a reliable engineering and construction partner? Let&apos;s discuss your next project specifications, structural design, or turnkey EPC requirements.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/quote"
            className="inline-flex items-center justify-center gap-3 px-9 py-4 bg-[#20A84A] hover:bg-[#19873b] text-white font-bold text-sm uppercase tracking-wider rounded-md transition-all shadow-xl shadow-[#20A84A]/30 hover:shadow-[#20A84A]/50 active:scale-95 group"
          >
            <span>Request A Quote</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-surface hover:bg-surface text-heading font-bold text-sm uppercase tracking-wider rounded-md backdrop-blur-sm border border-line transition-all active:scale-95"
          >
            <PhoneCall className="w-4 h-4 text-[#20A84A]" />
            <span>Speak With Engineering</span>
          </Link>
        </div>

        {/* Quick Contact Ticker */}
        <div className="pt-8 border-t border-line flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs text-body font-medium">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#20A84A]" />
            <span>India HQ: +91 422 298 0000</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#20A84A]" />
            <span>Saudi Arabia: +966 11 234 5678</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#20A84A]" />
            <span>Tender Desk: info@pheppl.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}

