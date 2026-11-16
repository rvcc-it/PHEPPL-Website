import { defineType, defineField } from "sanity";

export const client = defineType({
  name: "client",
  title: "Clients & Partners",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Client Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "industry",
      title: "Industry Sector",
      type: "string",
      options: {
        list: [
          { title: "Oil & Gas / Energy", value: "Oil & Gas / Energy" },
          { title: "Power & Utilities", value: "Power & Utilities" },
          { title: "Government & Infrastructure", value: "Government & Infrastructure" },
          { title: "Heavy Industry", value: "Heavy Industry" },
          { title: "Commercial Conglomerate", value: "Commercial Conglomerate" },
        ],
      },
    }),
    defineField({
      name: "logo",
      title: "Official Client Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "website",
      title: "Client Website",
      type: "url",
    }),
    defineField({
      name: "testimonial",
      title: "Approved Testimonial / Citation",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "isPublished",
      title: "Published Status",
      type: "boolean",
      initialValue: true,
    }),
  ],
});

