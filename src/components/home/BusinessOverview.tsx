"use client";

import Link from "next/link";
import { Boxes, PackageSearch, Truck, Handshake, Percent, ArrowUpRight } from "lucide-react";
import { services } from "@/content/services";
import Reveal from "@/components/ui/Reveal";
import RouteLine from "@/components/ui/RouteLine";

const icons = { Boxes, PackageSearch, Truck, Handshake, Percent };

export default function BusinessOverview() {
  const featured = services.find((s) => s.featured)!;
  const rest = services.filter((s) => !s.featured);

  return (
    <section className="py-20 md:py-28 bg-z-cream">
      <div className="container-z">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <Reveal><p className="eyebrow mb-3">Our Core Business</p></Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-z-ink">What We Do</h2>
            </Reveal>
            <Reveal delay={0.14}><RouteLine width={96} className="my-5" /></Reveal>
            <Reveal delay={0.18}>
              <p className="text-z-muted text-base md:text-lg max-w-xl leading-relaxed">
                From sourcing to supply, Zeal helps businesses identify opportunities,
                connect with suitable sources and move products and services efficiently.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal className="md:row-span-2">
            <Link
              href={`/${featured.slug}`}
              className="group relative flex flex-col justify-between h-full min-h-[320px] rounded-2xl p-8 md:p-10 bg-z-black text-white overflow-hidden gold-glow"
            >
              <div
                className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 rounded-full opacity-20 transition-transform duration-700 group-hover:scale-110"
                style={{ background: "radial-gradient(circle, #C89B18 0%, transparent 70%)" }}
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-z-gold/15 text-z-gold">
                    <Boxes size={24} />
                  </span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-z-gold border border-z-gold/40 rounded-full px-3 py-1">
                    Principal Business
                  </span>
                </div>
                <h3 className="mt-8 font-display font-bold text-3xl md:text-4xl">{featured.name}</h3>
                <p className="mt-3 text-white/60 max-w-sm leading-relaxed">{featured.short}</p>
              </div>
              <div className="relative flex items-center gap-2 text-z-gold font-medium mt-8">
                <span className="h-px w-8 bg-z-gold transition-all duration-500 group-hover:w-12" />
                Trading is at the heart of Zeal
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </Link>
          </Reveal>

          {rest.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <Reveal key={s.slug} delay={0.08 * (i + 1)}>
                <Link
                  href={`/${s.slug}`}
                  className="group flex flex-col justify-between h-full min-h-[220px] rounded-2xl p-7 bg-z-white border border-z-border hover:border-z-gold/50 hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    <span className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-z-gold/10 text-z-gold transition-transform duration-300 group-hover:scale-110">
                      <Icon size={20} />
                    </span>
                    <h3 className="mt-5 font-display font-bold text-xl text-z-ink">{s.name}</h3>
                    <p className="mt-2 text-sm text-z-muted leading-relaxed">{s.short}</p>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-z-ink group-hover:text-z-gold transition-colors">
                    Learn more
                    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
