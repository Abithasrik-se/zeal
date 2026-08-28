"use client";

import { motion } from "framer-motion";

export default function RouteLine({
  className = "",
  width = 220,
}: {
  className?: string;
  width?: number;
}) {
  return (
    <svg
      width={width}
      height="12"
      viewBox={`0 0 ${width} 12`}
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <motion.line
        x1="0"
        y1="6"
        x2={width}
        y2="6"
        stroke="#C89B18"
        strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
      />
      <motion.circle
        cx={width}
        cy="6"
        r="3"
        fill="#C89B18"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9, duration: 0.4 }}
      />
    </svg>
  );
}
