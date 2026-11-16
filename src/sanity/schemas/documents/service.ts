import { defineType, defineField } from "sanity";

export const service = defineType({
  name: "service",
  title: "Services",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Service Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Service Category",
      type: "string",
      options: {
        list: [
          { title: "Structural Steel & Fabrication", value: "Structural Steel & Fabrication" },
          { title: "Industrial Plant & Piping", value: "Industrial Plant & Piping" },
          { title: "Turnkey EPC Solutions", value: "Turnkey EPC Solutions" },
          { title: "Civil & Infrastructure", value: "Civil & Infrastructure" },
          { title: "Equipment Erection & Commissioning", value: "Equipment Erection & Commissioning" },
          { title: "Industrial Maintenance & Shutdowns", value: "Industrial Maintenance & Shutdowns" },
        ],
      },
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "fullDescription",
      title: "Full Detailed Description",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "mainImage",
      title: "Main Photograph",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "capabilities",
      title: "Key Capabilities & Deliverables",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "methodology",
      title: "Engineering Methodology",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "step", title: "Step Number", type: "string" },
            { name: "title", title: "Phase Title", type: "string" },
            { name: "description", title: "Phase Description", type: "text", rows: 2 },
          ],
        },
      ],
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

