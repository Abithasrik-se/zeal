"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Compass } from "lucide-react";

import { mainNav } from "@/content/site";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-0 z-40 overflow-hidden bg-z-black lg:hidden"
        >
          {/* Subtle gold glow */}
          <div
            className="pointer-events-none absolute -right-32 top-10 h-[280px] w-[280px] rounded-full opacity-[0.07] sm:h-[340px] sm:w-[340px]"
            style={{
              background:
                "radial-gradient(circle, #C89B18 0%, transparent 70%)",
            }}
          />

          <div
            className="pointer-events-none absolute -left-32 bottom-0 h-[260px] w-[260px] rounded-full opacity-[0.04]"
            style={{
              background:
                "radial-gradient(circle, #E8C85A 0%, transparent 70%)",
            }}
          />

          {/* Subtle grid */}
          <div className="pointer-events-none absolute inset-0 bg-grid-gold opacity-[0.035]" />

          <motion.nav
            aria-label="Mobile navigation"
            initial="closed"
            animate="open"
            exit="closed"
            className="relative flex h-full min-h-screen flex-col px-6 pb-6 pt-24 sm:px-8 sm:pb-8 sm:pt-28"
          >
            {/* Navigation label */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="mb-6 flex items-center gap-3 sm:mb-7"
            >
              <span className="h-px w-6 bg-z-gold sm:w-8" />

              <p className="text-[8px] font-medium uppercase tracking-[0.25em] text-z-gold sm:text-[9px]">
                Navigation
              </p>
            </motion.div>

            {/* Navigation links */}
            <div className="flex flex-col">
              {mainNav.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{
                    delay: 0.05 * index,
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="group relative flex items-center justify-between border-b border-white/[0.08] py-3 sm:py-3.5"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className="w-5 text-[8px] font-medium tracking-[0.16em] text-white/25 transition-colors duration-300 group-hover:text-z-gold sm:w-6 sm:text-[9px]">
                        0{index + 1}
                      </span>

                      <span className="font-display text-[1.25rem] font-semibold tracking-[-0.01em] text-white transition-all duration-300 group-hover:translate-x-1 group-hover:text-z-gold-light sm:text-[1.5rem]">
                        {item.label}
                      </span>
                    </div>

                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/35 transition-all duration-300 group-hover:border-z-gold group-hover:bg-z-gold group-hover:text-z-black sm:h-8 sm:w-8">
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>

                    <span className="absolute bottom-0 left-0 h-px w-0 bg-z-gold transition-all duration-500 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{
                delay: 0.3,
                duration: 0.4,
              }}
              className="mt-auto pt-6 sm:pt-8"
            >
              <div className="mb-4 flex items-center gap-2.5">
                <Compass size={14} className="text-z-gold" />

                <p className="text-[8px] font-medium uppercase tracking-[0.2em] text-white/30 sm:text-[9px]">
                  Direction · Trust · Growth
                </p>
              </div>

              <Link
                href="/contact"
                onClick={onClose}
                className="group flex w-full items-center justify-between rounded-full border border-z-gold/60 bg-z-gold px-4 py-3 text-xs font-semibold text-z-black transition-all duration-300 hover:bg-z-gold-light sm:px-5 sm:py-3.5 sm:text-sm"
              >
                <span>Start a Conversation</span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-z-black/10 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowUpRight size={14} />
                </span>
              </Link>

              <p className="mt-3 text-center text-[8px] uppercase tracking-[0.16em] text-white/20">
                Zeal · Business & Supply Solutions
              </p>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

