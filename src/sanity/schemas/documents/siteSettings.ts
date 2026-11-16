import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "companyName",
      title: "Company Name",
      type: "string",
      validation: (Rule) => Rule.required(),
      initialValue: "Paanayil Heavy Engineering Projects Private Limited (PHEPPL)",
    }),
    defineField({
      name: "tagline",
      title: "Corporate Tagline",
      type: "string",
      initialValue: "Engineering Excellence. Building The Future.",
    }),
    defineField({
      name: "logo",
      title: "Main Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
      initialValue: "info@pheppl.com",
    }),
    defineField({
      name: "contactPhoneIndia",
      title: "Phone (India HQ)",
      type: "string",
      initialValue: "+91 422 298 0000",
    }),
    defineField({
      name: "contactPhoneSaudi",
      title: "Phone (Saudi Arabia)",
      type: "string",
      initialValue: "+966 11 234 5678",
    }),
    defineField({
      name: "whatsappNumber",
      title: "Official WhatsApp Number",
      type: "string",
      description: "Include country code e.g. +919876543210",
    }),
    defineField({
      name: "addressIndia",
      title: "India Corporate Office & Works",
      type: "text",
      rows: 3,
      initialValue: "SF No. 342/1, Heavy Industrial Zone, Sulur, Coimbatore - 641402, Tamil Nadu, India",
    }),
    defineField({
      name: "addressSaudi",
      title: "Saudi Arabia Office (Sister Concern)",
      type: "text",
      rows: 3,
      initialValue: "Riyadh Villas Contracting Est., King Fahd Road, Al Olaya, Riyadh, Kingdom of Saudi Arabia",
    }),
    defineField({
      name: "socialLinks",
      title: "Social Media Links",
      type: "object",
      fields: [
        { name: "linkedin", title: "LinkedIn URL", type: "url" },
        { name: "twitter", title: "X (Twitter) URL", type: "url" },
        { name: "instagram", title: "Instagram URL", type: "url" },
      ],
    }),
    defineField({
      name: "metaDescription",
      title: "Default Meta Description",
      type: "text",
      rows: 2,
      initialValue: "Paanayil Heavy Engineering Projects Private Limited (PHEPPL) is a premier engineering, heavy structural steel fabrication, EPC, and infrastructure construction company.",
    }),
  ],
});

