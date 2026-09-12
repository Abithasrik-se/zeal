
"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import RouteLine from "@/components/ui/RouteLine";

const nodes = [
  { label: "India", x: 50, y: 58 },
  { label: "International Markets", x: 22, y: 25 },
  { label: "Global Opportunities", x: 80, y: 28 },
];

export default function InternationalSection() {
  return (
    <section className="relative overflow-hidden bg-z-black py-20 text-white sm:py-24 md:py-28">
      {/* Background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #E8C85A 0, transparent 2px), radial-gradient(circle at 80% 60%, #E8C85A 0, transparent 2px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -left-40 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle, #C89B18 0%, transparent 70%)",
        }}
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full opacity-[0.05]"
        style={{
          background:
            "radial-gradient(circle, #E8C85A 0%, transparent 70%)",
        }}
      />

      <div className="container-z relative grid grid-cols-1 items-center gap-12 sm:gap-14 lg:grid-cols-12 lg:gap-16">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-6">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-z-gold" />
              <p className="eyebrow">Global Orientation</p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] sm:text-5xl">
              Connecting India.
              <br />
              <span className="text-gradient-gold">
                Reaching International Markets.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <RouteLine width={96} className="my-6" />
          </Reveal>

          <Reveal delay={0.18}>
            <p className="max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
              Zeal is rooted in India with an international outlook —
              connecting products, businesses and opportunities across
              domestic and global markets.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/45 sm:text-base">
              Through sourcing, trading, supply and business facilitation,
              we aim to build reliable connections between customers,
              suppliers and markets wherever opportunities arise.
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "India",
                "International Markets",
                "Global Sourcing",
                "Business Connections",
              ].map((market) => (
                <span
                  key={market}
                  className="rounded-full border border-white/15 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.14em] text-white/65 transition-colors duration-300 hover:border-z-gold/50 hover:text-z-gold-light"
                >
                  {market}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative lg:col-span-6">
          <Reveal delay={0.15}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)]">
              {/* Grid */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.12]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(232,200,90,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(232,200,90,0.15) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Center glow */}
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle, #E8C85A 0%, transparent 70%)",
                }}
              />

              {/* SVG NETWORK */}
              <svg
                viewBox="0 0 100 75"
                className="relative h-full w-full"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Connection lines */}
                <motion.line
                  x1={nodes[0].x}
                  y1={nodes[0].y}
                  x2={nodes[1].x}
                  y2={nodes[1].y}
                  stroke="#C89B18"
                  strokeWidth="0.3"
                  strokeDasharray="1.5 1.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, delay: 0.3 }}
                />

                <motion.line
                  x1={nodes[0].x}
                  y1={nodes[0].y}
                  x2={nodes[2].x}
                  y2={nodes[2].y}
                  stroke="#C89B18"
                  strokeWidth="0.3"
                  strokeDasharray="1.5 1.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, delay: 0.5 }}
                />

                <motion.line
                  x1={nodes[1].x}
                  y1={nodes[1].y}
                  x2={nodes[2].x}
                  y2={nodes[2].y}
                  stroke="#C89B18"
                  strokeWidth="0.3"
                  strokeDasharray="1.5 1.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, delay: 0.7 }}
                />

                {/* India node */}
                <g>
                  <motion.circle
                    cx={nodes[0].x}
                    cy={nodes[0].y}
                    r="4"
                    fill="none"
                    stroke="#E8C85A"
                    strokeWidth="0.25"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{
                      scale: [0.6, 1.5],
                      opacity: [0.55, 0],
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />

                  <motion.circle
                    cx={nodes[0].x}
                    cy={nodes[0].y}
                    r="2"
                    fill="#E8C85A"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  />

                  <circle
                    cx={nodes[0].x}
                    cy={nodes[0].y}
                    r="0.65"
                    fill="#FFF4B0"
                  />
                </g>

                {/* International Markets node */}
                <g>
                  <motion.circle
                    cx={nodes[1].x}
                    cy={nodes[1].y}
                    r="4"
                    fill="none"
                    stroke="#E8C85A"
                    strokeWidth="0.25"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{
                      scale: [0.6, 1.5],
                      opacity: [0.55, 0],
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: 0.25,
                    }}
                  />

                  <motion.circle
                    cx={nodes[1].x}
                    cy={nodes[1].y}
                    r="1.6"
                    fill="#E8C85A"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  />

                  <circle
                    cx={nodes[1].x}
                    cy={nodes[1].y}
                    r="0.65"
                    fill="#FFF4B0"
                  />
                </g>

                {/* Global Opportunities node */}
                <g>
                  <motion.circle
                    cx={nodes[2].x}
                    cy={nodes[2].y}
                    r="4"
                    fill="none"
                    stroke="#E8C85A"
                    strokeWidth="0.25"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{
                      scale: [0.6, 1.5],
                      opacity: [0.55, 0],
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: 0.5,
                    }}
                  />

                  <motion.circle
                    cx={nodes[2].x}
                    cy={nodes[2].y}
                    r="1.6"
                    fill="#E8C85A"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  />

                  <circle
                    cx={nodes[2].x}
                    cy={nodes[2].y}
                    r="0.65"
                    fill="#FFF4B0"
                  />
                </g>
              </svg>

              {/* Labels */}
              <span
                className="absolute -translate-x-1/2 translate-y-2 whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.12em] text-z-gold-light sm:text-[10px] md:text-xs"
                style={{
                  left: `${nodes[0].x}%`,
                  top: `${nodes[0].y}%`,
                }}
              >
                {nodes[0].label}
              </span>

              <span
                className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.12em] text-z-gold-light sm:text-[10px] md:text-xs"
                style={{
                  left: `${nodes[1].x}%`,
                  top: `${nodes[1].y}%`,
                }}
              >
                {nodes[1].label}
              </span>

              <span
                className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.12em] text-z-gold-light sm:text-[10px] md:text-xs"
                style={{
                  left: `${nodes[2].x}%`,
                  top: `${nodes[2].y}%`,
                }}
              >
                {nodes[2].label}
              </span>

              {/* Center label */}
              <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 text-center sm:block">
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                  Zeal
                </p>

                <div className="mx-auto mt-2 h-px w-8 bg-z-gold/50" />

                <p className="mt-2 text-[8px] uppercase tracking-[0.2em] text-white/25">
                  Connected Markets
                </p>
              </div>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-white/30">
              Illustrative representation of Zeal&apos;s India-focused and
              international business orientation.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

