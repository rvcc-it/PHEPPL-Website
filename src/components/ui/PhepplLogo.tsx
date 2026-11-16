import React from "react";
import Link from "next/link";

interface PhepplLogoProps {
  className?: string;
  variant?: "full" | "compact" | "mark-only";
  size?: "sm" | "md" | "lg";
  inverted?: boolean;
}

export function PhepplLogo({
  className = "",
  variant = "full",
  size = "md",
  inverted = false,
}: PhepplLogoProps) {
  const markDimensions = {
    sm: { width: 34, height: 34 },
    md: { width: 42, height: 42 },
    lg: { width: 52, height: 52 },
  }[size];

  const textSize = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  }[size];

  const subtextSize = {
    sm: "text-[9px] tracking-wider",
    md: "text-[10px] tracking-widest",
    lg: "text-[11px] tracking-[0.2em]",
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none shrink-0 ${className}`}>
      {/* Precision Industrial Girder Geometric Monogram Mark */}
      <svg
        width={markDimensions.width}
        height={markDimensions.height}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
      >
        <defs>
          <linearGradient id="pheppl-navy-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#082B4C" />
            <stop offset="100%" stopColor="#061B2C" />
          </linearGradient>
          <linearGradient id="pheppl-green-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#20A84A" />
          </linearGradient>
          <linearGradient id="pheppl-steel-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>
        </defs>

        {/* Outer Hexagonal Shield / Industrial Chamfered Frame */}
        <polygon
          points="50,4 92,26 92,74 50,96 8,74 8,26"
          fill={inverted ? "#061B2C" : "#082B4C"}
          stroke="#20A84A"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Steel Plate Corner Rivets */}
        <circle cx="50" cy="11" r="2" fill="#20A84A" />
        <circle cx="85" cy="30" r="2" fill="#20A84A" />
        <circle cx="85" cy="70" r="2" fill="#20A84A" />
        <circle cx="50" cy="89" r="2" fill="#20A84A" />
        <circle cx="15" cy="70" r="2" fill="#20A84A" />
        <circle cx="15" cy="30" r="2" fill="#20A84A" />

        {/* Interlocking Heavy Structural Steel P & H Geometry */}
        {/* Left 'P' Column Beam */}
        <path
          d="M26 26 L42 26 L42 74 L32 74 L32 50 L26 50 Z"
          fill="url(#pheppl-steel-grad)"
        />
        {/* P Upper Arch Loop */}
        <path
          d="M32 26 L52 26 C60 26 64 32 64 38 C64 45 59 50 51 50 L32 50 Z"
          fill="url(#pheppl-green-grad)"
        />
        {/* P Cutout Void */}
        <path
          d="M38 34 L50 34 C53 34 56 36 56 38 C56 41 53 42 50 42 L38 42 Z"
          fill="#061B2C"
        />

        {/* Cross Girder for H Interlock */}
        <path
          d="M48 46 L74 46 L74 54 L48 54 Z"
          fill="url(#pheppl-steel-grad)"
        />

        {/* Right 'H' Column Beam */}
        <path
          d="M62 32 L74 32 L74 74 L62 74 Z"
          fill="url(#pheppl-steel-grad)"
        />

        {/* Engineering Precision Diagonal Accent Slash */}
        <polygon
          points="22,70 28,70 48,22 42,22"
          fill="#20A84A"
          opacity="0.85"
        />
      </svg>

      {/* Typography */}
      {variant !== "mark-only" && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-black font-heading ${textSize} tracking-wider ${
                inverted ? "text-[#082B4C]" : "text-white"
              }`}
            >
              PHEP<span className="text-[#20A84A]">PL</span>
            </span>
            <span className="h-3 w-[1.5px] bg-[#20A84A]/60 hidden sm:inline-block" />
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest hidden sm:inline-block">
              ENGINEERING
            </span>
          </div>

          {variant === "full" && (
            <span
              className={`font-medium ${subtextSize} uppercase text-slate-400 mt-1 whitespace-nowrap`}
            >
              Paanayil Heavy Engineering Projects
            </span>
          )}
        </div>
      )}
    </div>
  );
}

