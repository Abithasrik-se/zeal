"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 md:pt-20 pb-20 md:pb-28">
      <div
        className="pointer-events-none absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(circle, #C89B18 0%, transparent 70%)" }}
      />
      <div className="container-z grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-6"
          >
            Zeal — Trading · Supply · Business Services
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[1.08] tracking-tight text-z-ink"
          >
            Trading, Supply &amp; Business
            <br className="hidden sm:block" /> Solutions for a{" "}
            <span className="text-gradient-gold">Connected World.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base md:text-lg text-z-muted max-w-xl leading-relaxed"
          >
            Zeal is a diversified trading and business services enterprise focused
            on sourcing, procurement, distribution and reliable supply across
            India, the United Kingdom and international markets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/trading-supply"
              className="gold-glow inline-flex items-center gap-2 bg-z-black text-white font-semibold text-sm px-6 py-3.5 rounded-full hover:-translate-y-0.5 transition-transform"
            >
              Explore Our Business
              <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-z-ink/20 text-z-ink font-semibold text-sm px-6 py-3.5 rounded-full hover:border-z-gold hover:text-z-gold transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-z-gold" />
            <p className="eyebrow tracking-[0.3em]">Direction · Trust · Growth</p>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
          >
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(232,200,90,0.16) 0%, rgba(250,250,247,0) 70%)",
              }}
            />
            <motion.div
              className="absolute inset-6 rounded-full border border-z-gold/25"
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-14 rounded-full border border-dashed border-z-gold/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            />
            <Image
              src="/images/zeal-mark.png"
              alt="Zeal compass emblem — direction, trust, growth"
              fill
              priority
              className="object-contain p-14 drop-shadow-[0_10px_40px_rgba(200,155,24,0.25)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
