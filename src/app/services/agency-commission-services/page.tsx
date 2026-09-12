import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService } from "@/content/services";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import { pageMetadata } from "@/lib/seo";

const service = getService("agency-commission-services")!;

export const metadata: Metadata = pageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/agency-commission-services",
});

export default function Page() {
  if (!service) return notFound();
  return <ServiceTemplate service={service} />;
}
