import Link from "next/link";
import { Boxes, PackageSearch, Truck, Handshake, Percent, Check, ArrowUpRight } from "lucide-react";
import type { Service } from "@/content/services";
import { services } from "@/content/services";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Faq from "@/components/ui/Faq";
import InlineCTA from "@/components/ui/InlineCTA";

const icons = { Boxes, PackageSearch, Truck, Handshake, Percent };

export default function ServiceTemplate({ service }: { service: Service }) {
  const Icon = icons[service.icon];
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.name}
        description={service.intro}
        crumbs={[{ name: "Business", path: "/trading-supply" }, { name: service.name, path: `/${service.slug}` }]}
      />

      <section className="py-16 md:py-24 bg-z-white">
        <div className="container-z grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-z-gold/10 text-z-gold mb-6">
              <Icon size={26} />
            </span>
            <Reveal>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-z-ink">
                What This Service Means
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-5 text-z-muted text-base md:text-lg leading-relaxed">
                {service.whatItMeans}
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <h3 className="font-display font-bold text-2xl text-z-ink mt-12 mb-6">
                How Zeal Approaches It
              </h3>
            </Reveal>
            <div className="space-y-4">
              {service.approach.map((step, i) => (
                <Reveal key={step} delay={0.06 * i}>
                  <div className="flex items-start gap-4 rounded-lg border border-z-border p-4 hover:border-z-gold/40 transition-colors">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-z-black text-z-gold text-xs font-bold shrink-0 font-display">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-z-ink/85 leading-relaxed">{step}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <h3 className="font-display font-bold text-2xl text-z-ink mt-12 mb-5">Who It Is For</h3>
            </Reveal>
            <ul className="space-y-3">
              {service.whoFor.map((w) => (
                <li key={w} className="flex items-start gap-3 text-z-ink/85">
                  <Check size={18} className="text-z-gold shrink-0 mt-0.5" />
                  {w}
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-28 space-y-6">
              <Reveal>
                <div className="rounded-2xl bg-z-black text-white p-8">
                  <p className="eyebrow mb-4">Benefits</p>
                  <div className="space-y-5">
                    {service.benefits.map((b) => (
                      <div key={b.title}>
                        <p className="font-semibold text-z-gold-light">{b.title}</p>
                        <p className="text-sm text-white/55 mt-1 leading-relaxed">{b.description}</p>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="mt-7 gold-glow inline-flex items-center justify-center gap-2 w-full bg-z-gold text-z-black font-semibold text-sm px-6 py-3.5 rounded-full hover:-translate-y-0.5 transition-transform"
                  >
                    Discuss Your Requirement <ArrowUpRight size={16} />
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-z-border p-6">
                  <p className="text-sm font-semibold text-z-ink mb-4">Related Services</p>
                  <ul className="space-y-3">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link
                          href={`/${r.slug}`}
                          className="flex items-center justify-between text-sm text-z-muted hover:text-z-gold transition-colors group"
                        >
                          {r.name}
                          <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-z-cream">
        <div className="container-z max-w-3xl">
          <SectionHeading eyebrow="Common Questions" title="Frequently Asked Questions" />
          <div className="mt-10">
            <Faq items={service.faqs} />
          </div>
        </div>
      </section>

      <InlineCTA
        title={`Ready to explore ${service.name}?`}
        description="Share your requirement and our team will get back to you with the right next step."
      />
    </>
  );
}
