import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://hairplay.hu/sitemap.xml",
    host: "https://hairplay.hu",
  };
}
