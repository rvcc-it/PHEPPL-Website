import createImageUrlBuilder from "@sanity/image-url";
import { projectId, dataset } from "./client";

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "w5gel23b",
  dataset: dataset || "production",
});

export const urlForImage = (source: any) => {
  if (!source || !source.asset) return "";
  return imageBuilder.image(source).auto("format").fit("max").url();
};

