import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PackageOpen } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import InlineCTA from "@/components/ui/InlineCTA";
import { productCategories } from "@/content/placeholders";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return productCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = productCategories.find((c) => c.slug === slug);
  if (!category) return pageMetadata({ title: "Product Category | Zeal", description: "Product category details.", path: `/products/${slug}` });
  return pageMetadata({
    title: `${category.label} | Zeal Products`,
    description: `${category.label} — ${category.description}`,
    path: `/products/${slug}`,
  });
}

export default async function ProductCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = productCategories.find((c) => c.slug === slug);
  if (!category) return notFound();

  return (
    <>
      <PageHero
        eyebrow="Product Category"
        title={category.label}
        description={category.description}
        crumbs={[{ name: "Products", path: "/products" }, { name: category.label, path: `/products/${slug}` }]}
      />
      <section className="py-16 md:py-20 bg-z-white">
        <div className="container-z max-w-2xl">
          <div className="rounded-xl border border-z-border p-8 flex items-start gap-4">
            <PackageOpen className="text-z-gold shrink-0 mt-1" size={24} />
            <p className="text-z-muted leading-relaxed">
              Detailed specifications for this category will be published once
              confirmed with the client. In the meantime, please get in touch to
              discuss your specific requirement within this category.
            </p>
          </div>
        </div>
      </section>
      <InlineCTA />
    </>
  );
}
