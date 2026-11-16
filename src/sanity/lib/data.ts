import { client } from "./client";
import {
  siteSettingsQuery,
  heroSectionQuery,
  aboutQuery,
  servicesQuery,
  serviceBySlugQuery,
  featuredProjectsQuery,
  allProjectsQuery,
  projectBySlugQuery,
  managementQuery,
  infrastructureQuery,
  certificationsQuery,
  careersQuery,
  clientsQuery,
} from "./queries";
import {
  fallbackSiteSettings,
  fallbackHero,
  fallbackAbout,
  fallbackServices,
  fallbackProjects,
  fallbackManagement,
  fallbackInfrastructure,
  fallbackCertifications,
  fallbackCareers,
  fallbackClients,
  SiteSettingsData,
  HeroData,
  AboutData,
  ServiceData,
  ProjectData,
  ManagementData,
  InfrastructureData,
  CertificationData,
  CareerData,
  ClientData,
} from "./fallback-data";

export async function getSiteSettings(): Promise<SiteSettingsData> {
  try {
    const data = await client.fetch(siteSettingsQuery);
    if (data && data.companyName) {
      return { ...fallbackSiteSettings, ...data };
    }
  } catch (error) {
    // Graceful fallback to verified company dataset
  }
  return fallbackSiteSettings;
}

export async function getHeroSection(): Promise<HeroData> {
  try {
    const data = await client.fetch(heroSectionQuery);
    if (data && data.headline) {
      return { ...fallbackHero, ...data };
    }
  } catch (error) {
    // Graceful fallback
  }
  return fallbackHero;
}

export async function getAboutData(): Promise<AboutData> {
  try {
    const data = await client.fetch(aboutQuery);
    if (data && data.overview) {
      return { ...fallbackAbout, ...data };
    }
  } catch (error) {
    // Graceful fallback
  }
  return fallbackAbout;
}

export async function getServices(): Promise<ServiceData[]> {
  try {
    const data = await client.fetch(servicesQuery);
    if (Array.isArray(data) && data.length > 0) {
      return data;
    }
  } catch (error) {
    // Graceful fallback
  }
  return fallbackServices;
}

export async function getServiceBySlug(slug: string): Promise<ServiceData | null> {
  try {
    const data = await client.fetch(serviceBySlugQuery, { slug });
    if (data && data.title) {
      return data;
    }
  } catch (error) {
    // Graceful fallback
  }
  const match = fallbackServices.find((s) => s.slug === slug);
  return match || null;
}

export async function getFeaturedProjects(): Promise<ProjectData[]> {
  try {
    const data = await client.fetch(featuredProjectsQuery);
    if (Array.isArray(data) && data.length > 0) {
      return data;
    }
  } catch (error) {
    // Graceful fallback
  }
  return fallbackProjects.filter((p) => p.isFeatured);
}

export async function getAllProjects(): Promise<ProjectData[]> {
  try {
    const data = await client.fetch(allProjectsQuery);
    if (Array.isArray(data) && data.length > 0) {
      return data;
    }
  } catch (error) {
    // Graceful fallback
  }
  return fallbackProjects;
}

export async function getProjectBySlug(slug: string): Promise<ProjectData | null> {
  try {
    const data = await client.fetch(projectBySlugQuery, { slug });
    if (data && data.title) {
      return data;
    }
  } catch (error) {
    // Graceful fallback
  }
  const match = fallbackProjects.find((p) => p.slug === slug);
  return match || null;
}

export async function getManagement(): Promise<ManagementData[]> {
  try {
    const data = await client.fetch(managementQuery);
    if (Array.isArray(data) && data.length > 0) {
      return data;
    }
  } catch (error) {
    // Graceful fallback
  }
  return fallbackManagement;
}

export async function getInfrastructure(): Promise<InfrastructureData[]> {
  try {
    const data = await client.fetch(infrastructureQuery);
    if (Array.isArray(data) && data.length > 0) {
      return data;
    }
  } catch (error) {
    // Graceful fallback
  }
  return fallbackInfrastructure;
}

export async function getCertifications(): Promise<CertificationData[]> {
  try {
    const data = await client.fetch(certificationsQuery);
    if (Array.isArray(data) && data.length > 0) {
      return data;
    }
  } catch (error) {
    // Graceful fallback
  }
  return fallbackCertifications;
}

export async function getCareers(): Promise<CareerData[]> {
  try {
    const data = await client.fetch(careersQuery);
    if (Array.isArray(data) && data.length > 0) {
      return data;
    }
  } catch (error) {
    // Graceful fallback
  }
  return fallbackCareers;
}

export async function getClients(): Promise<ClientData[]> {
  try {
    const data = await client.fetch(clientsQuery);
    if (Array.isArray(data) && data.length > 0) {
      return data;
    }
  } catch (error) {
    // Graceful fallback
  }
  return fallbackClients;
}

