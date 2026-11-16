import { defineType, defineField } from "sanity";

export const infrastructure = defineType({
  name: "infrastructure",
  title: "Infrastructure & Fleet",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Facility / Resource Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Fabrication Yard", value: "Fabrication Yard" },
          { title: "Plant & Machinery", value: "Plant & Machinery" },
          { title: "Cranes & Heavy Lifting", value: "Cranes & Heavy Lifting" },
          { title: "QA/QC & NDT Laboratory", value: "QA/QC & NDT Laboratory" },
          { title: "Surface Treatment & Blasting", value: "Surface Treatment & Blasting" },
        ],
      },
    }),
    defineField({
      name: "location",
      title: "Location / Deployment",
      type: "string",
      initialValue: "Sulur Yard, Coimbatore / Regional Sites",
    }),
    defineField({
      name: "capacity",
      title: "Operating Capacity / Rating",
      type: "string",
      description: "e.g. 15,000 MT/Year, 120-Ton Lifting Capacity",
    }),
    defineField({
      name: "description",
      title: "Detailed Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "image",
      title: "Facility / Equipment Photograph",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "specs",
      title: "Equipment Specifications / Features",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
    }),
  ],
});

