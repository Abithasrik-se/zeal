import type { Metadata } from "next";
import { ShieldCheck, Target, Users, Handshake, Globe2, MessageSquare } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import InlineCTA from "@/components/ui/InlineCTA";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Why Zeal | Reliable Trading & Sourcing Partner",
  description:
    "Discover why businesses choose Zeal — reliability, sourcing capability, business understanding, flexibility and international orientation.",
  path: "/why-zeal",
});

const reasons = [
  { icon: ShieldCheck, title: "Reliability", text: "Dependable follow-through on every commitment, from first enquiry to final delivery." },
  { icon: Target, title: "Sourcing Capability", text: "A structured approach to identifying suitable products and reliable sources." },
  { icon: Users, title: "Business Understanding", text: "Time spent understanding each requirement before recommending a way forward." },
  { icon: Handshake, title: "Customer Focus", text: "Every engagement is treated as a relationship, not a single transaction." },
  { icon: Globe2, title: "International Orientation", text: "A perspective built for business across India, the UK and international markets." },
  { icon: MessageSquare, title: "Transparent Communication", text: "Clear, honest updates throughout the process — no surprises." },
];

export default function WhyZealPage() {
  return (
    <>
      <PageHero
        eyebrow="The Zeal Difference"
        title="Why Zeal?"
        description="Businesses choose Zeal for a combination of reliability, sourcing capability and a genuinely international perspective — built around honest, transparent communication."
        crumbs={[{ name: "Why Zeal", path: "/why-zeal" }]}
      />

      <section className="py-16 md:py-24 bg-z-white">
        <div className="container-z grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={0.06 * i}>
              <div className="group h-full rounded-xl border border-z-border p-7 hover:shadow-[0_20px_50px_-20px_rgba(200,155,24,0.35)] hover:border-z-gold/40 hover:-translate-y-1.5 transition-all duration-300">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-z-gold/30 text-z-gold group-hover:bg-z-gold group-hover:text-z-black transition-colors">
                  <r.icon size={20} />
                </span>
                <p className="mt-5 font-display font-bold text-lg text-z-ink">{r.title}</p>
                <p className="mt-2 text-sm text-z-muted leading-relaxed">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <InlineCTA
        title="See the Zeal difference for yourself"
        description="Share your requirement and experience a transparent, reliable approach to trading and supply."
      />
    </>
  );
}
