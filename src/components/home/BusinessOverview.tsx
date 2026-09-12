
"use client";

import Link from "next/link";
import {
  Boxes,
  PackageSearch,
  Truck,
  Handshake,
  Percent,
  ArrowUpRight,
  MoveUpRight,
} from "lucide-react";

import { services } from "@/content/services";
import Reveal from "@/components/ui/Reveal";
import RouteLine from "@/components/ui/RouteLine";

const icons = {
  Boxes,
  PackageSearch,
  Truck,
  Handshake,
  Percent,
};

export default function BusinessOverview() {
  const featured = services.find((s) => s.featured)!;
  const rest = services.filter((s) => !s.featured);

  return (
    <section className="relative overflow-hidden bg-z-cream py-20 sm:py-24 md:py-28">
      {/* =====================================================
          BACKGROUND DETAILS
      ====================================================== */}

      <div
        className="pointer-events-none absolute -left-48 top-20 h-[420px] w-[420px] rounded-full opacity-[0.045] sm:h-[550px] sm:w-[550px]"
        style={{
          background:
            "radial-gradient(circle, #E8C85A 0%, transparent 70%)",
        }}
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full opacity-[0.035] sm:h-[520px] sm:w-[520px]"
        style={{
          background:
            "radial-gradient(circle, #C89B18 0%, transparent 70%)",
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-grid-gold opacity-[0.15] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />

      <div className="container-z relative">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="mb-10 flex flex-col gap-7 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-z-gold" />

                <p className="eyebrow">
                  Our Core Business
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-3 font-display text-4xl font-bold leading-[1.08] text-z-ink sm:text-5xl">
                What We{" "}
                <span className="text-gradient-gold">
                  Do
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <RouteLine
                width={96}
                className="my-5"
              />
            </Reveal>

            <Reveal delay={0.18}>
              <p className="max-w-xl text-base leading-relaxed text-z-muted sm:text-lg">
                From sourcing to supply, Zeal helps businesses identify
                opportunities, connect with suitable sources and move products
                and services efficiently.
              </p>
            </Reveal>
          </div>

          {/* Small business indicator */}
          <Reveal delay={0.2}>
            <div className="hidden shrink-0 items-center gap-3 lg:flex">
              <div className="flex -space-x-2">
                {[
                  Boxes,
                  PackageSearch,
                  Truck,
                  Handshake,
                ].map((Icon, index) => (
                  <div
                    key={index}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-z-cream bg-white text-z-gold"
                  >
                    <Icon size={15} />
                  </div>
                ))}
              </div>

              <p className="text-xs font-medium uppercase tracking-[0.16em] text-z-muted">
                Multiple business solutions
              </p>
            </div>
          </Reveal>
        </div>

        {/* =====================================================
            BUSINESS GRID
        ====================================================== */}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-12">
          {/* =================================================
              FEATURED — PRINCIPAL BUSINESS
          ================================================== */}

          <Reveal className="h-full md:row-span-2 lg:col-span-6">
            <Link
              href={`/${featured.slug}`}
              className="group relative flex h-full min-h-[390px] flex-col justify-between overflow-hidden rounded-2xl bg-z-black p-7 text-white shadow-[0_25px_70px_-35px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_35px_80px_-35px_rgba(0,0,0,0.5)] sm:min-h-[430px] sm:p-9 md:p-10"
            >
              {/* Gold glow */}
              <div
                className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full opacity-20 transition-transform duration-700 ease-out group-hover:scale-125"
                style={{
                  background:
                    "radial-gradient(circle, #C89B18 0%, transparent 70%)",
                }}
              />

              {/* Top subtle glow */}
              <div
                className="pointer-events-none absolute -top-32 -left-32 h-72 w-72 rounded-full opacity-[0.07]"
                style={{
                  background:
                    "radial-gradient(circle, #E8C85A 0%, transparent 70%)",
                }}
              />

              {/* Decorative border */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10 transition-colors duration-500 group-hover:border-z-gold/30" />

              {/* Background grid */}
              <div className="pointer-events-none absolute inset-0 bg-grid-gold opacity-[0.08]" />

              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-z-gold/15 text-z-gold transition-all duration-300 group-hover:bg-z-gold group-hover:text-z-black">
                    <Boxes size={23} />
                  </div>

                  <span className="rounded-full border border-z-gold/40 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-z-gold">
                    Principal Business
                  </span>
                </div>

                {/* Main content */}
                <div className="mt-10 sm:mt-14">
                  <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.25em] text-white/35">
                    01 / Core Operations
                  </p>

                  <h3 className="max-w-md font-display text-3xl font-bold leading-tight sm:text-4xl">
                    {featured.name}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
                    {featured.short}
                  </p>
                </div>
              </div>

              {/* Bottom */}
              <div className="relative mt-10 flex items-end justify-between gap-5">
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-px w-8 bg-z-gold transition-all duration-500 group-hover:w-14" />

                    <span className="text-xs font-medium text-z-gold">
                      At the heart of Zeal
                    </span>
                  </div>

                  <p className="max-w-xs text-xs leading-relaxed text-white/40">
                    Connecting products, sources and opportunities across
                    markets.
                  </p>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-300 group-hover:border-z-gold group-hover:bg-z-gold group-hover:text-z-black">
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </div>
            </Link>
          </Reveal>

          {/* =================================================
              SECONDARY SERVICES
          ================================================== */}

          {rest.map((service, index) => {
            const Icon = icons[service.icon];

            return (
              <Reveal
                key={service.slug}
                delay={0.08 * (index + 1)}
                className="h-full lg:col-span-6"
              >
                <Link
                  href={`/${service.slug}`}
                  className="group relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl border border-z-border bg-z-white p-6 shadow-[0_12px_35px_-30px_rgba(0,0,0,0.3)] transition-all duration-400 hover:-translate-y-1 hover:border-z-gold/50 hover:shadow-[0_25px_50px_-30px_rgba(0,0,0,0.3)] sm:p-7"
                >
                  {/* Hover glow */}
                  <div
                    className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-z-gold opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-15"
                  />

                  {/* Gold corner accent */}
                  <span className="absolute right-0 top-0 h-16 w-16 overflow-hidden">
                    <span className="absolute right-[-32px] top-[12px] h-px w-20 rotate-45 bg-z-gold/0 transition-all duration-500 group-hover:bg-z-gold/60" />
                  </span>

                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-z-gold/10 text-z-gold transition-all duration-300 group-hover:scale-105 group-hover:bg-z-gold group-hover:text-z-black">
                        <Icon size={20} />
                      </div>

                      <span className="text-[10px] font-semibold tracking-[0.18em] text-z-muted/50">
                        0{index + 2}
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-xl font-bold text-z-ink sm:text-2xl">
                      {service.name}
                    </h3>

                    <p className="mt-2 max-w-md text-sm leading-relaxed text-z-muted">
                      {service.short}
                    </p>
                  </div>

                  <div className="relative mt-7 flex items-center justify-between border-t border-z-border/70 pt-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-z-ink transition-colors duration-300 group-hover:text-z-gold">
                      Learn more
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-z-border transition-all duration-300 group-hover:border-z-gold group-hover:bg-z-gold group-hover:text-z-black">
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </div>

                  {/* Bottom hover line */}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-z-gold transition-all duration-500 group-hover:w-full" />
                </Link>
              </Reveal>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM BUSINESS STATEMENT
        ====================================================== */}

        <Reveal delay={0.35}>
          <div className="mt-8 flex flex-col gap-5 rounded-2xl border border-z-border bg-white/60 p-6 sm:p-7 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-z-gold/10 text-z-gold">
                <MoveUpRight size={17} />
              </div>

              <div>
                <p className="font-semibold text-z-ink">
                  One connected business approach.
                </p>

                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-z-muted">
                  Our services work together to create practical sourcing,
                  supply and business opportunities for customers and partners.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-z-black px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-z-ink"
            >
              Discuss an Opportunity
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

