"use client";

import React from "react";
import { motion } from "framer-motion";
import { useMode } from "@/context/ModeContext";
import { FadeIn } from "./JackComponents";

export const OSNavbar = () => {
  const { mode, toggleMode } = useMode();

  return (
    <nav className="fixed top-0 inset-x-0 z-[100] flex justify-between items-center px-6 md:px-10 py-6 pointer-events-none">
      {/* OS Branding */}
      <FadeIn delay={0.1} y={-10} className="pointer-events-auto">
        <div className="flex flex-col">
          <span className="mono text-[10px] uppercase tracking-[0.5em] text-white font-bold">SYSMUK//OS</span>
          <span className="mono text-[8px] uppercase tracking-[0.3em] text-white/30">Infrastructure_Platform</span>
        </div>
      </FadeIn>

      {/* Nav Links */}
      <FadeIn delay={0.2} y={-10} className="pointer-events-auto absolute left-1/2 -translate-x-1/2 hidden lg:flex glass px-8 py-2.5 rounded-full gap-10">
        {["About", "Projects", "Systems", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="mono text-[9px] uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </FadeIn>

      {/* Mode Switcher & Status */}
      <div className="flex items-center gap-8 pointer-events-auto">
        <FadeIn delay={0.3} y={-10} className="hidden md:flex flex-col items-end">
           <span className="mono text-[8px] uppercase tracking-[0.3em] text-green-500/80">Status: Online</span>
           <span className="mono text-[8px] uppercase tracking-[0.3em] text-white/20">Build: 2.4.1</span>
        </FadeIn>

        <FadeIn delay={0.4} y={-10}>
          <button 
            onClick={toggleMode}
            className="flex flex-col items-end group"
          >
            <div className="flex items-center gap-2 mb-1">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="mono text-[9px] uppercase tracking-[0.4em] text-white group-hover:text-accent transition-colors">Mode: {mode}</span>
            </div>
            <div className="h-[1px] w-full bg-white/10 overflow-hidden">
               <motion.div 
                animate={{ x: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="h-full w-1/2 bg-accent/40"
               />
            </div>
          </button>
        </FadeIn>
      </div>
    </nav>
  );
};
