"use client";

import { motion } from "framer-motion";
import { whatsappHref } from "@/content/site";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Zeal on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.4, duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-[0_8px_30px_-6px_rgba(0,0,0,0.35)]"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <svg viewBox="0 0 32 32" width="26" height="26" fill="white" className="relative">
        <path d="M16.004 2.667c-7.363 0-13.333 5.97-13.333 13.333 0 2.353.615 4.56 1.69 6.474L2.667 29.333l7.05-1.848a13.26 13.26 0 0 0 6.287 1.6h.006c7.362 0 13.333-5.97 13.333-13.333S23.366 2.667 16.004 2.667zm7.782 18.91c-.33.93-1.907 1.78-2.633 1.86-.673.073-1.523.104-2.457-.155-.567-.156-1.294-.4-2.23-.782-3.923-1.693-6.487-5.633-6.687-5.897-.196-.264-1.6-2.13-1.6-4.062 0-1.933 1.017-2.884 1.377-3.28.36-.396.784-.495 1.045-.495.26 0 .522.003.75.014.24.011.564-.09.882.673.33.783 1.122 2.703 1.222 2.9.098.196.163.427.033.69-.13.263-.196.428-.392.66-.196.23-.412.516-.588.694-.196.196-.4.408-.172.802.229.395 1.017 1.677 2.183 2.716 1.5 1.336 2.766 1.75 3.16 1.947.393.196.622.164.85-.1.229-.263.984-1.147 1.246-1.541.262-.395.523-.33.882-.198.36.132 2.283 1.077 2.674 1.273.392.196.653.295.75.46.098.163.098.947-.23 1.877z" />
      </svg>
    </motion.a>
  );
}
