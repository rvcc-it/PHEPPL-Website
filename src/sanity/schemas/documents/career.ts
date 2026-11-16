import { defineType, defineField } from "sanity";

export const career = defineType({
  name: "career",
  title: "Career Opportunities",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Position Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "department",
      title: "Department",
      type: "string",
      options: {
        list: [
          { title: "Structural Engineering", value: "Structural Engineering" },
          { title: "Project Management & EPC", value: "Project Management & EPC" },
          { title: "QA/QC & Welding Inspection", value: "QA/QC & Welding Inspection" },
          { title: "Health, Safety & Environment (HSE)", value: "Health, Safety & Environment (HSE)" },
          { title: "Erection & Site Construction", value: "Erection & Site Construction" },
          { title: "Estimation & Tendering", value: "Estimation & Tendering" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Job Location",
      type: "string",
      initialValue: "Coimbatore Yard / Project Site",
    }),
    defineField({
      name: "type",
      title: "Employment Type",
      type: "string",
      initialValue: "Full Time / Permanent",
    }),
    defineField({
      name: "experience",
      title: "Experience Required",
      type: "string",
      initialValue: "5 - 8 Years",
    }),
    defineField({
      name: "description",
      title: "Role Overview",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "responsibilities",
      title: "Key Responsibilities",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "requirements",
      title: "Qualifications & Skills",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "deadline",
      title: "Application Deadline",
      type: "date",
    }),
    defineField({
      name: "isPublished",
      title: "Published",
      type: "boolean",
      initialValue: true,
    }),
  ],
});

