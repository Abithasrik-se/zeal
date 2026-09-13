import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getService, services } from "@/content/services";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import { pageMetadata } from "@/lib/seo";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};


export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

/**
 * Generate SEO metadata for each service dynamically.
 */
export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;

  const service = getService(slug);

  if (!service) {
    return {
      title: "Service Not Found | Zeal",
      description: "The requested Zeal service could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return pageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

/**
 * Dynamic service page.
 */
export default async function ServicePage({
  params,
}: ServicePageProps) {
  const { slug } = await params;

  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return <ServiceTemplate service={service} />;
}
