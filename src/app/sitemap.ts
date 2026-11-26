import type { MetadataRoute } from "next";
import { areas } from "@/lib/areas";

const siteUrl = "https://www.estudioagv.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/areas`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/sobre_mi`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...areas.map((area) => ({
      url: `${siteUrl}/areas/${area.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
