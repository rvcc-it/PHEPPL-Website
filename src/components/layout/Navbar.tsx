"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { PhepplLogo } from "@/components/ui/PhepplLogo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      {
        title: "Heavy Structural Steel Fabrication",
        href: "/services/heavy-structural-steel-fabrication",
        desc: "Custom trusses, built-up girders & pipe racks",
      },
      {
        title: "Industrial Plant & Process Piping",
        href: "/services/industrial-plant-construction-piping",
        desc: "High-pressure alloy piping & equipment hookups",
      },
      {
        title: "Infrastructure & Heavy Civil",
        href: "/services/infrastructure-heavy-civil-engineering",
        desc: "Heavy foundations, substations & bridge works",
      },
      {
        title: "Turnkey EPC Project Execution",
        href: "/services/turnkey-epc-project-execution",
        desc: "Integrated design, procurement & site delivery",
      },
      {
        title: "Equipment Erection & Heavy Rigging",
        href: "/services/equipment-erection-heavy-machinery",
        desc: "Tandem crane lifting & precision shaft alignment",
      },
      {
        title: "Maintenance & Plant Shutdowns",
        href: "/services/industrial-plant-maintenance-shutdowns",
        desc: "24/7 fast-track turnaround & structural retrofits",
      },
    ],
  },
  { name: "Projects", href: "/projects" },
  { name: "Board of Management", href: "/board-of-management" },
  { name: "Infrastructure", href: "/infrastructure" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`theme-dark fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-page/95 backdrop-blur-md shadow-2xl border-b border-line py-3"
            : "bg-gradient-to-b from-page/90 via-page/60 to-transparent py-4 md:py-5"
        }`}
      >
        {/* Top Info Bar (Desktop only, visible before scroll) */}
        {!isScrolled && (
          <div className="hidden lg:block border-b border-line pb-2 mb-3 text-xs text-body">
            <div className="max-w-[1440px] mx-auto px-6 flex justify-between items-center">
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-1.5 text-accent-soft font-semibold tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#20A84A]" />
                  ISO 9001:2015, ISO 14001:2015 & ISO 45001:2015 CERTIFIED
                </span>
                <span className="text-muted">|</span>
                <span className="text-muted">
                  Sister Concern of Riyadh Villas Contracting Est., Saudi Arabia
                </span>
              </div>
              <div className="flex items-center gap-6">
                <a
                  href="tel:+914222980000"
                  className="flex items-center gap-1.5 hover:text-heading transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#20A84A]" />
                  <span>India: +91 422 298 0000</span>
                </a>
                <a
                  href="mailto:info@pheppl.com"
                  className="flex items-center gap-1.5 hover:text-heading transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#20A84A]" />
                  <span>info@pheppl.com</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Main Navigation Bar */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="group focus:outline-none shrink-0">
            <PhepplLogo size={isScrolled ? "sm" : "md"} variant="full" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center justify-center gap-0.5 2xl:gap-1.5 flex-1 min-w-0">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              if (link.dropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 px-2.5 2xl:px-3 py-2 text-sm font-semibold whitespace-nowrap rounded-md transition-colors ${
                        isActive
                          ? "text-[#20A84A]"
                          : "text-body hover:text-heading hover:bg-surface"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          servicesDropdownOpen ? "rotate-180 text-[#20A84A]" : ""
                        }`}
                      />
                    </Link>

                    {/* Services Dropdown Menu */}
                    <div
                      className={`absolute top-full left-0 w-80 pt-2 transition-all duration-200 ${
                        servicesDropdownOpen
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2 pointer-events-none"
                      }`}
                    >
                      <div className="bg-panel border border-line rounded-xl shadow-2xl p-2 backdrop-blur-xl">
                        <div className="text-[11px] font-bold text-muted tracking-wider uppercase px-3 py-2 border-b border-line">
                          Engineering Capabilities
                        </div>
                        <div className="space-y-1 mt-1">
                          {link.dropdown.map((sub) => (
                            <Link
                              key={sub.title}
                              href={sub.href}
                              className="block p-2.5 rounded-lg hover:bg-surface transition-colors group/sub"
                            >
                              <div className="text-xs font-semibold text-body group-hover/sub:text-[#20A84A] transition-colors">
                                {sub.title}
                              </div>
                              <div className="text-[11px] text-muted mt-0.5 line-clamp-1">
                                {sub.desc}
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="border-t border-line mt-2 pt-2 px-3 pb-1">
                          <Link
                            href="/services"
                            className="text-xs font-semibold text-[#20A84A] hover:underline flex items-center justify-between"
                          >
                            <span>View All 6 Services</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-2.5 2xl:px-3 py-2 text-sm font-semibold whitespace-nowrap rounded-md transition-colors ${
                    isActive
                      ? "text-[#20A84A]"
                      : "text-body hover:text-heading hover:bg-surface"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button & Mobile Trigger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <ThemeToggle />
            <Link
              href="/quote"
              className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#20A84A] hover:bg-[#19873b] transition-all rounded-md shadow-lg shadow-[#20A84A]/20 hover:shadow-[#20A84A]/40 active:scale-95"
            >
              <span>Get A Quote</span>
              <ArrowRight className="w-4 h-4 hidden sm:inline-block" />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-body hover:text-heading rounded-md hover:bg-surface focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-heading" />
              ) : (
                <Menu className="w-6 h-6 text-heading" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop & Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 xl:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Slide-out Panel */}
          <div className="theme-dark fixed top-0 right-0 bottom-0 w-full max-w-sm bg-page border-l border-line shadow-2xl p-6 overflow-y-auto flex flex-col justify-between">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-line">
                <PhepplLogo size="sm" variant="full" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-muted hover:text-heading rounded-lg hover:bg-surface"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links List */}
              <div className="py-6 space-y-1">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);

                  return (
                    <div key={link.name}>
                      <Link
                        href={link.href}
                        className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                          isActive
                            ? "bg-[#20A84A]/10 text-[#20A84A] border-l-2 border-[#20A84A]"
                            : "text-body hover:text-heading hover:bg-surface"
                        }`}
                      >
                        <span>{link.name}</span>
                        {link.dropdown && (
                          <ChevronDown className="w-4 h-4 text-muted" />
                        )}
                      </Link>
                      {link.dropdown && (
                        <div className="pl-4 pr-2 py-1 space-y-1 mt-1 border-l border-line ml-3">
                          {link.dropdown.map((sub) => (
                            <Link
                              key={sub.title}
                              href={sub.href}
                              className="block py-1.5 text-xs text-body hover:text-[#20A84A]"
                            >
                              {sub.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Contact & Quick Details */}
            <div className="pt-6 border-t border-line space-y-4">
              <Link
                href="/quote"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold uppercase tracking-wider text-white bg-[#20A84A] hover:bg-[#19873b] rounded-lg shadow-lg text-center"
              >
                <span>Request Project Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="space-y-2 text-xs text-muted">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#20A84A]" />
                  <span>India: +91 422 298 0000</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#20A84A]" />
                  <span>Saudi Arabia: +966 11 234 5678</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#20A84A]" />
                  <span>info@pheppl.com</span>
                </div>
              </div>

              <div className="text-[10px] text-muted pt-2 border-t border-line">
                ISO 9001:2015, ISO 14001:2015 & ISO 45001:2015 Registered
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

