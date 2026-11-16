import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "w5gel23b";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  basePath: "/studio",
  name: "pheppl_studio",
  title: "PHEPPL Corporate Studio",
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("PHEPPL Content Management")
          .items([
            S.listItem()
              .title("Global Site Settings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
            S.listItem()
              .title("Hero Section")
              .child(
                S.document()
                  .schemaType("heroSection")
                  .documentId("heroSection")
              ),
            S.listItem()
              .title("About Us")
              .child(
                S.document()
                  .schemaType("about")
                  .documentId("about")
              ),
            S.divider(),
            S.documentTypeListItem("service").title("Services & Capabilities"),
            S.documentTypeListItem("project").title("Project Portfolio"),
            S.documentTypeListItem("management").title("Board of Management"),
            S.documentTypeListItem("infrastructure").title("Infrastructure & Fleet"),
            S.documentTypeListItem("certification").title("Certifications & ISO"),
            S.documentTypeListItem("career").title("Careers & Vacancies"),
            S.documentTypeListItem("client").title("Clients & Testimonials"),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});

