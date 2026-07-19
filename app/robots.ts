import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: [
      "https://www.expressmaids.co.za/sitemap.xml",
      "https://www.expressmaids.co.za/news-sitemap.xml",
    ],
    host: "https://www.expressmaids.co.za",
  };
}