import type { Metadata } from "next";
import Link from "next/link";
import { PackageOpen, ArrowUpRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import InlineCTA from "@/components/ui/InlineCTA";
import { productCategories } from "@/content/placeholders";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Products & Supply Categories | Zeal",
  description:
    "An overview of Zeal's product and supply categories. Category details are confirmed on a case-by-case basis as new requirements are onboarded.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Supply"
        title="Products & Supply Categories"
        description="Our product categories are confirmed as client requirements are finalised. Reach out to discuss a specific product or category you're looking to source."
        crumbs={[{ name: "Products", path: "/products" }]}
      />
      <section className="py-16 md:py-24 bg-z-white">
        <div className="container-z grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.map((c, i) => (
            <Reveal key={c.slug} delay={0.08 * i}>
              <Link
                href={`/products/${c.slug}`}
                className="group flex flex-col justify-between h-full min-h-[180px] rounded-xl border border-z-border p-7 hover:border-z-gold/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <PackageOpen className="text-z-gold mb-4" size={24} />
                  <p className="font-display font-bold text-lg text-z-ink">{c.label}</p>
                  <p className="mt-2 text-sm text-z-muted leading-relaxed">{c.description}</p>
                </div>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-z-ink group-hover:text-z-gold transition-colors">
                  View details <ArrowUpRight size={14} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <InlineCTA title="Looking for a specific product?" description="Share your product requirement and we'll explore suitable sourcing options with you." />
    </>
  );
}
