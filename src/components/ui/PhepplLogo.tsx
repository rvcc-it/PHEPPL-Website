import React from "react";

interface PhepplLogoProps {
  className?: string;
  variant?: "full" | "compact" | "mark-only";
  size?: "sm" | "md" | "lg";
  inverted?: boolean;
}

// Official PHEPPL logo. The artwork has a white background, so it is shown
// on a white rounded plate that reads cleanly on both dark and light headers.
export function PhepplLogo({ className = "", size = "md" }: PhepplLogoProps) {
  const height = { sm: "h-10", md: "h-12 md:h-14", lg: "h-16 md:h-20" }[size];

  return (
    <div
      className={`inline-flex items-center shrink-0 select-none rounded-lg bg-white px-3 py-1 shadow-md ring-1 ring-black/5 transition-all duration-300 group-hover:shadow-lg ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/logo/pheppl-logo.png"
        alt="PHEPPL – Paanayil Heavy Engineering Projects Private Limited"
        className={`${height} w-auto object-contain`}
      />
    </div>
  );
}
