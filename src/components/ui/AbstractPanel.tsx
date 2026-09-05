"use client";

import Image from "next/image";
import { motion } from "framer-motion";


export default function AbstractPanel({
  index = 0,
  className = "",
  showMark = true,
  markScale = 1,
}: {
  index?: number;
  className?: string;
  showMark?: boolean;
  markScale?: number;
}) {
  const angle = 35 + (index % 5) * 27;

  return (
    <div className={`relative overflow-hidden bg-z-black ${className}`}>
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(${angle}deg, #0A0A0A 0%, #171717 42%, #0A0A0A 100%)`,
        }}
      />
      <div
        className="pointer-events-none absolute -top-1/3 -right-1/4 w-2/3 aspect-square rounded-full opacity-25"
        style={{ background: "radial-gradient(circle, #E8C85A 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-1/4 -left-1/4 w-1/2 aspect-square rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #C89B18 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #C89B18 0, #C89B18 1px, transparent 1px, transparent 24px)",
        }}
      />
      {showMark && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <motion.div
            className="absolute rounded-full border border-z-gold/20"
            style={{ width: `${55 * markScale}%`, aspectRatio: "1 / 1" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute rounded-full border border-dashed border-z-gold/15"
            style={{ width: `${75 * markScale}%`, aspectRatio: "1 / 1" }}
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
          <Image
            src="/images/zeal-mark.png"
            alt=""
            aria-hidden="true"
            width={200}
            height={200}
            className="relative object-contain opacity-90 drop-shadow-[0_0_24px_rgba(200,155,24,0.35)]"
            style={{ width: `${30 * markScale}%`, height: "auto" }}
          />
        </motion.div>
      )}
    </div>
  );
}