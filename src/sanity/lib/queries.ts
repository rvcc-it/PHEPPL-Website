import { groq } from "next-sanity";

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  companyName,
  tagline,
  contactEmail,
  contactPhoneIndia,
  contactPhoneSaudi,
  whatsappNumber,
  addressIndia,
  addressSaudi,
  socialLinks,
  metaDescription,
  "logoUrl": logo.asset->url
}`;

export const heroSectionQuery = groq`*[_type == "heroSection"][0]{
  eyebrow,
  headline,
  description,
  primaryCtaText,
  primaryCtaLink,
  secondaryCtaText,
  secondaryCtaLink,
  "backgroundImageUrl": backgroundImage.asset->url
}`;

export const aboutQuery = groq`*[_type == "about"][0]{
  sectionLabel,
  heading,
  overview,
  vision,
  mission,
  values,
  "imageUrl": image.asset->url
}`;

export const servicesQuery = groq`*[_type == "service" && isPublished == true] | order(order asc){
  _id,
  title,
  "slug": slug.current,
  category,
  shortDescription,
  fullDescription,
  "imageUrl": mainImage.asset->url,
  capabilities,
  methodology,
  order
}`;

export const serviceBySlugQuery = groq`*[_type == "service" && slug.current == $slug && isPublished == true][0]{
  _id,
  title,
  "slug": slug.current,
  category,
  shortDescription,
  fullDescription,
  "imageUrl": mainImage.asset->url,
  capabilities,
  methodology
}`;

export const featuredProjectsQuery = groq`*[_type == "project" && isPublished == true && isFeatured == true] | order(order asc){
  _id,
  title,
  "slug": slug.current,
  client,
  location,
  category,
  year,
  status,
  description,
  "imageUrl": mainImage.asset->url,
  scope
}`;

export const allProjectsQuery = groq`*[_type == "project" && isPublished == true] | order(order asc){
  _id,
  title,
  "slug": slug.current,
  client,
  location,
  category,
  year,
  status,
  description,
  "imageUrl": mainImage.asset->url,
  scope,
  technicalDetails
}`;

export const projectBySlugQuery = groq`*[_type == "project" && slug.current == $slug && isPublished == true][0]{
  _id,
  title,
  "slug": slug.current,
  client,
  location,
  category,
  year,
  status,
  description,
  "imageUrl": mainImage.asset->url,
  "galleryUrls": gallery[].asset->url,
  scope,
  technicalDetails
}`;

export const managementQuery = groq`*[_type == "management" && isPublished == true] | order(order asc){
  _id,
  name,
  designation,
  credentials,
  bio,
  "photoUrl": photo.asset->url
}`;

export const infrastructureQuery = groq`*[_type == "infrastructure"] | order(order asc){
  _id,
  title,
  category,
  location,
  capacity,
  description,
  "imageUrl": image.asset->url,
  specs
}`;

export const certificationsQuery = groq`*[_type == "certification" && isVerified == true] | order(order asc){
  _id,
  name,
  scope,
  issuingBody,
  certificateNumber,
  issueDate,
  expiryDate,
  "badgeUrl": badgeImage.asset->url,
  "documentUrl": documentFile.asset->url
}`;

export const careersQuery = groq`*[_type == "career" && isPublished == true] | order(_createdAt desc){
  _id,
  title,
  department,
  location,
  type,
  experience,
  description,
  responsibilities,
  requirements,
  deadline
}`;

export const clientsQuery = groq`*[_type == "client" && isPublished == true] | order(order asc){
  _id,
  name,
  industry,
  "logoUrl": logo.asset->url,
  website,
  testimonial
}`;

