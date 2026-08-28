import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Factory } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import InlineCTA from "@/components/ui/InlineCTA";
import { industryCategories } from "@/content/placeholders";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return industryCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = industryCategories.find((c) => c.slug === slug);
  if (!category) return pageMetadata({ title: "Industry | Zeal", description: "Industry details.", path: `/industries/${slug}` });
  return pageMetadata({
    title: `${category.label} | Zeal Industries`,
    description: `${category.label} — ${category.description}`,
    path: `/industries/${slug}`,
  });
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = industryCategories.find((c) => c.slug === slug);
  if (!category) return notFound();

  return (
    <>
      <PageHero
        eyebrow="Industry"
        title={category.label}
        description={category.description}
        crumbs={[{ name: "Industries", path: "/industries" }, { name: category.label, path: `/industries/${slug}` }]}
      />
      <section className="py-16 md:py-20 bg-z-white">
        <div className="container-z max-w-2xl">
          <div className="rounded-xl border border-z-border p-8 flex items-start gap-4">
            <Factory className="text-z-gold shrink-0 mt-1" size={24} />
            <p className="text-z-muted leading-relaxed">
              Detailed information for this industry will be published once
              confirmed with the client. Please get in touch to discuss your
              industry-specific requirement.
            </p>
          </div>
        </div>
      </section>
      <InlineCTA />
    </>
  );
}
