"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import RouteLine from "@/components/ui/RouteLine";

const nodes = [
  { label: "India", x: 62, y: 58 },
  { label: "United Kingdom", x: 22, y: 22 },
  { label: "Other Markets", x: 82, y: 30 },
];

export default function InternationalSection() {
  return (
    <section className="relative py-20 md:py-28 bg-z-black text-white overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #E8C85A 0, transparent 2px), radial-gradient(circle at 80% 60%, #E8C85A 0, transparent 2px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="container-z grid lg:grid-cols-12 gap-14 items-center relative">
        <div className="lg:col-span-6">
          <Reveal><p className="eyebrow mb-3">Global Orientation</p></Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight">
              Connecting Markets.
              <br /> Creating Opportunities.
            </h2>
          </Reveal>
          <Reveal delay={0.14}><RouteLine width={96} className="my-6" /></Reveal>
          <Reveal delay={0.18}>
            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-lg">
              Zeal is oriented toward business across India, the United Kingdom and
              other international markets — helping customers connect with the
              right products, sources and opportunities, wherever they are based.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap gap-3">
              {["India", "United Kingdom", "Other International Markets"].map((m) => (
                <span
                  key={m}
                  className="text-xs tracking-wide uppercase border border-white/15 rounded-full px-4 py-2 text-white/70"
                >
                  {m}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="relative w-full aspect-[4/3] rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
            <svg viewBox="0 0 100 75" className="w-full h-full">
              {nodes.map((a, i) =>
                nodes.slice(i + 1).map((b, j) => (
                  <motion.line
                    key={`${i}-${j}`}
                    x1={a.x}
                    y1={a.y}
                    x2={b.x}
                    y2={b.y}
                    stroke="#C89B18"
                    strokeWidth="0.3"
                    strokeDasharray="1.5 1.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.5 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.6, delay: 0.3 + (i + j) * 0.2 }}
                  />
                ))
              )}
              {nodes.map((n, i) => (
                <g key={n.label}>
                  <motion.circle
                    cx={n.x}
                    cy={n.y}
                    r="1.6"
                    fill="#E8C85A"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 * i, duration: 0.5 }}
                  />
                  <motion.circle
                    cx={n.x}
                    cy={n.y}
                    r="3.4"
                    fill="none"
                    stroke="#E8C85A"
                    strokeWidth="0.25"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: [0.6, 1.4], opacity: [0.6, 0] }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 * i, duration: 2, repeat: Infinity }}
                  />
                </g>
              ))}
            </svg>
            {nodes.map((n) => (
              <span
                key={n.label}
                className="absolute text-[10px] md:text-xs tracking-wide text-z-gold-light font-medium -translate-x-1/2 translate-y-2"
                style={{ left: `${n.x}%`, top: `${n.y}%` }}
              >
                {n.label}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs text-white/35 leading-relaxed">
            Illustrative representation of Zeal&apos;s international business
            orientation, not a claim of specific offices or operations.
          </p>
        </div>
      </div>
    </section>
  );
}
