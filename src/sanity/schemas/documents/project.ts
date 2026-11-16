import { defineType, defineField } from "sanity";

export const project = defineType({
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
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
      name: "client",
      title: "Client",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Project Category",
      type: "string",
      options: {
        list: [
          { title: "Heavy Structural Fabrication", value: "Heavy Structural Fabrication" },
          { title: "Industrial Plant & Piping", value: "Industrial Plant & Piping" },
          { title: "Infrastructure & Civil", value: "Infrastructure & Civil" },
          { title: "Turnkey EPC Engineering", value: "Turnkey EPC Engineering" },
          { title: "Commercial & High-Rise Steel", value: "Commercial & High-Rise Steel" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "year",
      title: "Completion Year / Timeline",
      type: "string",
      initialValue: "2023 - 2024",
    }),
    defineField({
      name: "status",
      title: "Execution Status",
      type: "string",
      options: {
        list: [
          { title: "Completed", value: "Completed" },
          { title: "In Progress", value: "In Progress" },
          { title: "Ongoing Contract", value: "Ongoing Contract" },
        ],
      },
      initialValue: "Completed",
    }),
    defineField({
      name: "description",
      title: "Project Overview",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Hero Project Photograph",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "gallery",
      title: "Project Image Gallery",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "scope",
      title: "Scope of Work & Deliverables",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "technicalDetails",
      title: "Technical Specifications",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Specification Parameter", type: "string" },
            { name: "value", title: "Value / Metric", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "isFeatured",
      title: "Featured on Homepage",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "isPublished",
      title: "Published",
      type: "boolean",
      initialValue: true,
    }),
  ],
});

