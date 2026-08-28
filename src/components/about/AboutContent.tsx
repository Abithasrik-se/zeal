"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Target, Users, Globe2, Compass } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import RouteLine from "@/components/ui/RouteLine";
import SectionHeading from "@/components/ui/SectionHeading";

const values = [
  { icon: ShieldCheck, title: "Reliability", text: "Dependable products and service you can count on, every time." },
  { icon: Target, title: "Smart Sourcing", text: "The right products from the right sources, at the right price." },
  { icon: Users, title: "Customer Focus", text: "Every requirement handled with care and attention." },
  { icon: Globe2, title: "International Perspective", text: "Supporting opportunities across markets." },
];

export default function AboutContent() {
  return (
    <>
      <section className="py-16 md:py-24 bg-z-white">
        <div className="container-z grid lg:grid-cols-12 gap-14 items-center">
          <Reveal className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop"
                alt="Business partners meeting at a table to discuss a trading agreement"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="absolute -bottom-8 -right-6 w-28 h-28 sm:w-36 sm:h-36 rounded-xl bg-z-black border-4 border-z-white shadow-xl flex items-center justify-center"
            >
              <Compass className="text-z-gold" size={40} />
            </motion.div>
          </Reveal>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <Reveal><p className="eyebrow mb-3">Who We Are</p></Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-display font-extrabold text-4xl md:text-5xl text-z-ink">About Zeal</h1>
            </Reveal>
            <Reveal delay={0.14}><RouteLine width={96} className="my-5" /></Reveal>
            <Reveal delay={0.18}>
              <p className="text-z-muted text-base md:text-lg leading-relaxed">
                Zeal is a trading enterprise focused on sourcing, procurement,
                distribution and supply of products across various categories. We
                aim to provide customers and businesses with dependable products,
                competitive pricing and efficient service.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-4 text-z-muted text-base md:text-lg leading-relaxed">
                Alongside our trading activities, Zeal also undertakes business
                facilitation and commission-based agency services, connecting
                customers with relevant service providers and business
                opportunities.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-z-cream">
        <div className="container-z max-w-2xl mb-14">
          <SectionHeading eyebrow="What We Do" title="Our Business Approach" description="Zeal's approach is built on understanding each requirement first, then acting on it with reliability and transparency — whether that means sourcing a product, coordinating supply, or connecting a customer with the right opportunity." />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-z-white">
        <div className="container-z">
          <div className="max-w-2xl mb-12">
            <Reveal><p className="eyebrow mb-3">What Guides Us</p></Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display font-bold text-4xl text-z-ink">Our Values</h2>
            </Reveal>
            <Reveal delay={0.14}><RouteLine width={96} className="my-5" /></Reveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={0.08 * i}>
                <div className="h-full rounded-xl border border-z-border p-6 hover:border-z-gold/40 hover:-translate-y-1 transition-all duration-300">
                  <v.icon className="text-z-gold mb-4" size={24} />
                  <p className="font-semibold text-z-ink">{v.title}</p>
                  <p className="mt-2 text-sm text-z-muted leading-relaxed">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28 bg-z-black text-white overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=1600&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-z-black/70" />
        <div className="container-z text-center relative">
          <Reveal><p className="eyebrow mb-4">Our Vision</p></Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display font-bold text-3xl md:text-5xl max-w-3xl mx-auto leading-tight">
              Moving Business <span className="text-gradient-gold">Forward</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-white/60 max-w-xl mx-auto leading-relaxed">
              Our vision is to build Zeal into a trusted and diversified business
              platform known for reliable trading, smart sourcing, efficient supply
              and meaningful business opportunities.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="eyebrow mt-8 tracking-[0.3em]">Direction · Trust · Growth</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
