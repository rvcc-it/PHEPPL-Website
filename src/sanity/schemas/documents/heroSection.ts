import { defineType, defineField } from "sanity";

export const heroSection = defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow / Subtitle Badge",
      type: "string",
      initialValue: "PAANAYIL HEAVY ENGINEERING PROJECTS PRIVATE LIMITED",
    }),
    defineField({
      name: "headline",
      title: "Main Headline",
      type: "string",
      validation: (Rule) => Rule.required(),
      initialValue: "ENGINEERING EXCELLENCE. BUILDING THE FUTURE.",
    }),
    defineField({
      name: "description",
      title: "Supporting Description",
      type: "text",
      rows: 3,
      initialValue: "Delivering reliable engineering and construction solutions through expertise, innovation and an uncompromising commitment to quality.",
    }),
    defineField({
      name: "primaryCtaText",
      title: "Primary CTA Label",
      type: "string",
      initialValue: "EXPLORE OUR PROJECTS",
    }),
    defineField({
      name: "primaryCtaLink",
      title: "Primary CTA Link",
      type: "string",
      initialValue: "/projects",
    }),
    defineField({
      name: "secondaryCtaText",
      title: "Secondary CTA Label",
      type: "string",
      initialValue: "CONTACT US",
    }),
    defineField({
      name: "secondaryCtaLink",
      title: "Secondary CTA Link",
      type: "string",
      initialValue: "/contact",
    }),
    defineField({
      name: "backgroundImage",
      title: "Hero Background Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});

