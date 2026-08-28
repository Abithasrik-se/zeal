import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Globe2 } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import InlineCTA from "@/components/ui/InlineCTA";
import { markets } from "@/content/placeholders";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return markets.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const market = markets.find((m) => m.slug === slug);
  if (!market) return pageMetadata({ title: "Market | Zeal", description: "Market details.", path: `/markets/${slug}` });
  return pageMetadata({
    title: `${market.label} | Zeal Markets`,
    description: `${market.label} — ${market.description}`,
    path: `/markets/${slug}`,
  });
}

export default async function MarketPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const market = markets.find((m) => m.slug === slug);
  if (!market) return notFound();

  return (
    <>
      <PageHero
        eyebrow={market.status === "confirmed" ? "Active Market" : "To Be Confirmed"}
        title={market.label}
        description={market.description}
        crumbs={[{ name: "Markets", path: "/markets" }, { name: market.label, path: `/markets/${slug}` }]}
      />
      <section className="py-16 md:py-20 bg-z-white">
        <div className="container-z max-w-2xl">
          <div className="rounded-xl border border-z-border p-8 flex items-start gap-4">
            <Globe2 className="text-z-gold shrink-0 mt-1" size={24} />
            <p className="text-z-muted leading-relaxed">
              {market.status === "confirmed"
                ? `Zeal is actively oriented toward business in ${market.label}. Specific product categories and services available in this market are confirmed per requirement.`
                : "Coverage details for this market are being finalised. Please get in touch to discuss your specific requirement."}
            </p>
          </div>
        </div>
      </section>
      <InlineCTA />
    </>
  );
}
