import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { insights } from "@/content/insights";
import Reveal from "@/components/ui/Reveal";
import RouteLine from "@/components/ui/RouteLine";

export default function InsightsPreview() {
  return (
    <section className="py-20 md:py-28 bg-z-white">
      <div className="container-z">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <Reveal><p className="eyebrow mb-3">Zeal Insights</p></Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-z-ink">Latest Thinking</h2>
            </Reveal>
            <Reveal delay={0.14}><RouteLine width={96} className="my-5" /></Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link href="/insights" className="inline-flex items-center gap-1.5 text-sm font-semibold text-z-ink hover:text-z-gold transition-colors">
              View all insights <ArrowUpRight size={15} />
            </Link>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {insights.map((a, i) => (
            <Reveal key={a.slug} delay={0.1 * i}>
              <Link href={`/insights/${a.slug}`} className="group block">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 90vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-z-black/10 group-hover:bg-z-black/0 transition-colors" />
                </div>
                <p className="mt-4 text-xs tracking-wide uppercase text-z-gold font-semibold">{a.readTime}</p>
                <h3 className="mt-2 font-display font-bold text-lg text-z-ink leading-snug group-hover:text-z-gold transition-colors">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm text-z-muted leading-relaxed line-clamp-2">{a.description}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
