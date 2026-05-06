"use client";

import React from "react";
import { motion } from "framer-motion";
import { useMode } from "@/context/ModeContext";
import { FadeIn } from "./JackComponents";

export const OSNavbar = () => {
  const { mode, toggleMode } = useMode();

  return (
    <nav className="fixed top-0 inset-x-0 z-[100] flex justify-between items-center px-6 md:px-12 py-8 pointer-events-none">
      {/* Editorial Name (Replacement for branding) */}
      <FadeIn delay={0.1} y={-10} className="pointer-events-auto">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="mono text-[10px] uppercase tracking-[0.5em] text-white font-medium">SYED_MUKHEETH</span>
        </div>
      </FadeIn>

      {/* Nav Links - More Integrated */}
      <FadeIn delay={0.2} y={-10} className="pointer-events-auto hidden lg:flex items-center gap-12">
        {["About", "Projects", "Systems", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="mono text-[9px] uppercase tracking-[0.5em] text-white/30 hover:text-white transition-all duration-300 relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </FadeIn>

      {/* Mode Switcher */}
      <div className="flex items-center gap-8 pointer-events-auto">
        <FadeIn delay={0.4} y={-10}>
          <button 
            onClick={toggleMode}
            className="flex items-center gap-3 px-4 py-2 rounded-full glass border border-white/5 hover:border-white/10 transition-colors group"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="mono text-[9px] uppercase tracking-[0.4em] text-white/60 group-hover:text-white transition-colors">
              Mode__{mode}
            </span>
          </button>
        </FadeIn>
      </div>
    </nav>
  );
};
