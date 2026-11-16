import { defineType, defineField } from "sanity";

export const certification = defineType({
  name: "certification",
  title: "Certifications & Compliance",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Certification Standard",
      type: "string",
      validation: (Rule) => Rule.required(),
      initialValue: "ISO 9001:2015",
    }),
    defineField({
      name: "scope",
      title: "Certified Scope",
      type: "string",
      initialValue: "Quality Management System for Heavy Engineering & Fabrication",
    }),
    defineField({
      name: "issuingBody",
      title: "Accreditation / Issuing Body",
      type: "string",
      initialValue: "TÜV / JAS-ANZ / IAF",
    }),
    defineField({
      name: "certificateNumber",
      title: "Certificate Registration Number",
      type: "string",
    }),
    defineField({
      name: "issueDate",
      title: "Date of Certification",
      type: "date",
    }),
    defineField({
      name: "expiryDate",
      title: "Valid Until",
      type: "date",
    }),
    defineField({
      name: "badgeImage",
      title: "Certificate Badge / Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "documentFile",
      title: "Full Certificate PDF Document",
      type: "file",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "isVerified",
      title: "Verified & Active",
      type: "boolean",
      initialValue: true,
    }),
  ],
});

