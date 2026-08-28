"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { whatsappHref } from "@/content/site";
import RouteLine from "@/components/ui/RouteLine";

export default function CTA() {
  return (
    <section className="relative py-20 md:py-28 bg-z-black text-white overflow-hidden">
      <motion.div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-20"
        style={{ background: "radial-gradient(ellipse, #C89B18 0%, transparent 70%)" }}
        animate={{ opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <div className="container-z text-center relative">
        <p className="eyebrow mb-4 justify-center flex">Get In Touch</p>
        <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight max-w-3xl mx-auto">
          Have a Requirement? <span className="text-gradient-gold">Let&apos;s Talk.</span>
        </h2>
        <div className="flex justify-center"><RouteLine width={110} className="my-6" /></div>
        <p className="text-white/60 max-w-xl mx-auto leading-relaxed">
          Tell us what you are looking for and our team can explore the right
          business, sourcing or supply opportunity with you.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="gold-glow inline-flex items-center gap-2 bg-z-gold text-z-black font-semibold text-sm px-7 py-3.5 rounded-full hover:-translate-y-0.5 transition-transform"
          >
            Contact Zeal <ArrowUpRight size={16} />
          </Link>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/25 text-white font-semibold text-sm px-7 py-3.5 rounded-full hover:border-z-gold hover:text-z-gold transition-colors"
          >
            <MessageCircle size={16} /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
