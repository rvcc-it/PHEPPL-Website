"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, HardHat, Award, ChevronDown } from "lucide-react";
import { HeroData } from "@/sanity/lib/fallback-data";

interface HeroSectionProps {
  data: HeroData;
}

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="theme-dark relative min-h-screen flex items-center justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-page">
      {/* Background Cinematic Image with Multi-Layer Industrial Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={data.backgroundImageUrl || "/images/hero/hero-bg.webp"}
          alt="Heavy Industrial Engineering and Construction"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 animate-in fade-in zoom-in-105 duration-1000"
        />
        {/* Layer 1: Deep Navy Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061B2C] via-[#061B2C]/90 to-[#082B4C]/75" />
        {/* Layer 2: Top and Bottom Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#061B2C]/90 via-transparent to-[#061B2C]" />
        {/* Layer 3: Engineering Technical Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="max-w-4xl space-y-6 md:space-y-8">
          {/* Supporting Label / Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface backdrop-blur-md border border-line text-xs md:text-sm font-semibold tracking-widest uppercase text-body">
            <span className="w-2 h-2 rounded-full bg-[#20A84A] animate-ping" />
            <span className="text-[#20A84A] font-bold">PHEPPL</span>
            <span className="text-muted">|</span>
            <span className="tracking-wider line-clamp-1">{data.eyebrow}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-heading tracking-tight text-heading uppercase leading-[1.08]">
            {data.headline.split(". ").map((part, idx) => (
              <span key={idx} className="block">
                {idx === 1 ? (
                  <span className="text-gradient-silver">
                    {part.replace(".", "")}
                    <span className="text-[#20A84A]">.</span>
                  </span>
                ) : (
                  <span>{part}. </span>
                )}
              </span>
            ))}
          </h1>

          {/* Supporting Description */}
          <p className="text-lg sm:text-xl text-body max-w-2xl font-normal leading-relaxed">
            {data.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link
              href={data.primaryCtaLink || "/projects"}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#20A84A] hover:bg-[#19873b] text-white font-bold text-sm uppercase tracking-wider rounded-md transition-all shadow-xl shadow-[#20A84A]/30 hover:shadow-[#20A84A]/50 active:scale-95 group"
            >
              <span>{data.primaryCtaText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href={data.secondaryCtaLink || "/contact"}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-surface hover:bg-surface text-heading font-bold text-sm uppercase tracking-wider rounded-md backdrop-blur-sm border border-line transition-all hover:border-line active:scale-95"
            >
              <span>{data.secondaryCtaText}</span>
            </Link>
          </div>

          {/* Trust Metrics / Ticker Strip */}
          <div className="pt-8 md:pt-12 border-t border-line grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black font-heading text-heading">
                2018<span className="text-[#20A84A] text-lg font-bold"> EST.</span>
              </div>
              <div className="text-xs uppercase tracking-wider text-muted font-medium">
                Founded in Coimbatore
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black font-heading text-heading">
                45<span className="text-[#20A84A]">+</span>
              </div>
              <div className="text-xs uppercase tracking-wider text-muted font-medium">
                Completed Contracts
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black font-heading text-heading">
                18k<span className="text-[#20A84A]"> MT</span>
              </div>
              <div className="text-xs uppercase tracking-wider text-muted font-medium">
                Annual Steel Capacity
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black font-heading text-heading">
                ISO<span className="text-[#20A84A] text-lg font-bold"> TRIPLE</span>
              </div>
              <div className="text-xs uppercase tracking-wider text-muted font-medium">
                9001, 14001, 45001
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 text-xs text-muted">
        <span className="tracking-widest uppercase text-[10px] font-semibold text-muted">
          Scroll to explore
        </span>
        <ChevronDown className="w-4 h-4 text-[#20A84A] animate-bounce" />
      </div>
    </section>
  );
}

