import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { services } from "@/content/services";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import InlineCTA from "@/components/ui/InlineCTA";

export const metadata = {
  title: "Services | Trading, Sourcing & Business Solutions | Zeal",
  description:
    "Explore Zeal's trading, supply, procurement, sourcing, distribution, business facilitation and agency services across India and international markets.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Business Solutions Built Around Your Requirement"
        description="From trading and sourcing to distribution and business facilitation, Zeal connects requirements with practical business solutions."
        crumbs={[{ name: "Services", path: "/services" }]}
      />

      <section className="bg-z-cream py-16 md:py-24">
        <div className="container-z">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={0.06 * index}>
                <Link
                  href={`services/${service.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-z-border bg-z-white transition-all duration-300 hover:-translate-y-1.5 hover:border-z-gold/50 hover:shadow-[0_25px_60px_-35px_rgba(0,0,0,0.3)]"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-z-black">
                    {service.image ? (
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-z-gold/70">
                          {service.name}
                        </span>
                      </div>
                    )}
                    {service.featured && (
                      <span className="absolute left-4 top-4 rounded-full border border-z-gold/40 bg-z-black/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-z-gold backdrop-blur-sm">
                        Principal Business
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-z-gold">
                      {service.eyebrow}
                    </p>

                    <h3 className="mt-2 font-display text-xl font-bold text-z-ink">
                      {service.name}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-z-muted">
                      {service.short}
                    </p>

                    <div className="mt-auto pt-6">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-z-ink transition-colors group-hover:text-z-gold">
                        Explore service
                        <ArrowUpRight
                          size={15}
                          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </span>
                    </div>
                  </div>

                  <span className="h-[2px] w-0 bg-z-gold transition-all duration-500 group-hover:w-full" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <InlineCTA
        title="Have a requirement in mind?"
        description="Tell us what you are looking for and we can explore the most suitable way Zeal can support your requirement."
      />
    </>
  );
}