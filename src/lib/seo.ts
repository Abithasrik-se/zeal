import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

/**
 * Creates consistent SEO metadata for individual pages.
 */
export function pageMetadata({
  title,
  description,
  path = "/",
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");

  const cleanPath =
    path === "/"
      ? ""
      : `/${path.replace(/^\/+/, "").replace(/\/+$/, "")}`;

  const url = `${baseUrl}${cleanPath}`;

  return {
    title,
    description,

    alternates: {
      canonical: url,
    },

    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },

    authors: [
      {
        name: siteConfig.legalName,
      },
    ],

    creator: siteConfig.legalName,
    publisher: siteConfig.legalName,

    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - ${title}`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
  };
}

/**
 * Organization structured data.
 *
 * This helps search engines understand ZEAL as a real organization
 * and associate the website with the business.
 */
export function organizationJsonLd() {
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "Organization",

    "@id": `${baseUrl}/#organization`,

    name: siteConfig.legalName,
    alternateName: siteConfig.name,

    url: baseUrl,

    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/images/zeal-mark.png`,
    },

    description: siteConfig.description,

    email: siteConfig.email,

    address: {
      "@type": "PostalAddress",
      streetAddress: "Flat No.: NO:3/571/38, Thiruppathi Nagar",
      addressLocality: "Sattur, Padanthal",
      addressRegion: "Tamil Nadu",
      postalCode: "626203",
      addressCountry: "IN",
    },

    areaServed: {
      "@type": "Country",
      name: "India",
    },

    knowsAbout: [
      "Trading",
      "Product sourcing",
      "Procurement",
      "Distribution",
      "Product supply",
      "Business facilitation",
      "International trade",
    ],
  };
}

/**
 * Website structured data.
 *
 * This helps search engines understand the website itself
 * and its relationship with the organization.
 */
export function websiteJsonLd() {
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",

    "@id": `${baseUrl}/#website`,

    name: siteConfig.name,
    url: baseUrl,

    description: siteConfig.description,

    publisher: {
      "@id": `${baseUrl}/#organization`,
    },

    inLanguage: "en-IN",
  };
}

/**
 * Breadcrumb structured data.
 *
 * Use this on individual pages rather than globally.
 */
export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: items.map((item, index) => {
      const cleanPath =
        item.path === "/"
          ? ""
          : `/${item.path.replace(/^\/+/, "").replace(/\/+$/, "")}`;

      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: `${baseUrl}${cleanPath}`,
      };
    }),
  };
}