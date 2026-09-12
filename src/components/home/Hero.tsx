
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  const compassTicks = [0, 45, 90, 135, 180, 225, 270, 315];

  return (
    <section className="relative overflow-hidden pt-10 sm:pt-14 md:pt-20 pb-16 sm:pb-20 md:pb-28">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-[300px] w-[300px] sm:h-[420px] sm:w-[420px] rounded-full opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle, #C89B18 0%, transparent 70%)",
        }}
      />

      <div
        className="pointer-events-none absolute top-0 right-0 h-[360px] w-[360px] sm:h-[520px] sm:w-[520px] translate-x-1/3 -translate-y-1/3 rounded-full opacity-[0.05]"
        style={{
          background:
            "radial-gradient(circle, #0A0A0A 0%, transparent 70%)",
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-grid-gold opacity-[0.25] sm:opacity-[0.35] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />

      <div className="container-z relative grid grid-cols-1 items-center gap-12 sm:gap-14 lg:grid-cols-12 lg:gap-8">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-5 sm:mb-6"
          >
            Zeal — Trading · Supply · Business Services
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-extrabold text-[2.35rem] leading-[1.08] tracking-tight text-z-ink sm:text-5xl md:text-6xl"
          >
            Trading, Supply &amp; Business
            <br className="hidden sm:block" /> Solutions for a{" "}
            <span className="text-gradient-gold">
              Connected World.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-z-muted sm:mt-6 sm:text-lg"
          >
            Zeal is a diversified trading and business services enterprise
            focused on sourcing, procurement, distribution and reliable supply
            across India and international markets.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
          >
            <Link
              href="/trading-supply"
              className="gold-glow inline-flex w-full items-center justify-center gap-2 rounded-full bg-z-black px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              Explore Our Business
              <ArrowUpRight size={16} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-z-ink/20 px-6 py-3.5 text-sm font-semibold text-z-ink transition-colors hover:border-z-gold hover:text-z-gold sm:w-auto"
            >
              Contact Us
            </Link>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex items-center gap-3 sm:mt-14"
          >
            <span className="h-px w-8 bg-z-gold sm:w-10" />

            <p className="eyebrow tracking-[0.2em] sm:tracking-[0.3em]">
              Direction · Trust · Growth
            </p>
          </motion.div>
        </div>

        {/* RIGHT COMPASS */}
        <div className="lg:col-span-5 relative flex min-w-0 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: "easeOut",
            }}
            className="
              relative
              aspect-square
              w-[min(76vw,18rem)]
              sm:w-[min(72vw,22rem)]
              md:w-[min(62vw,26rem)]
              lg:w-full
              lg:max-w-[26rem]
            "
          >
            {/* Ambient golden glow */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                scale: [1, 1.04, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                background:
                  "radial-gradient(circle, rgba(232,200,90,0.22) 0%, rgba(250,250,247,0) 68%)",
              }}
            />

            {/* OUTER COMPASS */}
            <motion.div
              className="absolute inset-[3%] rounded-full border border-z-gold/25"
              animate={{ rotate: 360 }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* N */}
              <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[8px] font-bold tracking-[0.2em] text-z-gold sm:-top-3 sm:text-[10px]">
                N
              </span>

              {/* E */}
              <span className="absolute top-1/2 -right-2.5 -translate-y-1/2 text-[8px] font-bold tracking-[0.2em] text-z-gold sm:-right-3 sm:text-[10px]">
                E
              </span>

              {/* S */}
              <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 text-[8px] font-bold tracking-[0.2em] text-z-gold sm:-bottom-3 sm:text-[10px]">
                S
              </span>

              {/* W */}
              <span className="absolute top-1/2 -left-2.5 -translate-y-1/2 text-[8px] font-bold tracking-[0.2em] text-z-gold sm:-left-3 sm:text-[10px]">
                W
              </span>

              {/* Responsive compass ticks */}
              {compassTicks.map((rotation) => (
                <span
                  key={rotation}
                  className="absolute left-1/2 top-1/2 h-[4%] w-px origin-bottom bg-z-gold/50"
                  style={{
                    transform: `rotate(${rotation}deg) translateY(-${48}%)`,
                  }}
                />
              ))}
            </motion.div>

            {/* ROTATING COMPASS ARROWS */}
            <motion.div
              className="absolute inset-[9%] rounded-full"
              animate={{ rotate: -360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* North */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2">
                <div
                  className="
                    h-0 w-0
                    border-l-[5px]
                    border-r-[5px]
                    border-b-[16px]
                    border-l-transparent
                    border-r-transparent
                    border-b-z-gold
                    sm:border-l-[7px]
                    sm:border-r-[7px]
                    sm:border-b-[22px]
                  "
                  style={{
                    filter:
                      "drop-shadow(0 0 6px rgba(232,200,90,0.55))",
                  }}
                />
              </div>

              {/* South */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rotate-180">
                <div className="h-0 w-0 border-l-[5px] border-r-[5px] border-b-[16px] border-l-transparent border-r-transparent border-b-z-gold/40 sm:border-l-[7px] sm:border-r-[7px] sm:border-b-[22px]" />
              </div>

              {/* East */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90">
                <div className="h-0 w-0 border-l-[4px] border-r-[4px] border-b-[13px] border-l-transparent border-r-transparent border-b-z-gold/50 sm:border-l-[5px] sm:border-r-[5px] sm:border-b-[16px]" />
              </div>

              {/* West */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90">
                <div className="h-0 w-0 border-l-[4px] border-r-[4px] border-b-[13px] border-l-transparent border-r-transparent border-b-z-gold/50 sm:border-l-[5px] sm:border-r-[5px] sm:border-b-[16px]" />
              </div>
            </motion.div>

            {/* INNER DASHED RING */}
            <motion.div
              className="absolute inset-[25%] rounded-full border border-dashed border-z-gold/30"
              animate={{ rotate: 360 }}
              transition={{
                duration: 65,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <span className="absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-z-gold sm:h-2 sm:w-2" />

              <span className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-z-gold/50 sm:h-2 sm:w-2" />

              <span className="absolute top-1/2 -left-1 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-z-gold/50 sm:h-2 sm:w-2" />

              <span className="absolute top-1/2 -right-1 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-z-gold/50 sm:h-2 sm:w-2" />
            </motion.div>

            {/* CENTRAL LOGO */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                filter: [
                  "drop-shadow(0 10px 30px rgba(200,155,24,0.20))",
                  "drop-shadow(0 10px 48px rgba(200,155,24,0.42))",
                  "drop-shadow(0 10px 30px rgba(200,155,24,0.20))",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="relative h-[58%] w-[58%]">
                <Image
                  src="/images/zeal-mark.png"
                  alt="Zeal compass emblem — direction, trust, growth"
                  fill
                  priority
                  sizes="(max-width: 640px) 170px, (max-width: 768px) 220px, (max-width: 1024px) 260px, 416px"
                  className="object-contain"
                />
              </div>
            </motion.div>

            {/* CENTER POINT */}
            <motion.div
              className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-z-gold sm:h-2 sm:w-2"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

