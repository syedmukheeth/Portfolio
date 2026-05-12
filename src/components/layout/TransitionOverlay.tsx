"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMode } from "@/context/ModeContext";
import { useEffect, useState } from "react";

export default function TransitionOverlay() {
  const { isTransitioning, mode } = useMode();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[10000] pointer-events-none flex items-center justify-center bg-black"
        >
          {/* Glitch Scanline */}
          <motion.div 
            initial={{ top: "-10%" }}
            animate={{ top: "110%" }}
            transition={{ duration: 0.8, ease: "linear" }}
            className="absolute left-0 right-0 h-[20vh] bg-accent/20 blur-3xl z-20"
          />
          
          <div className="relative z-10 flex flex-col items-center gap-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-[10px] uppercase tracking-[0.5em] text-accent font-mono"
            >
              {mode === "human" ? "Synchronizing Mesh Core" : "Restoring Visual Interface"}
            </motion.div>
            
            <div className="w-48 h-px bg-white/10 relative overflow-hidden">
              <motion.div 
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 bg-accent"
              />
            </div>
            
            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                  className="w-1 h-1 bg-accent rounded-full"
                />
              ))}
            </div>
          </div>

          {/* Grid lines */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute inset-0 dot-grid" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
