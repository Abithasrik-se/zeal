import type { Metadata } from "next";
import Link from "next/link";
import { Factory, ArrowUpRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import InlineCTA from "@/components/ui/InlineCTA";
import { industryCategories } from "@/content/placeholders";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Industries We Serve | Zeal",
  description:
    "An overview of the industries Zeal works with. Industry focus areas are confirmed as client relationships develop.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Where We Add Value"
        title="Industries"
        description="Zeal's industry focus is confirmed as client requirements are finalised. Get in touch to discuss your industry's specific sourcing or supply needs."
        crumbs={[{ name: "Industries", path: "/industries" }]}
      />
      <section className="py-16 md:py-24 bg-z-white">
        <div className="container-z grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industryCategories.map((c, i) => (
            <Reveal key={c.slug} delay={0.08 * i}>
              <Link
                href={`/industries/${c.slug}`}
                className="group flex flex-col justify-between h-full min-h-[180px] rounded-xl border border-z-border p-7 hover:border-z-gold/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <Factory className="text-z-gold mb-4" size={24} />
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
      <InlineCTA title="Don't see your industry listed?" description="Reach out and let's discuss how Zeal can support your specific industry requirement." />
    </>
  );
}
