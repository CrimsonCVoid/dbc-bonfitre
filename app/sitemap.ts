import type { MetadataRoute } from "next";
import { BEACHES } from "@/lib/beaches";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const corePages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/bonfire-packages", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/bachelorette-bonfire", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/bonfire-permit-process", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/refund-policy", priority: 0.4, changeFrequency: "yearly" as const },
  ];

  const beachPages = BEACHES.map((b) => ({
    url: `/service-areas/${b.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  return [...corePages, ...beachPages].map((p) => ({
    url: `${SITE.domain}${p.url}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
