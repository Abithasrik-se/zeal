import { ShieldCheck, Target, Users, Link2, Globe2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import RouteLine from "@/components/ui/RouteLine";

const principles = [
  { icon: ShieldCheck, title: "Reliability", text: "Dependable sourcing and supply built around customer requirements." },
  { icon: Target, title: "Smart Sourcing", text: "Identifying suitable products and reliable sources." },
  { icon: Users, title: "Customer Focus", text: "Understanding business requirements and developing practical solutions." },
  { icon: Link2, title: "Business Connectivity", text: "Connecting businesses with relevant products, suppliers and service opportunities." },
  { icon: Globe2, title: "International Perspective", text: "Supporting opportunities across markets." },
];

export default function WhyZealHome() {
  return (
    <section className="py-20 md:py-28 bg-z-white">
      <div className="container-z">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Reveal><p className="eyebrow mb-3">The Zeal Difference</p></Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-z-ink">
              Why Businesses Choose Zeal
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="flex justify-center"><RouteLine width={96} className="my-5" /></div>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={0.06 * i}>
              <div className="group h-full rounded-xl border border-z-border p-6 hover:shadow-[0_20px_50px_-20px_rgba(200,155,24,0.35)] hover:border-z-gold/40 hover:-translate-y-1.5 transition-all duration-300 bg-z-cream/30">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-z-gold/30 text-z-gold group-hover:bg-z-gold group-hover:text-z-black transition-colors">
                  <p.icon size={18} />
                </span>
                <p className="mt-5 font-semibold text-z-ink">{p.title}</p>
                <p className="mt-2 text-sm text-z-muted leading-relaxed">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
