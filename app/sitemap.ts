import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://hairplay.hu";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/arak`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/hazirend`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
  ];
}
