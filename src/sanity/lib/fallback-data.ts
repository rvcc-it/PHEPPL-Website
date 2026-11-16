export interface SiteSettingsData {
  companyName: string;
  tagline: string;
  contactEmail: string;
  contactPhoneIndia: string;
  contactPhoneSaudi: string;
  whatsappNumber: string;
  addressIndia: string;
  addressSaudi: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
  metaDescription: string;
  logoUrl?: string;
}

export interface HeroData {
  eyebrow: string;
  headline: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  backgroundImageUrl: string;
}

export interface AboutData {
  sectionLabel: string;
  heading: string;
  overview: string;
  vision: string;
  mission: string;
  values: { title: string; description: string }[];
  imageUrl: string;
  establishedYear: number;
}

export interface ServiceData {
  _id: string;
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  capabilities: string[];
  methodology?: { step: string; title: string; description: string }[];
  order: number;
}

export interface ProjectData {
  _id: string;
  title: string;
  slug: string;
  client: string;
  location: string;
  category: string;
  year: string;
  status: "Completed" | "In Progress" | "Ongoing Contract";
  description: string;
  imageUrl: string;
  galleryUrls?: string[];
  scope: string[];
  technicalDetails?: { label: string; value: string }[];
  isFeatured?: boolean;
}

export interface ManagementData {
  _id: string;
  name: string;
  designation: string;
  credentials?: string;
  bio: string;
  photoUrl: string;
}

export interface InfrastructureData {
  _id: string;
  title: string;
  category: string;
  location: string;
  capacity?: string;
  description: string;
  imageUrl: string;
  specs: string[];
}

export interface CertificationData {
  _id: string;
  name: string;
  scope: string;
  issuingBody: string;
  certificateNumber?: string;
  badgeUrl: string;
  code: string;
}

export interface CareerData {
  _id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  deadline?: string;
}

export interface ClientData {
  _id: string;
  name: string;
  industry: string;
  logoUrl: string;
  website?: string;
}

export const fallbackSiteSettings: SiteSettingsData = {
  companyName: "Paanayil Heavy Engineering Projects Private Limited (PHEPPL)",
  tagline: "Engineering Excellence. Building The Future.",
  contactEmail: "info@pheppl.com",
  contactPhoneIndia: "+91 422 298 0000",
  contactPhoneSaudi: "+966 11 234 5678",
  whatsappNumber: "+919842212345",
  addressIndia: "SF No. 342/1, Heavy Engineering Industrial Zone, Sulur, Coimbatore - 641402, Tamil Nadu, India",
  addressSaudi: "Riyadh Villas Contracting Est., King Fahd Road, Al Olaya District, Riyadh, Kingdom of Saudi Arabia",
  socialLinks: {
    linkedin: "https://www.linkedin.com/company/pheppl",
    twitter: "https://twitter.com/pheppl",
    instagram: "https://instagram.com/pheppl_engineering",
  },
  metaDescription: "Paanayil Heavy Engineering Projects Private Limited (PHEPPL) is a premier engineering, heavy structural steel fabrication, EPC, and infrastructure construction company established in 2018 in Coimbatore, India, and sister concern of Riyadh Villas Contracting Est., Saudi Arabia.",
  logoUrl: "/images/about/paanayil-heavy.webp",
};

export const fallbackHero: HeroData = {
  eyebrow: "PAANAYIL HEAVY ENGINEERING PROJECTS PRIVATE LIMITED",
  headline: "ENGINEERING EXCELLENCE. BUILDING THE FUTURE.",
  description: "Delivering reliable engineering and construction solutions through expertise, innovation and an uncompromising commitment to quality.",
  primaryCtaText: "EXPLORE OUR PROJECTS",
  primaryCtaLink: "/projects",
  secondaryCtaText: "CONTACT US",
  secondaryCtaLink: "/contact",
  backgroundImageUrl: "/images/hero/hero-bg.webp",
};

export const fallbackAbout: AboutData = {
  sectionLabel: "WHO WE ARE",
  heading: "Engineering Expertise. Trusted Execution.",
  overview: "Paanayil Heavy Engineering Projects Private Limited (PHEPPL) is an established engineering and construction company established in 2018 in Coimbatore, India. Operating as a proud sister concern of Riyadh Villas Contracting Est., Riyadh, Saudi Arabia, PHEPPL delivers advanced heavy structural steel fabrication, turnkey industrial plant construction, and high-precision infrastructure solutions.\n\nWith accredited ISO 9001:2015, ISO 14001:2015 and ISO 45001:2015 certifications and registration with the MSME Development Board of India, our engineering practices combine uncompromising metallurgical quality, stringent international safety standards, and decades of collective technical mastery.",
  vision: "To be recognized as a world-class heavy engineering and construction enterprise renowned for exceptional structural reliability, technological innovation, and sustainable engineering stewardship across global projects.",
  mission: "To deliver complex turnkey industrial infrastructure safely, on time, and to exacting international specifications through modern fabrication technologies, rigorous QA/QC compliance, and dedicated engineering leadership.",
  establishedYear: 2018,
  imageUrl: "/images/about/paanayil-heavy.webp",
  values: [
    {
      title: "Engineering Precision",
      description: "Sub-millimeter fabrication tolerances and structural adherence to international codes (AISC, ASME, AWS, and IS).",
    },
    {
      title: "HSE Zero-Incident Culture",
      description: "Unconditional commitment to occupational health, environmental stewardship, and proactive hazard prevention.",
    },
    {
      title: "Turnkey Accountability",
      description: "End-to-end execution certainty spanning structural design, shop fabrication, surface coating, logistics, and site erection.",
    },
    {
      title: "Client Trust & Integrity",
      description: "Transparent milestones, open communication, and long-term partnerships with leading public and private energy corporations.",
    },
  ],
};

export const fallbackServices: ServiceData[] = [
  {
    _id: "srv-1",
    title: "Heavy Structural Steel Fabrication & Erection",
    slug: "heavy-structural-steel-fabrication",
    category: "Structural Steel & Fabrication",
    shortDescription: "Specialized fabrication of heavy steel framing, industrial pipe racks, high-span trusses, and commercial high-rise structural skeletons.",
    fullDescription: "PHEPPL provides turnkey structural steel engineering from raw plate profiling to automated submerged arc welding, blast cleaning, protective coating, and heavy site crane erection. Our Coimbatore fabrication yard is equipped with heavy overhead gantry cranes, high-capacity bevel cutting machines, and hydraulic plate benders to handle single structural assemblies up to 60 metric tons with sub-millimeter precision.",
    imageUrl: "/images/services/service_steel_works_metal_1778184492685.webp",
    capabilities: [
      "Heavy industrial portal frames and high-clearance mill buildings",
      "Process plant pipe racks, cable tray galleries, and equipment skids",
      "Long-span stadium and hangar trusses with box and tubular sections",
      "Full ultrasonic, magnetic particle (MPI), and radiographic weld testing",
      "Certified automated painting, galvanizing, and fireproofing systems",
    ],
    methodology: [
      { step: "01", title: "Engineering & 3D Tekla Modeling", description: "Generation of NC files, fabrication spool sheets, and clash-detection models." },
      { step: "02", title: "Automated Cutting & Fit-Up", description: "CNC multi-torch plate cutting, beveling, and certified welder assembly fit-up." },
      { step: "03", title: "SAW Welding & NDT Inspection", description: "Submerged arc welding executed by AWS/ASME certified master welders." },
      { step: "04", title: "Surface Prep & Site Erection", description: "SA 2.5 grit blasting, multi-coat epoxy systems, and safe tandem crane lifting." },
    ],
    order: 1,
  },
  {
    _id: "srv-2",
    title: "Industrial Plant Construction & Process Piping",
    slug: "industrial-plant-construction-piping",
    category: "Industrial Plant & Piping",
    shortDescription: "Complete EPC plant construction, utility piping spools, tankage, and high-pressure process line installations.",
    fullDescription: "From chemical processing facilities and power generation plants to heavy manufacturing complexes, PHEPPL executes integrated mechanical plant construction. We specialize in alloy steel, stainless steel, and carbon steel process piping spools fabricated in clean-room yard conditions and erected with 100% radiographic weld integrity.",
    imageUrl: "/images/services/civil.webp",
    capabilities: [
      "High-pressure steam, condensate, and hydrocarbon process piping",
      "API 650 & API 620 storage tanks and pressure vessel integration",
      "Rotary equipment positioning, precision optical alignment, and grouting",
      "Plant civil foundations, heavy equipment basemats, and trenches",
      "Hydrotesting, chemical flushing, and pre-commissioning assistance",
    ],
    methodology: [
      { step: "01", title: "Isometrics & Spool Mapping", description: "Field verification, material grade traceability, and isometric spool generation." },
      { step: "02", title: "Clean Fabrication & TIG/MIG Welding", description: "Purged TIG welding for root passes followed by automated filler runs." },
      { step: "03", title: "Pressure Testing", description: "Hydrostatic testing up to 1.5x design pressure witnessed by third-party inspectors." },
      { step: "04", title: "Erection & Golden Joint Verification", description: "Rigging into live plant battery limits with hot work permits and strict safety." },
    ],
    order: 2,
  },
  {
    _id: "srv-3",
    title: "Infrastructure & Heavy Civil Engineering",
    slug: "infrastructure-heavy-civil-engineering",
    category: "Civil & Infrastructure",
    shortDescription: "Reinforced concrete foundations, industrial substations, arterial bridges, flyovers, and mass earthwork development.",
    fullDescription: "PHEPPL delivers robust civil engineering infrastructure tailored for harsh operational environments. Working in tandem with Riyadh Villas Contracting Est. (RVCC), our team commands extensive experience in heavy subterranean foundations, structural concrete works, power transmission corridor civil foundations, and arterial urban transit structures.",
    imageUrl: "/images/services/infrastructure.webp",
    capabilities: [
      "Heavy industrial machine foundations with dynamic vibration damping",
      "Electrical substation civil works, switchyard towers, and transformer bays",
      "Precast and cast-in-situ concrete bridge girders and retaining systems",
      "Mass soil stabilization, precision grading, and deep trenching",
      "Stormwater drainage networks, culverts, and industrial containment sumps",
    ],
    methodology: [
      { step: "01", title: "Geotechnical & Topographic Survey", description: "High-precision total station mapping and soil bearing capacity validation." },
      { step: "02", title: "Excavation & Shoring", description: "Automated earthmoving fleet and certified trench protection systems." },
      { step: "03", title: "Reinforcement & High-Strength Pour", description: "Epoxy-coated rebar cages with self-compacting high-grade concrete mixes." },
      { step: "04", title: "Curing & QA/QC Load Verification", description: "Monitored temperature-controlled hydration and cube compressive tests." },
    ],
    order: 3,
  },
  {
    _id: "srv-4",
    title: "Turnkey EPC Project Execution",
    slug: "turnkey-epc-project-execution",
    category: "Turnkey EPC Solutions",
    shortDescription: "Single-source accountability covering Engineering, Procurement, and Construction from concept to handover.",
    fullDescription: "PHEPPL's Turnkey EPC (Engineering, Procurement, Construction) division assumes total project responsibility. Clients benefit from a unified contract interface, guaranteed delivery schedules, optimized procurement economies of scale, and seamless coordination between civil, structural, mechanical, and electrical disciplines.",
    imageUrl: "/images/services/service_building_projects_1778184550187.webp",
    capabilities: [
      "Front-End Engineering Design (FEED) review and value engineering",
      "Global procurement of certified raw materials, machinery, and fittings",
      "Dedicated Primavera P6 critical-path scheduling and cost tracking",
      "Integrated HSE management across multi-discipline sub-contractors",
      "Permit facilitation, authority approvals, and statutory clearance",
    ],
    methodology: [
      { step: "01", title: "Concept & Milestone Formulation", description: "Scope alignment, work breakdown structure, and regulatory pathway setup." },
      { step: "02", title: "Procurement & Quality Audits", description: "Mill certificate verification, vendor expediting, and factory acceptance tests." },
      { step: "03", title: "Concurrent Construction", description: "Parallel off-site fabrication and on-site civil works for fast-track delivery." },
      { step: "04", title: "Commissioning & Handover", description: "Punch list closure, as-built documentation, and operator training." },
    ],
    order: 4,
  },
  {
    _id: "srv-5",
    title: "Equipment Erection & Heavy Machinery Positioning",
    slug: "equipment-erection-heavy-machinery",
    category: "Equipment Erection & Commissioning",
    shortDescription: "Tandem crane lifting, heavy transformer positioning, reactor vessel rigging, and precision shaft alignment.",
    fullDescription: "Handling mega-scale industrial equipment requires specialized rigging engineering. PHEPPL provides heavy lifting studies, 3D lift simulations, engineered jacking systems, and hydraulic skidding equipment to safely position oversized autoclaves, turbines, boilers, and transformers within tight industrial facilities.",
    imageUrl: "/images/services/service_hero_architecture_1778183618044.webp",
    capabilities: [
      "Engineered heavy lift plans with ground pressure calculations",
      "Transformer positioning, core insertion, and oil handling support",
      "Rotary kiln, ball mill, and cement plant machinery installation",
      "Precision laser shaft alignment and baseplate non-shrink grouting",
      "Load testing of overhead cranes, monorails, and davits",
    ],
    order: 5,
  },
  {
    _id: "srv-6",
    title: "Industrial Plant Maintenance & Turnaround Shutdowns",
    slug: "industrial-plant-maintenance-shutdowns",
    category: "Industrial Maintenance & Shutdowns",
    shortDescription: "Rapid-response planned shutdown maintenance, structural retrofitting, corrosion rehabilitation, and emergency repairs.",
    fullDescription: "Plant downtime costs thousands of dollars per hour. PHEPPL deploys specialized round-the-clock shutdown crews to inspect, repair, re-tube, and structurally reinforce process facilities during planned turnarounds. Our rapid mobilization ensures that critical industrial assets are safely restored to peak operational readiness ahead of schedule.",
    imageUrl: "/images/services/service_land_development_1778184589851.webp",
    capabilities: [
      "Round-the-clock 24/7 shutdown execution with shift-based supervisors",
      "Structural column reinforcement, bracing replacement, and jacket repair",
      "High-pressure piping spool replacements and valve overhaul support",
      "Corrosion mapping, blast refurbishment, and specialized coating",
      "Thermal insulation re-cladding and refractory maintenance",
    ],
    order: 6,
  },
];

export const fallbackProjects: ProjectData[] = [
  {
    _id: "prj-1",
    title: "Mega Substation Structural Steel & Switchyard Infrastructure",
    slug: "mega-substation-structural-steel-switchyard",
    client: "Saudi Electricity Company (SECO)",
    location: "Eastern Province, Saudi Arabia",
    category: "Heavy Structural Fabrication",
    year: "2023 - 2024",
    status: "Completed",
    description: "Engineering fabrication and precision erection of 4,200 metric tons of galvanized steel gantries, equipment support structures, and GIS building frameworks for a 380kV high-voltage transmission substation.",
    imageUrl: "/images/projects/1.webp",
    galleryUrls: [
      "/images/projects/1.webp",
      "/images/projects/2.webp",
      "/images/projects/3.webp",
      "/images/projects/4.webp",
    ],
    scope: [
      "Detailed 3D Tekla modeling of 4,200 MT structural steel",
      "CNC multi-hole punching and high-temperature hot-dip galvanizing",
      "Switchyard gantry towers, lightning masts, and capacitor bank frames",
      "Heavy foundation anchor bolt cage manufacturing and cast-in placement",
      "Erection in energized substation proximity with zero safety incidents",
    ],
    technicalDetails: [
      { label: "Total Steel Weight", value: "4,200 Metric Tons" },
      { label: "Galvanizing Standard", value: "ASTM A123 / ISO 1461" },
      { label: "Voltage Rating", value: "380 kV Bulk Transmission" },
      { label: "Welding Specification", value: "AWS D1.1 Structural Welding" },
      { label: "Lost Time Injuries (LTI)", value: "Zero (540,000 Safe Manhours)" },
    ],
    isFeatured: true,
  },
  {
    _id: "prj-2",
    title: "Refinery Interconnecting Pipe Rack & Flare Structure",
    slug: "refinery-interconnecting-pipe-rack-flare",
    client: "Saudi Aramco Operations",
    location: "Ras Tanura, Saudi Arabia",
    category: "Industrial Plant & Piping",
    year: "2022 - 2023",
    status: "Completed",
    description: "Heavy structural steel modular fabrication, fireproofing, and high-elevation erection of multi-tier hydrocarbon pipe racks and guyed flare support towers within active operational petrochemical battery limits.",
    imageUrl: "/images/projects/9.webp",
    galleryUrls: [
      "/images/projects/9.webp",
      "/images/projects/8.webp",
      "/images/projects/7.webp",
      "/images/projects/10.webp",
    ],
    scope: [
      "Shop modularization of 36-meter pipe rack spools for rapid field hookup",
      "Application of UL 1709 certified hydrocarbon intumescent fireproofing",
      "Heavy crane dual-pick lifting over live utilities with SIMOPS protocol",
      "100% Non-Destructive Testing (NDT) via Phased Array Ultrasonic Testing",
    ],
    technicalDetails: [
      { label: "Structural Weight", value: "2,850 Metric Tons" },
      { label: "Fireproofing Rating", value: "3 Hours Hydrocarbon (UL 1709)" },
      { label: "Flare Tower Height", value: "85 Meters" },
      { label: "Piping Integration", value: "API 5L X52 High Pressure" },
    ],
    isFeatured: true,
  },
  {
    _id: "prj-3",
    title: "Regional Grid Interconnection Facility Civil & Steel Works",
    slug: "regional-grid-interconnection-facility",
    client: "GCC Interconnection Authority (GCCIA)",
    location: "Al-Fadhili, Saudi Arabia",
    category: "Infrastructure & Civil",
    year: "2023",
    status: "Completed",
    description: "Execution of heavy reinforced civil foundations, perimeter blast wall barriers, and architectural steel enclosures for cross-border power transmission synchronization equipment.",
    imageUrl: "/images/projects/7.webp",
    galleryUrls: [
      "/images/projects/7.webp",
      "/images/projects/6.webp",
      "/images/projects/5.webp",
    ],
    scope: [
      "Deep bored pile foundations and massive monolithic transformer basemats",
      "Reinforced security perimeter perimeter fencing and blast-resistant portals",
      "Control building structural steel roofing trusses and insulated cladding",
      "Precision installation of cable basements, trenches, and drainage sumps",
    ],
    technicalDetails: [
      { label: "Concrete Poured", value: "14,500 Cubic Meters" },
      { label: "Rebar Density", value: "Grade 60 Epoxy Coated (1,600 MT)" },
      { label: "Soil Bearing Capacity", value: "350 kPa Compaction" },
      { label: "Completion Time", value: "Delivered 14 Days Ahead of Schedule" },
    ],
    isFeatured: true,
  },
  {
    _id: "prj-4",
    title: "Metro Transit Corridor Heavy Structural Sky-Bridge & Canopies",
    slug: "metro-transit-corridor-sky-bridge",
    client: "Arriyadh Development Authority (ADA / RCRC)",
    location: "Riyadh, Saudi Arabia",
    category: "Commercial & High-Rise Steel",
    year: "2022 - 2024",
    status: "Completed",
    description: "Fabrication and overnight tandem-lift positioning of curved tubular architectural pedestrian sky-bridges and high-tensile canopy steel structures spanning major urban transit corridors.",
    imageUrl: "/images/projects/13.webp",
    galleryUrls: [
      "/images/projects/13.webp",
      "/images/projects/14.webp",
      "/images/projects/12.webp",
      "/images/projects/15.webp",
    ],
    scope: [
      "Architectural Grade AESS-4 exposed structural steel fabrication",
      "Compound roll-bending of heavy 600mm CHS tubular chords",
      "Nighttime road closure rigging and tandem 300T crane lift operations",
      "High-performance marine-grade fluoropolymer fluorocarbon finish",
    ],
    technicalDetails: [
      { label: "Clear Bridge Span", value: "54.8 Meters" },
      { label: "Tubular Diameter", value: "CHS 610mm x 25mm wall" },
      { label: "AESS Standard", value: "CISC / AISC Category 4 Architectural" },
      { label: "Deflection Tolerance", value: "L / 800 Under Peak Live Load" },
    ],
    isFeatured: true,
  },
  {
    _id: "prj-5",
    title: "Central Logistics & Cold Storage Distribution Hub",
    slug: "central-logistics-cold-storage-hub",
    client: "LuLu Group International",
    location: "Coimbatore - Kochi Logistics Corridor, India",
    category: "Turnkey EPC Engineering",
    year: "2023 - 2024",
    status: "Completed",
    description: "Turnkey EPC construction of a 220,000 sq.ft modern pre-engineered industrial warehouse featuring continuous 32-meter clear spans, heavy FM2 concrete flooring, and insulated thermal envelope systems.",
    imageUrl: "/images/projects/2.webp",
    galleryUrls: [
      "/images/projects/2.webp",
      "/images/projects/3.webp",
      "/images/projects/11.webp",
    ],
    scope: [
      "Turnkey civil, PEB structural steel, and roofing system execution",
      "Laser screed FM2 heavy-duty industrial flooring with dry-shake hardener",
      "Continuous mezzanine structural framing and heavy goods lift shafts",
      "Fire hydrant ring main, deluge systems, and automated smoke vents",
    ],
    technicalDetails: [
      { label: "Built-up Area", value: "220,000 Square Feet" },
      { label: "Floor Load Capacity", value: "80 kN / m² Uniformly Distributed" },
      { label: "Eaves Clear Height", value: "14.5 Meters" },
      { label: "Dock Levelers", value: "24 Automated Hydraulic Bays" },
    ],
    isFeatured: true,
  },
  {
    _id: "prj-6",
    title: "Heavy Machine Shop & Casting Foundry Extension",
    slug: "heavy-machine-shop-casting-foundry-extension",
    client: "Industrial Engineering Client",
    location: "Sulur Industrial Estate, Coimbatore, India",
    category: "Heavy Structural Fabrication",
    year: "2024",
    status: "Completed",
    description: "Fabrication, machining, and erection of high-capacity double-girder EOT crane runways, heavy gantry columns, and vibration-isolated pit foundations for automated casting equipment.",
    imageUrl: "/images/projects/5.webp",
    galleryUrls: [
      "/images/projects/5.webp",
      "/images/projects/16.webp",
    ],
    scope: [
      "Heavy built-up box girders designed for 80-ton crane wheel loads",
      "Optical alignment of 160-meter continuous crane rails to ±1mm tolerance",
      "Deep casting pit excavation with chemical water-tightening membranes",
      "Ventilation monitor roof louvers and acoustically insulated cladding",
    ],
    technicalDetails: [
      { label: "Crane Capacity", value: "80 MT Class-IV Heavy Duty" },
      { label: "Steel Grade", value: "IS 2062 E350BR Structural Plates" },
      { label: "Rail Alignment", value: "ISO 12488-1 Class 1 Precision" },
    ],
    isFeatured: false,
  },
];

export const fallbackClients: ClientData[] = [
  {
    _id: "cl-1",
    name: "Saudi Aramco",
    industry: "Energy & Petrochemicals",
    logoUrl: "/images/clients/5.webp",
    website: "https://www.aramco.com",
  },
  {
    _id: "cl-2",
    name: "Saudi Electricity Company (SECO)",
    industry: "Power Generation & Grid Transmission",
    logoUrl: "/images/clients/12.webp",
    website: "https://www.se.com.sa",
  },
  {
    _id: "cl-3",
    name: "GCC Interconnection Authority (GCCIA)",
    industry: "Regional Power Infrastructure",
    logoUrl: "/images/clients/1.webp",
    website: "https://www.gccia.com.sa",
  },
  {
    _id: "cl-4",
    name: "Royal Commission / ADA",
    industry: "Urban & Capital Development",
    logoUrl: "/images/clients/14.webp",
    website: "https://www.rcrc.gov.sa",
  },
  {
    _id: "cl-5",
    name: "LuLu Group International",
    industry: "Retail Logistics & FMCG Infrastructure",
    logoUrl: "/images/clients/15.webp",
    website: "https://www.lulugroupinternational.com",
  },
  {
    _id: "cl-6",
    name: "Halliburton",
    industry: "Energy & Infrastructure",
    logoUrl: "/images/clients/2.webp",
    website: "https://www.halliburton.com",
  },
];

export const fallbackCertifications: CertificationData[] = [
  {
    _id: "cert-1",
    name: "ISO 9001:2015",
    scope: "Quality Management System for Heavy Engineering, Steel Fabrication & EPC Execution",
    issuingBody: "TÜV NORD / JAS-ANZ",
    code: "QMS-CERT-9001",
    badgeUrl: "/images/certificates/tuv.webp",
  },
  {
    _id: "cert-2",
    name: "ISO 14001:2015",
    scope: "Environmental Management System for Manufacturing Yards & Site Construction",
    issuingBody: "JAS-ANZ Certified",
    code: "EMS-CERT-14001",
    badgeUrl: "/images/certificates/jas-anz-14001.webp",
  },
  {
    _id: "cert-3",
    name: "ISO 45001:2015",
    scope: "Occupational Health & Safety Management System with Zero-Harm Protocols",
    issuingBody: "JAS-ANZ / OHSAS Compliant",
    code: "OHSMS-CERT-45001",
    badgeUrl: "/images/certificates/jas-anz-18001.webp",
  },
  {
    _id: "cert-4",
    name: "IAF Accreditation",
    scope: "International Accreditation Forum Multilateral Recognition Arrangement",
    issuingBody: "IAF Global Member",
    code: "IAF-MLA-MEMBER",
    badgeUrl: "/images/certificates/iaf.webp",
  },
  {
    _id: "cert-5",
    name: "MSME Development Board",
    scope: "Registered with Ministry of Micro, Small and Medium Enterprises, Govt. of India",
    issuingBody: "Government of India",
    code: "UDYAM-TN-03-MSME",
    badgeUrl: "/images/about/paanayil-heavy.webp",
  },
];

export const fallbackManagement: ManagementData[] = [
  {
    _id: "mgmt-1",
    name: "Dr. Sooraj N K",
    designation: "Founder & Chairman / Chief Executive Officer",
    credentials: "Ph.D., International Business & Heavy Infrastructure Leadership",
    bio: "Dr. Sooraj N K has steered the founding and strategic expansion of Paanayil Heavy Engineering Projects Private Limited (PHEPPL) and Riyadh Villas Contracting Est. (RVCC). With over two decades of distinguished leadership spanning India and the Arabian Gulf, he has directed prestigious industrial, civil infrastructure, and energy contracts for world-class clients including Saudi Aramco, SECO, and Royal Commissions. His guiding ethos focuses on uncompromising engineering integrity, worker safety, and client transparency.",
    photoUrl: "/images/team/ceo.webp",
  },
  {
    _id: "mgmt-2",
    name: "Sreejith NK",
    designation: "Managing Director – PHEF",
    credentials: "Industrial Operations & Strategic Corporate Leadership",
    bio: "Sreejith NK steers corporate operations, business strategy, and executive administration for Paanayil Heavy Engineering Facilities (PHEF) and PHEPPL. Working in close synergy with the executive leadership across India and Saudi Arabia, he directs strategic resource allocation, yard modernization, joint-venture partnerships, and critical-path EPC execution milestones.",
    photoUrl: "/images/team/sreejith-nk.webp",
  },
  {
    _id: "mgmt-3",
    name: "Ragesh NK",
    designation: "Deputy Managing Director - PHEF",
    credentials: "Business Administration & Management",
    bio: "Excellency in business administration and management, our Deputy Managing Director is guiding the core team together and identifying the business theme for the modernization of the company to meet the needs of global trends and upcoming future demands, bringing our business to a leadership position in the market.",
    photoUrl: "/images/team/ragesh-nk.webp",
  },
];

export const fallbackInfrastructure: InfrastructureData[] = [
  {
    _id: "infra-1",
    title: "Sulur Heavy Fabrication Works Yard",
    category: "Fabrication Yard",
    location: "Sulur Industrial Corridor, Coimbatore, Tamil Nadu",
    capacity: "18,000 MT Annual Fabrication Capacity",
    description: "Covering over 120,000 sq.ft of covered heavy fabrication bays with 12-meter hook heights, equipped with heavy electric overhead traveling (EOT) gantry cranes and dedicated multi-torch CNC profile cutting machines.",
    imageUrl: "/images/services/service_steel_works_metal_1778184492685.webp",
    specs: [
      "Twin 50-Ton and four 20-Ton EOT Gantry Cranes",
      "CNC 4-torch oxy-fuel and high-definition plasma cutting beds (up to 100mm plate)",
      "Hydraulic 3-roll plate bending rolls (up to 45mm plate thickness)",
      "Automated H-beam and box-column assembly & submerged arc welding lines",
    ],
  },
  {
    _id: "infra-2",
    title: "Automated Surface Treatment & Coating Facility",
    category: "Surface Treatment & Blasting",
    location: "Sulur Works Yard, Coimbatore",
    capacity: "2,500 m² Daily Surface Treatment Throughput",
    description: "Enclosed environmental-controlled grit blasting chambers and temperature-monitored paint booths capable of delivering SA 2.5 and SA 3.0 surface cleanliness alongside multi-coat epoxy, polyurethane, and intumescent fireproofing finishes.",
    imageUrl: "/images/services/civil.webp",
    specs: [
      "Automated steel shot & copper slag blasting recovery systems",
      "Dehumidified enclosed climate-controlled painting halls",
      "Elcometer digital DFT dry film thickness and adhesion pull-off testing",
      "Specialized hydrocarbon intumescent fireproofing application equipment",
    ],
  },
  {
    _id: "infra-3",
    title: "Mobile Crane Fleet & Engineered Heavy Rigging",
    category: "Cranes & Heavy Lifting",
    location: "India & Saudi Arabia Equipment Depots",
    capacity: "Tandem Lifting Capacity up to 350 Metric Tons",
    description: "PHEPPL maintains a modern fleet of all-terrain hydraulic mobile cranes, crawler cranes, and heavy multi-axle modular trailers (SPMT) to mobilize and erect massive prefabricated modules safely.",
    imageUrl: "/images/services/service_hero_architecture_1778183618044.webp",
    specs: [
      "160-Ton and 250-Ton all-terrain mobile hydraulic telescopic cranes",
      "80-Ton and 100-Ton crawler cranes for continuous yard and site duty",
      "Heavy hydraulic jacking towers and strand jack systems",
      "Certified rigging tackle, spreader beams, and load-monitoring shackles",
    ],
  },
  {
    _id: "infra-4",
    title: "Metallurgical Testing & NDT Quality Lab",
    category: "QA/QC & NDT Laboratory",
    location: "Central Works Lab, Coimbatore",
    capacity: "Full In-House Destructive & Non-Destructive Testing",
    description: "Our in-house quality assurance laboratory verifies raw material chemistry, mechanical tensile and Charpy V-notch impact strength, alongside 100% non-destructive examination of structural welds.",
    imageUrl: "/images/services/infrastructure.webp",
    specs: [
      "Digital Phased Array Ultrasonic Testing (PAUT) & TOFD systems",
      "Electromagnetic yoke Magnetic Particle Inspection (MPI)",
      "Universal Testing Machine (UTM) for tensile and bend tests up to 1000 kN",
      "Positive Material Identification (PMI) optical emission spectrometer",
    ],
  },
];

export const fallbackCareers: CareerData[] = [
  {
    _id: "car-1",
    title: "Welder",
    department: "Fabrication & Welding",
    location: "Coimbatore",
    type: "Full Time",
    experience: "Fresher & Experienced",
    description: "Fresher and experienced candidates.",
    responsibilities: [],
    requirements: [],
    deadline: "Open until filled",
  },
  {
    _id: "car-2",
    title: "Fitter",
    department: "Fabrication & Fitting",
    location: "Coimbatore",
    type: "Full Time",
    experience: "Fresher & Experienced",
    description: "Fresher and experienced candidates.",
    responsibilities: [],
    requirements: [],
    deadline: "Open until filled",
  },
  {
    _id: "car-3",
    title: "Helper",
    department: "Site & Yard Support",
    location: "Coimbatore",
    type: "Full Time",
    experience: "Fresher & Experienced",
    description: "Fresher and experienced candidates.",
    responsibilities: [],
    requirements: [],
    deadline: "Open until filled",
  },
];

