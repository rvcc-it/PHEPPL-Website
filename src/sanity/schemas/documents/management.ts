import { defineType, defineField } from "sanity";

export const management = defineType({
  name: "management",
  title: "Board of Management",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "designation",
      title: "Designation / Role",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "credentials",
      title: "Academic / Professional Credentials",
      type: "string",
      description: "e.g. Ph.D., M.Tech (Structures), FIE",
    }),
    defineField({
      name: "bio",
      title: "Professional Biography",
      type: "text",
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "photo",
      title: "Executive Photograph",
      type: "image",
      options: { hotspot: true },
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

