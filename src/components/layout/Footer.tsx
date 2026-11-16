import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  ArrowUpRight,
  Clock,
  Globe2,
} from "lucide-react";
import { PhepplLogo } from "@/components/ui/PhepplLogo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="theme-dark bg-deep border-t border-line text-body relative overflow-hidden">
      {/* Subtle industrial background accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#20A84A]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Pre-Footer Bar: Sister Concern & Certification Banner */}
      <div className="border-b border-line bg-panel/40 backdrop-blur-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-[#20A84A]/20 text-[#20A84A]">
              <Globe2 className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-heading uppercase tracking-wider">
                International Sister Concern:
              </span>{" "}
              <span className="text-body">
                Riyadh Villas Contracting Est. (RVCC), Riyadh, Kingdom of Saudi Arabia
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-accent-soft">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#20A84A]" />
              ISO 9001:2015
            </span>
            <span>•</span>
            <span>ISO 14001:2015</span>
            <span>•</span>
            <span>ISO 45001:2015</span>
            <span>•</span>
            <span className="text-body">MSME Registered</span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Company Profile & Logo (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <PhepplLogo size="md" variant="full" />
            </Link>

            <p className="text-sm text-muted leading-relaxed">
              Paanayil Heavy Engineering Projects Private Limited (PHEPPL) is an established
              engineering and construction company founded in 2018 in Coimbatore, India.
              We specialize in heavy structural steel fabrication, turnkey industrial plant construction,
              infrastructure civil engineering, and equipment erection across demanding sectors.
            </p>

            <div className="pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-muted mb-2">
                Certified Quality Standard
              </div>
              <div className="flex items-center gap-3">
                <div className="px-3 py-1.5 rounded bg-surface border border-line text-xs font-mono text-accent-soft font-bold">
                  ISO 9001:2015
                </div>
                <div className="px-3 py-1.5 rounded bg-surface border border-line text-xs font-mono text-accent-soft font-bold">
                  ISO 14001:2015
                </div>
                <div className="px-3 py-1.5 rounded bg-surface border border-line text-xs font-mono text-accent-soft font-bold">
                  ISO 45001:2015
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Engineering Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-heading border-l-2 border-[#20A84A] pl-2.5">
              Engineering Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/services/heavy-structural-steel-fabrication"
                  className="hover:text-[#20A84A] transition-colors flex items-center justify-between group"
                >
                  <span>Heavy Structural Steel Fabrication</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-[#20A84A] transition-colors" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services/industrial-plant-construction-piping"
                  className="hover:text-[#20A84A] transition-colors flex items-center justify-between group"
                >
                  <span>Industrial Plant Construction & Piping</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-[#20A84A] transition-colors" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services/infrastructure-heavy-civil-engineering"
                  className="hover:text-[#20A84A] transition-colors flex items-center justify-between group"
                >
                  <span>Infrastructure & Civil Engineering</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-[#20A84A] transition-colors" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services/turnkey-epc-project-execution"
                  className="hover:text-[#20A84A] transition-colors flex items-center justify-between group"
                >
                  <span>Turnkey EPC Project Execution</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-[#20A84A] transition-colors" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services/equipment-erection-heavy-machinery"
                  className="hover:text-[#20A84A] transition-colors flex items-center justify-between group"
                >
                  <span>Equipment Erection & Heavy Rigging</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-[#20A84A] transition-colors" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services/industrial-plant-maintenance-shutdowns"
                  className="hover:text-[#20A84A] transition-colors flex items-center justify-between group"
                >
                  <span>Maintenance & Plant Shutdowns</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-[#20A84A] transition-colors" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-heading border-l-2 border-[#20A84A] pl-2.5">
              Corporate
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-[#20A84A] transition-colors">
                  About PHEPPL
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#20A84A] transition-colors">
                  Project Portfolio
                </Link>
              </li>
              <li>
                <Link href="/board-of-management" className="hover:text-[#20A84A] transition-colors">
                  Board of Management
                </Link>
              </li>
              <li>
                <Link href="/infrastructure" className="hover:text-[#20A84A] transition-colors">
                  Infrastructure & Yard
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#20A84A] transition-colors">
                  Careers & Openings
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-[#20A84A] transition-colors">
                  Request a Quote
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#20A84A] transition-colors">
                  Contact & Locations
                </Link>
              </li>
              <li>
                <Link href="/studio" className="text-muted hover:text-heading transition-colors">
                  Sanity Studio (CMS)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office Locations (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-heading border-l-2 border-[#20A84A] pl-2.5">
              Office Locations
            </h4>

            {/* India Corporate Office */}
            <div className="space-y-1.5 text-xs">
              <div className="font-bold text-heading flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#20A84A]" />
                <span>India HQ & Works:</span>
              </div>
              <p className="text-muted pl-5 leading-relaxed">
                SF No. 342/1, Heavy Industrial Zone, Sulur, Coimbatore - 641402, Tamil Nadu, India.
              </p>
              <div className="pl-5 text-body">
                <a href="tel:+914222980000" className="hover:text-[#20A84A] transition-colors">
                  +91 422 298 0000
                </a>
              </div>
            </div>

            {/* Saudi Arabia Office */}
            <div className="space-y-1.5 text-xs pt-2 border-t border-line">
              <div className="font-bold text-heading flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#20A84A]" />
                <span>Saudi Arabia (Sister Concern):</span>
              </div>
              <p className="text-muted pl-5 leading-relaxed">
                Riyadh Villas Contracting Est., King Fahd Road, Al Olaya, Riyadh, KSA.
              </p>
              <div className="pl-5 text-body">
                <a href="tel:+966112345678" className="hover:text-[#20A84A] transition-colors">
                  +966 11 234 5678
                </a>
              </div>
            </div>

            {/* Direct Email */}
            <div className="pt-2 border-t border-line text-xs">
              <a
                href="mailto:info@pheppl.com"
                className="flex items-center gap-2 text-body hover:text-[#20A84A] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#20A84A]" />
                <span>info@pheppl.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="border-t border-line mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <div>
            &copy; {currentYear} Paanayil Heavy Engineering Projects Private Limited (PHEPPL).
            All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-body transition-colors">
              HSE Policy
            </Link>
            <span>•</span>
            <Link href="/about" className="hover:text-body transition-colors">
              Quality Assurance
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-body transition-colors">
              Terms of Engagement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

