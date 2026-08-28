"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InitialLoader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("zeal-loaded");
    if (alreadyShown) return;
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("zeal-loaded", "1");
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-z-cream"
        >
          <div className="relative flex flex-col items-center gap-6">
            <div className="relative w-24 h-24 md:w-28 md:h-28">
              <motion.div
                className="absolute inset-0 rounded-full border"
                style={{ borderColor: "rgba(200,155,24,0.3)" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 6, ease: "linear", repeat: Infinity }}
              />
              <motion.svg
                className="absolute inset-0"
                viewBox="0 0 100 100"
                initial="hidden"
                animate="visible"
              >
                <motion.circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="none"
                  stroke="#C89B18"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeDasharray="0 1"
                  pathLength={1}
                  variants={{
                    hidden: { pathLength: 0, opacity: 0 },
                    visible: {
                      pathLength: 1,
                      opacity: 1,
                      transition: { duration: 1.3, ease: "easeInOut" },
                    },
                  }}
                />
              </motion.svg>
              <motion.img
                src="/images/zeal-mark.png"
                alt="Zeal"
                className="absolute inset-0 m-auto w-12 h-12 md:w-14 md:h-14 object-contain"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  filter: [
                    "drop-shadow(0 0 0px rgba(200,155,24,0))",
                    "drop-shadow(0 0 14px rgba(200,155,24,0.55))",
                    "drop-shadow(0 0 4px rgba(200,155,24,0.25))",
                  ],
                }}
                transition={{ duration: 1.1, ease: "easeOut" }}
              />
            </div>
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <span className="eyebrow tracking-[0.35em]">Direction</span>
              <span className="w-1 h-1 rounded-full bg-z-gold" />
              <span className="eyebrow tracking-[0.35em]">Trust</span>
              <span className="w-1 h-1 rounded-full bg-z-gold" />
              <span className="eyebrow tracking-[0.35em]">Growth</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
