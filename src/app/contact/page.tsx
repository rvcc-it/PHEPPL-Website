import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe2,
  ShieldCheck,
  Building2,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { getSiteSettings } from "@/sanity/lib/data";

export const metadata: Metadata = {
  title: "Contact Us & Global Offices | Paanayil Heavy Engineering Projects Pvt. Ltd.",
  description:
    "Contact PHEPPL corporate offices and fabrication works in Sulur, Coimbatore, India, or our international sister concern Riyadh Villas Contracting Est., Riyadh, Saudi Arabia.",
};

export const revalidate = 60;

export default async function ContactPage() {
  const settings = await getSiteSettings();

  return (
    <div className="pt-28 pb-20 bg-page">
      {/* Header */}
      <section className="relative py-16 md:py-24 bg-panel/40 border-b border-line overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#20A84A]/10 border border-[#20A84A]/25 text-xs font-bold uppercase tracking-widest text-[#20A84A]">
              <Phone className="w-3.5 h-3.5" />
              GLOBAL TOUCHPOINTS
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-heading uppercase tracking-tight">
              Connect With Engineering.
            </h1>
            <p className="text-base sm:text-lg text-body leading-relaxed">
              Reach our corporate headquarters and fabrication yard in Coimbatore, India, or connect with our international sister concern in Riyadh, Kingdom of Saudi Arabia.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Office Cards & Contact Form */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Office Locations & Fast Contact (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#20A84A]">
                LOCATIONS & DESKS
              </span>
              <h2 className="text-3xl font-black font-heading text-heading uppercase">
                Our Operating Centers
              </h2>
            </div>

            {/* India Corporate HQ */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-line space-y-4 hover:border-[#20A84A]/40 transition-colors">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-[#20A84A]/10 text-[10px] font-bold uppercase tracking-wider text-[#20A84A] border border-[#20A84A]/25">
                  Corporate HQ & Works Yard
                </span>
                <span className="text-xs font-mono text-muted">Coimbatore, India</span>
              </div>

              <h3 className="text-xl font-bold font-heading text-heading">
                Paanayil Heavy Engineering Projects Pvt. Ltd.
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-body">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#20A84A] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{settings.addressIndia}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#20A84A] flex-shrink-0" />
                  <a
                    href={`tel:${settings.contactPhoneIndia}`}
                    className="hover:text-heading transition-colors"
                  >
                    {settings.contactPhoneIndia}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#20A84A] flex-shrink-0" />
                  <a
                    href={`mailto:${settings.contactEmail}`}
                    className="hover:text-heading transition-colors"
                  >
                    {settings.contactEmail}
                  </a>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-line text-muted">
                  <Clock className="w-4 h-4 text-[#20A84A] flex-shrink-0" />
                  <span>Mon – Sat: 08:30 AM – 06:30 PM (IST)</span>
                </div>
              </div>
            </div>

            {/* Saudi Arabia Office */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-line space-y-4 hover:border-[#20A84A]/40 transition-colors">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-surface text-[10px] font-bold uppercase tracking-wider text-body border border-line">
                  International Sister Concern
                </span>
                <span className="text-xs font-mono text-muted">Riyadh, KSA</span>
              </div>

              <h3 className="text-xl font-bold font-heading text-heading">
                Riyadh Villas Contracting Est. (RVCC)
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-body">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#20A84A] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{settings.addressSaudi}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#20A84A] flex-shrink-0" />
                  <a
                    href={`tel:${settings.contactPhoneSaudi}`}
                    className="hover:text-heading transition-colors"
                  >
                    {settings.contactPhoneSaudi}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Globe2 className="w-4 h-4 text-[#20A84A] flex-shrink-0" />
                  <span>Saudi Aramco, SECO, GCCIA Approved Partner</span>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-line text-muted">
                  <Clock className="w-4 h-4 text-[#20A84A] flex-shrink-0" />
                  <span>Sun – Thu: 08:00 AM – 05:30 PM (AST)</span>
                </div>
              </div>
            </div>

            {/* Direct Tender Route Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-panel to-page border border-[#20A84A]/30 space-y-3">
              <h4 className="text-base font-bold text-heading uppercase">
                Looking for a Formal Project Quote?
              </h4>
              <p className="text-xs text-body leading-relaxed">
                Use our dedicated RFQ portal to transmit drawings, structural BOQ, and schedule specifications directly to technical estimation.
              </p>
              <div className="pt-1">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#20A84A] hover:underline"
                >
                  <span>Go to Project Quote Portal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#20A84A]">
                TRANSMIT INQUIRY
              </span>
              <h2 className="text-3xl font-black font-heading text-heading uppercase">
                Send a Message
              </h2>
              <p className="text-sm text-muted">
                Submit your inquiry and our corporate coordination team will respond within 24 hours.
              </p>
            </div>

            <ContactForm />

            {/* Map Integration Graphic */}
            <div className="rounded-2xl border border-line overflow-hidden bg-surface p-6 space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold uppercase tracking-wider text-heading flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#20A84A]" />
                  Works Facility Geolocation
                </span>
                <span className="font-mono text-muted">11.0264° N, 77.1246° E</span>
              </div>
              <div className="relative aspect-[21/9] w-full rounded-xl overflow-hidden bg-deep border border-line flex items-center justify-center p-4 text-center">
                <div className="space-y-1">
                  <Building2 className="w-8 h-8 text-[#20A84A] mx-auto animate-pulse" />
                  <div className="text-xs font-bold text-heading">
                    PHEPPL Sulur Heavy Works Yard
                  </div>
                  <div className="text-[11px] text-muted">
                    Coimbatore Heavy Industrial Corridor, Sulur - 641402, Tamil Nadu, India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

