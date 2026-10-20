import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";
import { insights } from "@/content/insights";
import { industries } from "@/content/industries";
import { capabilities } from "@/content/capabilities";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/insights", "/industries", "/capabilities", "/our-people", "/careers", "/about", "/contact"].map((p) => ({
    url: `${SITE.url}${p}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.8,
  }));

  return [
    ...staticRoutes,
    ...insights.map((i) => ({ url: `${SITE.url}/insights/${i.slug}`, lastModified: new Date(i.date), changeFrequency: "monthly" as const, priority: 0.7 })),
    ...industries.map((p) => ({ url: `${SITE.url}/industries/${p.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...capabilities.map((p) => ({ url: `${SITE.url}/capabilities/${p.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
