import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService } from "@/content/services";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import { pageMetadata } from "@/lib/seo";

const service = getService("business-facilitation")!;

export const metadata: Metadata = pageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/business-facilitation",
});

export default function Page() {
  if (!service) return notFound();
  return <ServiceTemplate service={service} />;
}
