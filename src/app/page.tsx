import React from "react";
import {
  getHeroSection,
  getAboutData,
  getServices,
  getFeaturedProjects,
  getCertifications,
  getClients,
} from "@/sanity/lib/data";

import { HeroSection } from "@/components/home/HeroSection";
import { CompanyIntroSection } from "@/components/home/CompanyIntroSection";
import { CompanyAtAGlance } from "@/components/home/CompanyAtAGlance";
import { ServicesSection } from "@/components/home/ServicesSection";
import { FeaturedProjectsSection } from "@/components/home/FeaturedProjectsSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { CertificationsSection } from "@/components/home/CertificationsSection";
import { ClientsSection } from "@/components/home/ClientsSection";
import { CtaSection } from "@/components/home/CtaSection";

export const revalidate = 60; // Automatic ISR revalidation every 60 seconds

export default async function HomePage() {
  const [
    heroData,
    aboutData,
    services,
    featuredProjects,
    certifications,
    clients,
  ] = await Promise.all([
    getHeroSection(),
    getAboutData(),
    getServices(),
    getFeaturedProjects(),
    getCertifications(),
    getClients(),
  ]);

  return (
    <>
      {/* SECTION 1: Cinematic Industrial Hero */}
      <HeroSection data={heroData} />

      {/* SECTION 2: Company Introduction (Editorial Layout) */}
      <CompanyIntroSection data={aboutData} />

      {/* SECTION 3: Company At A Glance (Verified Metrics) */}
      <CompanyAtAGlance />

      {/* SECTION 4: Our Engineering Services */}
      <ServicesSection services={services} />

      {/* SECTION 5: Featured Projects Portfolio */}
      <FeaturedProjectsSection projects={featuredProjects} />

      {/* SECTION 6: Why Choose PHEPPL */}
      <WhyChooseSection />

      {/* SECTION 7: Certifications & ISO Standards */}
      <CertificationsSection certifications={certifications} />

      {/* SECTION 8: Clients & Industrial Partners */}
      <ClientsSection clients={clients} />

      {/* SECTION 9: Project Call To Action */}
      <CtaSection />
    </>
  );
}

