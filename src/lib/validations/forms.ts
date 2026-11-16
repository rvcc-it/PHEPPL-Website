import { z } from "zod";

export const quoteFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  company: z.string().min(2, "Company name is required").max(150),
  email: z.string().email("Please provide a valid business email"),
  phone: z.string().min(7, "Please enter a valid phone number").max(20),
  projectName: z.string().min(2, "Project name is required").max(150),
  projectLocation: z.string().min(2, "Project location is required").max(150),
  serviceRequired: z.string().min(1, "Please select a required engineering service"),
  projectDescription: z.string().min(15, "Please provide more project details (at least 15 characters)"),
  honeypot: z.string().max(0, "Bot detected").optional(),
});

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please provide a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number").max(20),
  subject: z.string().min(3, "Subject is required").max(150),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().max(0, "Bot detected").optional(),
});

export const careerFormSchema = z.object({
  applicantName: z.string().min(2, "Full name is required").max(100),
  email: z.string().email("Valid email address is required"),
  phone: z.string().min(7, "Valid phone number is required").max(20),
  position: z.string().min(2, "Please specify the position"),
  experienceYears: z.string().optional(),
  currentCompany: z.string().optional(),
  message: z.string().optional(),
  honeypot: z.string().max(0, "Bot detected").optional(),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;
export type ContactFormValues = z.infer<typeof contactFormSchema>;
export type CareerFormValues = z.infer<typeof careerFormSchema>;

