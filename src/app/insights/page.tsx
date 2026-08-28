import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import { insights } from "@/content/insights";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Zeal Insights | Trading, Sourcing & Supply Perspectives",
  description:
    "Practical perspectives on international trading, strategic sourcing and choosing the right supply partner, from the Zeal team.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Zeal Insights"
        title="Perspectives on Trading & Supply"
        description="Practical, straightforward reading on international trading, sourcing and business facilitation."
        crumbs={[{ name: "Insights", path: "/insights" }]}
      />
      <section className="py-16 md:py-24 bg-z-white">
        <div className="container-z grid md:grid-cols-3 gap-8">
          {insights.map((a, i) => (
            <Reveal key={a.slug} delay={0.08 * i}>
              <Link href={`/insights/${a.slug}`} className="group block">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 90vw, 30vw"
                  />
                </div>
                <p className="mt-4 text-xs tracking-wide uppercase text-z-gold font-semibold">
                  {new Date(a.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })} · {a.readTime}
                </p>
                <h2 className="mt-2 font-display font-bold text-xl text-z-ink leading-snug group-hover:text-z-gold transition-colors">
                  {a.title}
                </h2>
                <p className="mt-2 text-sm text-z-muted leading-relaxed">{a.description}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
