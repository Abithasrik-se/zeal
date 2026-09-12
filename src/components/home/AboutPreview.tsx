
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
} from "lucide-react";

import Reveal from "@/components/ui/Reveal";
import RouteLine from "@/components/ui/RouteLine";

const points = [
  {
    icon: ShieldCheck,
    title: "Reliability",
    text: "Dependable products and service you can count on.",
  },
  {
    icon: Target,
    title: "Smart Sourcing",
    text: "The right products from the right sources, at the right price.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    text: "Every requirement handled with care and attention.",
  },
  {
    icon: Globe2,
    title: "International Perspective",
    text: "Supporting opportunities across markets.",
  },
];

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-z-white py-20 md:py-28">
      {/* Soft golden background glow */}
      <div
        className="pointer-events-none absolute -left-40 top-10 h-[500px] w-[500px] rounded-full opacity-[0.055]"
        style={{
          background:
            "radial-gradient(circle, #E8C85A 0%, transparent 70%)",
        }}
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full opacity-[0.04]"
        style={{
          background:
            "radial-gradient(circle, #C89B18 0%, transparent 70%)",
        }}
      />

      <div className="container-z relative grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
        {/* =====================================================
            LEFT — IMAGE + ZEAL BRANDING
        ====================================================== */}
        <Reveal className="relative lg:col-span-5">
          <div className="relative mx-auto max-w-lg">
            {/* Main image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-z-border bg-z-cream shadow-[0_25px_70px_-30px_rgba(0,0,0,0.25)]"
            >
              <Image
                src="/images/home-about-preview.jpg"
                alt="International business professionals discussing sourcing and supply opportunities"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 90vw, 40vw"
              />

              {/* Bright image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              {/* Bottom image information */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                <p className="eyebrow text-[10px] text-white/80">
                  Direction · Trust · Growth
                </p>

                <p className="mt-2 max-w-xs text-sm leading-relaxed text-white">
                  Connecting products, businesses and opportunities across
                  markets.
                </p>
              </div>
            </motion.div>

            {/* =================================================
                FLOATING ZEAL BRAND CARD
            ================================================== */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="absolute -bottom-9 -right-5 flex h-36 w-36 items-center justify-center rounded-2xl border-[5px] border-white bg-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.22)] sm:-right-10 sm:h-44 sm:w-44"
            >
              {/* Golden glow behind logo */}
              <div
                className="absolute inset-4 rounded-full opacity-30 blur-xl"
                style={{
                  background:
                    "radial-gradient(circle, #E8C85A 0%, transparent 70%)",
                }}
              />

              {/* Logo */}
              <div className="relative h-[72%] w-[72%]">
                <Image
                  src="/images/zeal-mark.png"
                  alt="Zeal emblem representing direction, trust and growth"
                  fill
                  className="object-contain drop-shadow-[0_8px_15px_rgba(200,155,24,0.25)]"
                  sizes="(max-width: 640px) 104px, 127px"
                />
              </div>

              {/* Decorative ring */}
              <motion.div
                className="absolute inset-2 rounded-full border border-z-gold/20"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>

            {/* Small decorative gold line */}
            <div className="absolute -left-5 top-14 hidden h-24 w-px bg-gradient-to-b from-transparent via-z-gold to-transparent lg:block" />
          </div>
        </Reveal>

        {/* =====================================================
            RIGHT — ABOUT CONTENT
        ====================================================== */}
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow mb-3">Who We Are</p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="font-display text-4xl font-bold leading-[1.08] text-z-ink md:text-5xl">
              About{" "}
              <span className="text-gradient-gold">
                Zeal
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <RouteLine width={96} className="my-5" />
          </Reveal>

          <Reveal delay={0.18}>
            <p className="max-w-2xl text-base leading-relaxed text-z-muted md:text-lg">
              Zeal is a trading enterprise focused on sourcing, procurement,
              distribution and supply of products across various categories.
              We connect customers and businesses with dependable products,
              competitive pricing and efficient service.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-z-muted">
              Alongside trading and supply, we support business facilitation
              and commission-based agency services — helping create practical
              connections between businesses, products and markets.
            </p>
          </Reveal>

          {/* Values heading */}
          <Reveal delay={0.28}>
            <div className="mt-10 flex items-center gap-4">
              <p className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.2em] text-z-ink">
                What we stand for
              </p>

              <span className="h-px flex-1 bg-z-border" />
            </div>
          </Reveal>

          {/* =================================================
              VALUE CARDS — EQUAL HEIGHT
          ================================================== */}
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {points.map((point, index) => {
              const Icon = point.icon;

              return (
                <Reveal
                  key={point.title}
                  delay={0.3 + index * 0.06}
                  className="h-full"
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="group relative flex h-full min-h-[170px] flex-col overflow-hidden rounded-xl border border-z-border bg-white p-5 shadow-[0_8px_30px_-25px_rgba(0,0,0,0.25)] transition-all duration-300 hover:border-z-gold/50 hover:shadow-[0_18px_40px_-25px_rgba(0,0,0,0.2)]"
                  >
                    {/* Hover glow */}
                    <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-z-gold opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-15" />

                    {/* Icon */}
                    <div className="relative mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-z-gold/10">
                      <Icon
                        size={21}
                        className="text-z-gold transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    {/* Content */}
                    <div className="relative flex flex-1 flex-col">
                      <p className="font-semibold text-z-ink">
                        {point.title}
                      </p>

                      <p className="mt-2 text-sm leading-relaxed text-z-muted">
                        {point.text}
                      </p>
                    </div>

                    {/* Bottom gold accent */}
                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-z-gold transition-all duration-300 group-hover:w-full" />
                  </motion.div>
                </Reveal>
              );
            })}
          </div>

          {/* CTA */}
          <Reveal delay={0.55}>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-full bg-z-black px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-z-ink"
              >
                More about Zeal

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-z-gold" />

                <span className="text-xs font-medium uppercase tracking-[0.18em] text-z-muted">
                  Direction · Trust · Growth
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

