import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { services } from "@/content/services";
import { insights } from "@/content/insights";
import {
  productCategories,
  industryCategories,
  markets,
} from "@/content/placeholders";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl.replace(/\/$/, "");

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: base,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/why-zeal`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/products`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/industries`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/services`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/markets`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/insights`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/contact`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/privacy-policy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/terms-conditions`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${base}/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const productPages: MetadataRoute.Sitemap = productCategories.map(
    (category) => ({
      url: `${base}/products/${category.slug}`,
      changeFrequency: "monthly",
      priority: 0.6,
    })
  );

  const industryPages: MetadataRoute.Sitemap = industryCategories.map(
    (industry) => ({
      url: `${base}/industries/${industry.slug}`,
      changeFrequency: "monthly",
      priority: 0.6,
    })
  );

  const marketPages: MetadataRoute.Sitemap = markets.map((market) => ({
    url: `${base}/markets/${market.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const insightPages: MetadataRoute.Sitemap = insights.map((insight) => ({
    url: `${base}/insights/${insight.slug}`,
    lastModified: insight.updated || insight.date,
    changeFrequency: "yearly",
    priority: 0.5,
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