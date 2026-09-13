"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Boxes,
  PackageSearch,
  Truck,
  Handshake,
  Percent,
  Check,
  ArrowUpRight,
} from "lucide-react";

import type { Service } from "@/content/services";
import { services } from "@/content/services";

import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Faq from "@/components/ui/Faq";
import InlineCTA from "@/components/ui/InlineCTA";

const icons = {
  Boxes,
  PackageSearch,
  Truck,
  Handshake,
  Percent,
};

export default function ServiceTemplate({
  service,
}: {
  service: Service;
}) {
  const Icon = icons[service.icon];

  const related = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      {/* =========================================================
          HERO
      ========================================================== */}
      <PageHero
        eyebrow={service.eyebrow}
        title={service.name}
        description={service.intro}
        crumbs={[
          {
            name: "Services",
            path: "/services",
          },
          {
            name: service.name,
            path: `/services/${service.slug}`,
          },
        ]}
      />

      {/* =========================================================
          INTRO + IMAGE
      ========================================================== */}
      <section className="bg-z-white py-14 sm:py-16 md:py-24">
        <div className="container-z">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Text */}
            <div className="lg:col-span-6">
              <Reveal>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-z-gold/10 text-z-gold">
                  <Icon size={26} strokeWidth={1.7} />
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <p className="eyebrow mb-3">
                  {service.eyebrow}
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="font-display text-3xl font-bold leading-tight text-z-ink sm:text-4xl md:text-5xl">
                  What this service{" "}
                  <span className="text-gradient-gold">
                    means.
                  </span>
                </h2>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-z-muted md:text-lg">
                  {service.whatItMeans}
                </p>
              </Reveal>

              <Reveal delay={0.22}>
                <div className="mt-8 flex items-center gap-3">
                  <span className="h-px w-10 bg-z-gold" />
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-z-muted">
                    Zeal Business Services
                  </span>
                </div>
              </Reveal>
            </div>

            {/* Image */}
            <Reveal
              delay={0.12}
              className="lg:col-span-6"
            >
              <div className="group relative overflow-hidden rounded-2xl border border-z-border bg-z-black shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={service.image}
                    alt={`${service.name} - Zeal business service`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  {/* Image gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                  {/* Gold accent */}
                  <div className="absolute bottom-5 left-5 flex items-center gap-3">
                    <span className="h-px w-8 bg-z-gold" />
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                      Zeal
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW WE APPROACH IT
      ========================================================== */}
      <section className="bg-z-cream py-14 sm:py-16 md:py-24">
        <div className="container-z">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Heading */}
            <div className="lg:col-span-4">
              <Reveal>
                <p className="eyebrow mb-3">
                  Our Approach
                </p>
              </Reveal>

              <Reveal delay={0.08}>
                <h2 className="font-display text-3xl font-bold leading-tight text-z-ink md:text-4xl">
                  From requirement to{" "}
                  <span className="text-gradient-gold">
                    action.
                  </span>
                </h2>
              </Reveal>

              <Reveal delay={0.14}>
                <p className="mt-5 text-sm leading-relaxed text-z-muted md:text-base">
                  Every requirement is different. Our approach keeps
                  the process structured while allowing the right
                  solution to be developed around the customer.
                </p>
              </Reveal>
            </div>

            {/* Process */}
            <div className="lg:col-span-8">
              <div className="divide-y divide-z-border border-y border-z-border">
                {service.approach.map((step, index) => (
                  <Reveal
                    key={`${service.slug}-step-${index}`}
                    delay={0.06 * index}
                  >
                    <div className="group grid gap-4 py-6 sm:grid-cols-[70px_1fr] sm:items-center md:py-7">
                      <span className="font-display text-sm font-bold tracking-[0.12em] text-z-gold">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="flex items-start gap-4">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-z-gold transition-transform duration-300 group-hover:scale-150" />

                        <p className="max-w-2xl text-base leading-relaxed text-z-ink/85 md:text-lg">
                          {step}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHO IT IS FOR + BENEFITS
      ========================================================== */}
      <section className="bg-z-white py-14 sm:py-16 md:py-24">
        <div className="container-z">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Who it is for */}
            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow mb-3">
                  Who It Is For
                </p>
              </Reveal>

              <Reveal delay={0.08}>
                <h2 className="font-display text-3xl font-bold leading-tight text-z-ink md:text-4xl">
                  Built around genuine{" "}
                  <span className="text-gradient-gold">
                    business requirements.
                  </span>
                </h2>
              </Reveal>

              <div className="mt-8 space-y-0 border-t border-z-border">
                {service.whoFor.map((item, index) => (
                  <Reveal
                    key={`${service.slug}-who-${index}`}
                    delay={0.06 * index}
                  >
                    <div className="flex items-start gap-4 border-b border-z-border py-5">
                      <Check
                        size={18}
                        strokeWidth={2}
                        className="mt-0.5 shrink-0 text-z-gold"
                      />

                      <p className="text-base leading-relaxed text-z-ink/80">
                        {item}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <Reveal
              delay={0.1}
              className="lg:col-span-5"
            >
              <div className="relative overflow-hidden rounded-2xl bg-z-black p-7 text-white sm:p-8 md:p-9">
                {/* Decorative glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-z-gold/15 blur-3xl" />

                <div className="relative">
                  <p className="eyebrow mb-5">
                    Why Zeal
                  </p>

                  <h3 className="font-display text-2xl font-bold leading-tight md:text-3xl">
                    What this service brings to the table.
                  </h3>

                  <div className="mt-8 space-y-6">
                    {service.benefits.map((benefit, index) => (
                      <div
                        key={`${service.slug}-benefit-${index}`}
                        className="border-l border-z-gold/40 pl-4"
                      >
                        <p className="font-display font-semibold text-z-gold-light">
                          {benefit.title}
                        </p>

                        <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                          {benefit.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="gold-glow mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-z-gold px-6 py-3.5 text-sm font-semibold text-z-black transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    Discuss Your Requirement
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          RELATED SERVICES
      ========================================================== */}
      <section className="bg-z-black py-14 text-white sm:py-16 md:py-20">
        <div className="container-z">
          <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <Reveal>
                <p className="eyebrow mb-3">
                  Continue Exploring
                </p>
              </Reveal>

              <Reveal delay={0.08}>
                <h2 className="font-display text-3xl font-bold md:text-4xl">
                  Related Services
                </h2>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-z-gold-light"
              >
                View All Services
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            {related.map((item, index) => {
              const RelatedIcon = icons[item.icon];

              return (
                <Reveal
                  key={item.slug}
                  delay={0.06 * index}
                >
                  <Link
                    href={`/services/${item.slug}`}
                    className="group block h-full bg-z-black p-6 transition-colors duration-300 hover:bg-white/[0.045] md:p-7"
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-z-gold">
                        <RelatedIcon
                          size={22}
                          strokeWidth={1.6}
                        />
                      </span>

                      <ArrowUpRight
                        size={17}
                        className="text-white/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-z-gold"
                      />
                    </div>

                    <p className="mt-8 font-display text-lg font-bold text-white">
                      {item.name}
                    </p>

                    <p className="mt-2 text-sm leading-relaxed text-white/45">
                      {item.short}
                    </p>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================== */}
      <section className="bg-z-cream py-14 sm:py-16 md:py-24">
        <div className="container-z max-w-4xl">
          <SectionHeading
            eyebrow="Common Questions"
            title="Frequently Asked Questions"
          />

          <div className="mt-8 md:mt-10">
            <Faq items={service.faqs} />
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}
      <InlineCTA
        title={`Ready to explore ${service.name}?`}
        description="Share your requirement and our team will get back to you with the right next step."
      />
    </>
  );
}

