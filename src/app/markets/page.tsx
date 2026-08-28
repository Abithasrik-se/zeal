import type { Metadata } from "next";
import Link from "next/link";
import { Globe2, ArrowUpRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import InlineCTA from "@/components/ui/InlineCTA";
import { markets } from "@/content/placeholders";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Markets We Serve | Zeal",
  description:
    "Zeal is oriented toward business across India, the United Kingdom and other international markets.",
  path: "/markets",
});

export default function MarketsPage() {
  return (
    <>
      <PageHero
        eyebrow="Where We Operate"
        title="Markets"
        description="Zeal's business is oriented toward India, the United Kingdom and other international markets, with specific market coverage confirmed on a case-by-case basis."
        crumbs={[{ name: "Markets", path: "/markets" }]}
      />
      <section className="py-16 md:py-24 bg-z-white">
        <div className="container-z grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {markets.map((m, i) => (
            <Reveal key={m.slug} delay={0.08 * i}>
              <Link
                href={`/markets/${m.slug}`}
                className="group flex flex-col justify-between h-full min-h-[180px] rounded-xl border border-z-border p-7 hover:border-z-gold/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <Globe2 className="text-z-gold" size={24} />
                    <span
                      className={`text-[10px] uppercase tracking-wide px-2.5 py-1 rounded-full ${
                        m.status === "confirmed"
                          ? "bg-z-gold/10 text-z-gold"
                          : "bg-z-muted/10 text-z-muted"
                      }`}
                    >
                      {m.status === "confirmed" ? "Active Market" : "To Be Confirmed"}
                    </span>
                  </div>
                  <p className="mt-4 font-display font-bold text-lg text-z-ink">{m.label}</p>
                  <p className="mt-2 text-sm text-z-muted leading-relaxed">{m.description}</p>
                </div>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-z-ink group-hover:text-z-gold transition-colors">
                  View details <ArrowUpRight size={14} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <InlineCTA title="Looking to source from a specific market?" description="Tell us the market and requirement, and we'll explore how Zeal can help." />
    </>
  );
}
