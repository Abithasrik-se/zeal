"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { mainNav } from "@/content/site";
import { ArrowUpRight } from "lucide-react";

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
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-40 lg:hidden bg-z-black/95 backdrop-blur-sm"
        >
          <motion.nav
            aria-label="Mobile"
            className="flex flex-col h-full justify-center px-8 gap-2"
            initial="closed"
            animate="open"
            exit="closed"
          >
            {mainNav.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ delay: 0.05 * i, duration: 0.4 }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between py-3.5 border-b border-white/10 text-white text-2xl font-display font-semibold"
                >
                  {item.label}
                  <ArrowUpRight size={20} className="text-z-gold" />
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="mt-8"
            >
              <Link
                href="/contact"
                onClick={onClose}
                className="inline-flex items-center gap-2 bg-z-gold text-z-black font-semibold px-6 py-3 rounded-full"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
