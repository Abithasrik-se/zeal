
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Target,
  Users,
  Globe2,
  ArrowUpRight,
  Compass,
} from "lucide-react";

import Reveal from "@/components/ui/Reveal";
import RouteLine from "@/components/ui/RouteLine";

const values = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Reliability",
    text: "Dependable products, communication and service built around commitments that matter.",
  },
  {
    number: "02",
    icon: Target,
    title: "Smart Sourcing",
    text: "Looking beyond price to consider suitability, quality, availability and value.",
  },
  {
    number: "03",
    icon: Users,
    title: "Customer Focus",
    text: "Understanding the requirement first and building the response around it.",
  },
  {
    number: "04",
    icon: Globe2,
    title: "International Perspective",
    text: "An India-rooted business with an outlook toward wider markets and opportunities.",
  },
];

export default function AboutContent() {
  return (
    <>
      {/* =========================================================
          01 — INTRODUCTION / WHITE
      ========================================================= */}
      <section className="relative overflow-hidden bg-z-white py-16 sm:py-20 md:py-28">
        <div className="container-z">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
            {/* Image */}
            <Reveal className="order-2 lg:order-1 lg:col-span-5">
              <div className="relative mx-auto max-w-[520px]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-z-cream">
                  <Image
                    src="/images/about/about-zeal.jpg"
                    alt="Zeal business and trading operations"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 42vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
                    <p className="text-[9px] uppercase tracking-[0.25em] text-white/60">
                      Zeal
                    </p>

                    <p className="mt-2 max-w-[220px] font-display text-lg font-semibold leading-tight text-white sm:text-xl">
                      Connecting requirements with possibilities.
                    </p>
                  </div>
                </div>

                {/* Compass detail */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="absolute -bottom-6 -right-4 flex h-20 w-20 items-center justify-center rounded-xl border-4 border-z-white bg-z-black shadow-xl sm:-right-6 sm:h-24 sm:w-24"
                >
                  <Compass
                    size={30}
                    strokeWidth={1.5}
                    className="text-z-gold"
                  />
                </motion.div>
              </div>
            </Reveal>

            {/* Content */}
            <div className="order-1 lg:order-2 lg:col-span-7">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-z-gold" />
                  <p className="eyebrow">Who We Are</p>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[1.03] tracking-[-0.03em] text-z-ink sm:text-5xl md:text-6xl">
                  A business built around
                  <span className="text-gradient-gold"> opportunity.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.14}>
                <RouteLine width={96} className="my-6" />
              </Reveal>

              <Reveal delay={0.18}>
                <p className="max-w-2xl text-base leading-7 text-z-muted sm:text-lg sm:leading-8">
                  Zeal is a trading enterprise focused on sourcing,
                  procurement, distribution and supply across diverse
                  categories. We connect customers and businesses with
                  dependable products, suitable sources and practical supply
                  solutions.
                </p>
              </Reveal>

              <Reveal delay={0.24}>
                <p className="mt-5 max-w-2xl text-base leading-7 text-z-muted sm:text-lg sm:leading-8">
                  Alongside trading, Zeal undertakes business facilitation and
                  commission-based agency services, helping connect customers,
                  suppliers, service providers and opportunities.
                </p>
              </Reveal>

              {/* Minimal information strip */}
              <Reveal delay={0.3}>
                <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 border-t border-z-border pt-5">
                  <div>
                    <p className="font-display text-lg font-bold text-z-ink">
                      India
                    </p>
                    <p className="text-[9px] uppercase tracking-[0.16em] text-z-muted">
                      Foundation
                    </p>
                  </div>

                  <div>
                    <p className="font-display text-lg font-bold text-z-ink">
                      Diverse
                    </p>
                    <p className="text-[9px] uppercase tracking-[0.16em] text-z-muted">
                      Categories
                    </p>
                  </div>

                  <div>
                    <p className="font-display text-lg font-bold text-z-ink">
                      Global
                    </p>
                    <p className="text-[9px] uppercase tracking-[0.16em] text-z-muted">
                      Outlook
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          02 — WHAT WE DO / BLACK
      ========================================================= */}
      <section className="relative overflow-hidden bg-z-black py-20 text-white sm:py-24 md:py-32">
        <div
          className="pointer-events-none absolute -right-48 top-0 h-[500px] w-[500px] rounded-full opacity-[0.07]"
          style={{
            background:
              "radial-gradient(circle, #C89B18 0%, transparent 70%)",
          }}
        />

        <div className="container-z relative">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="text-[9px] font-medium uppercase tracking-[0.28em] text-z-gold">
                  What We Do
                </p>
              </Reveal>

              <Reveal delay={0.08}>
                <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
                  From
                  <br />
                  requirement
                  <br />
                  <span className="text-gradient-gold">to opportunity.</span>
                </h2>
              </Reveal>
            </div>

            <div className="lg:col-span-7 lg:pt-8">
              <Reveal delay={0.14}>
                <p className="max-w-2xl text-lg leading-8 text-white/55 sm:text-xl sm:leading-9">
                  Zeal works across sourcing, trading, supply and business
                  facilitation. The common thread is simple: understand what
                  is needed, identify the right possibilities and coordinate
                  the path forward.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-10 border-t border-white/10">
                  {[
                    ["01", "Trading & Supply"],
                    ["02", "Procurement & Sourcing"],
                    ["03", "Distribution"],
                    ["04", "Business Facilitation"],
                  ].map(([number, title], index) => (
                    <motion.div
                      key={title}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="group flex items-center justify-between border-b border-white/10 py-5"
                    >
                      <div className="flex items-center gap-5">
                        <span className="text-[9px] tracking-[0.2em] text-z-gold/60">
                          {number}
                        </span>

                        <span className="font-display text-base font-semibold text-white transition-colors duration-300 group-hover:text-z-gold-light sm:text-lg">
                          {title}
                        </span>
                      </div>

                      <ArrowUpRight
                        size={17}
                        className="text-white/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-z-gold"
                      />
                    </motion.div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          03 — APPROACH / CREAM
      ========================================================= */}
      <section className="relative overflow-hidden bg-z-cream py-16 sm:py-20 md:py-28">
        <div className="container-z">
          <div className="mb-12 max-w-2xl sm:mb-16">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-z-gold" />
                <p className="eyebrow">Our Approach</p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-z-ink sm:text-5xl">
                Simple thinking.
                <br />
                <span className="text-gradient-gold">
                  Practical execution.
                </span>
              </h2>
            </Reveal>
          </div>

          {/* Horizontal process */}
          <div className="relative">
            <div className="absolute left-0 right-0 top-6 hidden h-px bg-z-border md:block" />

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-5 md:gap-4">
              {[
                ["01", "Understand", "Start with the actual requirement."],
                ["02", "Source", "Identify suitable products and sources."],
                ["03", "Evaluate", "Consider suitability, quality and value."],
                ["04", "Coordinate", "Manage the relevant business process."],
                ["05", "Deliver", "Support the requirement through completion."],
              ].map(([number, title, text], index) => (
                <Reveal key={number} delay={index * 0.07}>
                  <div className="relative">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-z-gold bg-z-cream font-display text-xs font-bold text-z-gold">
                      {number}
                    </div>

                    <div className="mt-5">
                      <h3 className="font-display text-lg font-bold text-z-ink">
                        {title}
                      </h3>

                      <p className="mt-2 max-w-[190px] text-sm leading-6 text-z-muted">
                        {text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          04 — VALUES / WHITE
      ========================================================= */}
      <section className="bg-z-white py-16 sm:py-20 md:py-28">
        <div className="container-z">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Intro */}
            <div className="lg:col-span-4">
              <Reveal>
                <p className="eyebrow">What Guides Us</p>
              </Reveal>

              <Reveal delay={0.08}>
                <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-z-ink sm:text-5xl">
                  Principles that
                  <span className="text-gradient-gold"> matter.</span>
                </h2>
              </Reveal>

              <Reveal delay={0.14}>
                <p className="mt-5 max-w-sm text-sm leading-6 text-z-muted">
                  Our values influence how we evaluate opportunities,
                  communicate with customers and build business relationships.
                </p>
              </Reveal>
            </div>

            {/* Values */}
            <div className="lg:col-span-8">
              <div className="divide-y divide-z-border border-y border-z-border">
                {values.map((value, index) => {
                  const Icon = value.icon;

                  return (
                    <Reveal key={value.title} delay={index * 0.07}>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.25 }}
                        className="group flex gap-5 py-6 sm:gap-7 sm:py-7"
                      >
                        <div className="flex w-8 shrink-0 flex-col items-center">
                          <span className="text-[8px] font-bold tracking-[0.18em] text-z-gold">
                            {value.number}
                          </span>

                          <div className="mt-4 flex h-9 w-9 items-center justify-center rounded-full bg-z-gold/10 text-z-gold transition-all duration-300 group-hover:bg-z-gold group-hover:text-z-black">
                            <Icon size={16} />
                          </div>
                        </div>

                        <div className="flex-1">
                          <div className="flex flex-col justify-between gap-2 sm:flex-row">
                            <h3 className="font-display text-xl font-bold text-z-ink">
                              {value.title}
                            </h3>

                            <ArrowUpRight
                              size={17}
                              className="hidden text-z-border transition-colors duration-300 group-hover:text-z-gold sm:block"
                            />
                          </div>

                          <p className="mt-2 max-w-xl text-sm leading-6 text-z-muted">
                            {value.text}
                          </p>
                        </div>
                      </motion.div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          05 — VISION / BLACK
      ========================================================= */}
      <section className="relative overflow-hidden bg-z-black py-24 text-white sm:py-28 md:py-36">
        <div className="container-z relative">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Reveal>
                <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-z-gold">
                  Our Vision
                </p>
              </Reveal>

              <Reveal delay={0.08}>
                <h2 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[0.95] tracking-[-0.03em] sm:text-6xl md:text-8xl">
                  Moving business
                  <br />
                  <span className="text-gradient-gold">forward.</span>
                </h2>
              </Reveal>
            </div>

            <div className="lg:col-span-4">
              <Reveal delay={0.18}>
                <p className="text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
                  Our vision is to build Zeal into a trusted and diversified
                  business platform known for reliable trading, smart sourcing,
                  efficient supply and meaningful business opportunities.
                </p>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="mt-8 flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-z-gold" />

                  <span className="text-[9px] uppercase tracking-[0.25em] text-z-gold/70">
                    Direction · Trust · Growth
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Decorative oversized letter */}
        <span className="pointer-events-none absolute -bottom-20 -right-4 font-display text-[18rem] font-black leading-none text-white/[0.025] sm:text-[24rem]">
          Z
        </span>
      </section>

      {/* =========================================================
          06 — CTA / CREAM
      ========================================================= */}
      <section className="bg-z-cream py-12 sm:py-16">
        <div className="container-z">
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-display text-xl font-bold text-z-ink sm:text-2xl">
                  Have a requirement?
                </p>

                <p className="mt-1 text-sm text-z-muted">
                  Let's explore what Zeal can do for you.
                </p>
              </div>

              <Link
                href="/contact"
                className="group inline-flex w-fit items-center gap-3 rounded-full bg-z-black px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                Start a Conversation

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-z-gold text-z-black transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowUpRight size={14} />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

