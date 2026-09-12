
"use client";

import { motion } from "framer-motion";

import Reveal from "@/components/ui/Reveal";
import RouteLine from "@/components/ui/RouteLine";

const steps = [
  {
    n: "01",
    title: "Understand",
    text: "Understand the customer's requirement.",
  },
  {
    n: "02",
    title: "Source",
    text: "Identify suitable products, suppliers or opportunities.",
  },
  {
    n: "03",
    title: "Evaluate",
    text: "Assess suitability based on requirements.",
  },
  {
    n: "04",
    title: "Coordinate",
    text: "Coordinate the relevant business or supply process.",
  },
  {
    n: "05",
    title: "Deliver",
    text: "Support the completion of the requirement.",
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-z-black py-20 text-white sm:py-24 md:py-28">
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute -right-48 top-0 h-[450px] w-[450px] rounded-full opacity-[0.055] sm:h-[550px] sm:w-[550px]"
        style={{
          background:
            "radial-gradient(circle, #C89B18 0%, transparent 70%)",
        }}
      />

      <div
        className="pointer-events-none absolute -left-56 bottom-0 h-[400px] w-[400px] rounded-full opacity-[0.035]"
        style={{
          background:
            "radial-gradient(circle, #E8C85A 0%, transparent 70%)",
        }}
      />

      <div className="container-z relative">
        {/* Heading */}
        <div className="mb-12 max-w-2xl sm:mb-16 md:mb-20">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-z-gold" />
              <p className="eyebrow text-z-gold-light">How We Work</p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl">
              From Requirement
              <br className="hidden sm:block" />
              <span className="text-gradient-gold">
                {" "}
                to Reliable Supply
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <RouteLine width={96} className="my-5" />
          </Reveal>

          <Reveal delay={0.18}>
            <p className="max-w-xl text-sm leading-7 text-white/45 sm:text-base">
              A straightforward process designed to understand requirements,
              identify suitable opportunities and support them through to
              completion.
            </p>
          </Reveal>
        </div>

        {/* ================= DESKTOP / TABLET ================= */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Base timeline */}
            <div className="absolute left-[5%] right-[5%] top-6 h-px bg-white/10" />

            {/* Gold timeline */}
            <Reveal>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  delay: 0.15,
                }}
                className="absolute left-[5%] right-[5%] top-6 h-px origin-left bg-gradient-to-r from-z-gold/30 via-z-gold to-z-gold/30"
              />
            </Reveal>

            <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-5 md:gap-x-5 lg:gap-x-8">
              {steps.map((step, index) => (
                <Reveal
                  key={step.n}
                  delay={0.08 * index}
                  className="h-full"
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                    className="group relative h-full"
                  >
                    {/* Number */}
                    <div className="relative z-10">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-z-gold bg-z-black font-display text-sm font-bold text-z-gold shadow-[0_0_0_6px_#090909] transition-all duration-300 group-hover:bg-z-gold group-hover:text-z-black group-hover:shadow-[0_0_0_6px_#090909,0_0_25px_-5px_rgba(200,155,24,0.55)]">
                        {step.n}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="mt-6">
                      <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-z-gold/60">
                        Step {step.n}
                      </p>

                      <h3 className="mt-2 font-display text-lg font-bold text-white transition-colors duration-300 group-hover:text-z-gold-light sm:text-xl">
                        {step.title}
                      </h3>

                      <p className="mt-2 max-w-[210px] text-sm leading-6 text-white/40">
                        {step.text}
                      </p>
                    </div>

                    {/* Small indicator */}
                    <div className="mt-5 h-px w-5 bg-white/10 transition-all duration-300 group-hover:w-10 group-hover:bg-z-gold" />
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="relative md:hidden">
          {/* Vertical base line */}
          <div className="absolute bottom-6 left-6 top-6 w-px bg-white/10" />

          {/* Vertical gold line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 1.4,
              ease: "easeInOut",
            }}
            className="absolute bottom-6 left-6 top-6 w-px origin-top bg-gradient-to-b from-z-gold via-z-gold/60 to-z-gold/20"
          />

          <div className="space-y-10">
            {steps.map((step, index) => (
              <Reveal
                key={step.n}
                delay={0.08 * index}
              >
                <motion.div
                  whileTap={{ scale: 0.99 }}
                  className="group relative flex gap-6"
                >
                  {/* Number */}
                  <div className="relative z-10 shrink-0">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-z-gold bg-z-black font-display text-sm font-bold text-z-gold shadow-[0_0_0_5px_#090909] transition-all duration-300 group-hover:bg-z-gold group-hover:text-z-black">
                      {step.n}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2 pt-0.5">
                    <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-z-gold/60">
                      Step {step.n}
                    </p>

                    <h3 className="mt-2 font-display text-xl font-bold text-white transition-colors duration-300 group-hover:text-z-gold-light">
                      {step.title}
                    </h3>

                    <p className="mt-2 max-w-md text-sm leading-6 text-white/40">
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <Reveal delay={0.4}>
          <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-6 text-white/30 sm:text-sm">
              A clear process built around practical business outcomes.
            </p>

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-z-gold" />
              <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-z-gold/70">
                Direction · Trust · Growth
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

