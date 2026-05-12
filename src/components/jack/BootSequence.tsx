"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMode } from "@/context/ModeContext";

const BOOT_LOGS = [
  "establishing connection to edge runtime...",
  "initializing distributed cache [redis_01]...",
  "verifying system integrity...",
  "loading infrastructure modules...",
  "syncing human-machine interface...",
  "establishing websocket channels...",
  "system operational. revealing architect interface."
];

export const BootSequence = () => {
  const { isBooted, setIsBooted } = useMode();
  const [currentLog, setCurrentLog] = useState(0);

  useEffect(() => {
    if (isBooted) return;

    // Small delay to allow main thread to settle after hydration
    const startTimeout = setTimeout(() => {
      const timer = setInterval(() => {
        setCurrentLog((prev) => {
          if (prev >= BOOT_LOGS.length - 1) {
            clearInterval(timer);
            setTimeout(() => setIsBooted(true), 200);
            return prev;
          }
          return prev + 1;
        });
      }, 100);
      
      return () => clearInterval(timer);
    }, 200);

    return () => clearTimeout(startTimeout);
  }, [isBooted, setIsBooted]);

  return (
    <AnimatePresence>
      {!isBooted && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          role="status"
          aria-live="polite"
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-6 mono"
        >
          <div className="w-full max-w-md space-y-2">
            {BOOT_LOGS.slice(0, currentLog + 1).map((log, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`text-xs uppercase tracking-widest ${
                  i === currentLog ? "text-accent" : "text-white/40"
                }`}
              >
                <span className="mr-4 opacity-30">[{i.toString().padStart(2, "0")}]</span>
                {log}
                {i === currentLog && <motion.span animate={{ opacity: [0, 1] }} transition={{ repeat: Infinity, duration: 0.5 }} className="ml-1">_</motion.span>}
              </motion.div>
            ))}
          </div>

          <div className="absolute bottom-10 left-10 text-[10px] text-white/20 uppercase tracking-[0.4em]">
            SyMuk // OS v2.4.1
          </div>
          
          <div className="absolute bottom-10 right-10 flex gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }}
                className="w-1 h-1 bg-accent rounded-full shadow-[0_0_8px_rgba(255,77,0,0.5)]"
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
