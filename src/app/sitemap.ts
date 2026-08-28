import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { services } from "@/content/services";
import { insights } from "@/content/insights";
import { productCategories, industryCategories, markets } from "@/content/placeholders";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;
  const now = new Date();

  const staticPages = [
    "",
    "/about",
    "/why-zeal",
    "/products",
    "/industries",
    "/markets",
    "/insights",
    "/contact",
    "/privacy-policy",
    "/terms-conditions",
  ].map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.7,
  }));

  const servicePages = services.map((s) => ({
    url: `${base}/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const productPages = productCategories.map((c) => ({
    url: `${base}/products/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const industryPages = industryCategories.map((c) => ({
    url: `${base}/industries/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const marketPages = markets.map((m) => ({
    url: `${base}/markets/${m.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const insightPages = insights.map((a) => ({
    url: `${base}/insights/${a.slug}`,
    lastModified: a.updated || a.date,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...productPages,
    ...industryPages,
    ...marketPages,
    ...insightPages,
  ];
}
