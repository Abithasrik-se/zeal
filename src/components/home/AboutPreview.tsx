"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Target, Users, Globe2, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import RouteLine from "@/components/ui/RouteLine";

const points = [
  { icon: ShieldCheck, title: "Reliability", text: "Dependable products and service you can count on." },
  { icon: Target, title: "Smart Sourcing", text: "The right products from the right sources, at the right price." },
  { icon: Users, title: "Customer Focus", text: "Every requirement handled with care and attention." },
  { icon: Globe2, title: "International Perspective", text: "Supporting opportunities across markets." },
];

export default function AboutPreview() {
  return (
    <section className="py-20 md:py-28 bg-z-white">
      <div className="container-z grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
        <Reveal className="lg:col-span-5 relative">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop"
                alt="International business professionals shaking hands after a sourcing discussion"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-z-black/20 to-transparent" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -right-6 sm:-right-10 w-32 h-32 sm:w-40 sm:h-40 rounded-xl overflow-hidden border-4 border-z-white shadow-xl"
            >
              <Image
                src="/images/zeal-mark.png"
                alt=""
                fill
                className="object-contain bg-z-black p-6"
              />
            </motion.div>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow mb-3">Who We Are</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-z-ink">About Zeal</h2>
          </Reveal>
          <Reveal delay={0.14}>
            <RouteLine width={96} className="my-5" />
          </Reveal>
          <Reveal delay={0.18}>
            <p className="text-z-muted text-base md:text-lg leading-relaxed max-w-xl">
              Zeal is a trading enterprise focused on sourcing, procurement,
              distribution and supply of products across various categories. We aim
              to provide customers and businesses with dependable products,
              competitive pricing and efficient service — alongside business
              facilitation and commission-based agency services.
            </p>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={0.1 + i * 0.06}>
                <div className="group rounded-xl border border-z-border p-5 hover:border-z-gold/50 transition-colors bg-z-cream/40">
                  <p.icon className="text-z-gold mb-3 transition-transform group-hover:-translate-y-0.5" size={22} />
                  <p className="font-semibold text-z-ink">{p.title}</p>
                  <p className="text-sm text-z-muted mt-1 leading-relaxed">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <Link
              href="/about"
              className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-z-ink hover:text-z-gold transition-colors"
            >
              More about Zeal <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
