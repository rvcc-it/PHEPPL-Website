import { defineType, defineField } from "sanity";

export const about = defineType({
  name: "about",
  title: "About Us Content",
  type: "document",
  fields: [
    defineField({
      name: "sectionLabel",
      title: "Section Label",
      type: "string",
      initialValue: "WHO WE ARE",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "Engineering Expertise. Trusted Execution.",
    }),
    defineField({
      name: "overview",
      title: "Company Overview",
      type: "text",
      rows: 5,
      initialValue: "Paanayil Heavy Engineering Projects Private Limited (PHEPPL) is a premier engineering and construction company established in 2018 in Coimbatore, India. Operating as a sister concern of Riyadh Villas Contracting Est., Riyadh, Saudi Arabia, PHEPPL brings international standards of industrial fabrication, EPC management, and civil engineering infrastructure to demanding clients across the subcontinent and the Middle East.",
    }),
    defineField({
      name: "vision",
      title: "Vision Statement",
      type: "text",
      rows: 3,
      initialValue: "To be recognized as a benchmark heavy engineering and construction partner known for structural integrity, technical ingenuity, and safety excellence across international frontiers.",
    }),
    defineField({
      name: "mission",
      title: "Mission Statement",
      type: "text",
      rows: 3,
      initialValue: "Delivering world-class turnkey engineering projects by combining robust manufacturing capabilities, strict ISO quality systems, seasoned engineering talent, and a zero-incident safety culture.",
    }),
    defineField({
      name: "values",
      title: "Core Values",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Value Title", type: "string" },
            { name: "description", title: "Description", type: "text", rows: 2 },
          ],
        },
      ],
    }),
    defineField({
      name: "image",
      title: "Main Facility Photograph",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});

