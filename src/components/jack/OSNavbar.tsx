"use client";

import React from "react";
import { motion } from "framer-motion";
import { useMode } from "@/context/ModeContext";
import { FadeIn } from "./JackComponents";

export const OSNavbar = () => {
  const { mode, toggleMode } = useMode();

  return (
    <nav className="fixed top-0 inset-x-0 z-[100] flex justify-between items-center px-6 md:px-12 py-6 pointer-events-none">
      {/* Background Mask for better visibility on all sections */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent h-32 -z-10 pointer-events-none" />

      {/* Editorial Name */}
      <FadeIn delay={0.1} y={-10} className="pointer-events-auto">
        <div className="flex items-center gap-4">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/10 shadow-lg">
            <img src="/images/avatar.png" alt="SM" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="mono text-[10px] uppercase tracking-[0.5em] text-white font-bold drop-shadow-md">Syed Mukheeth</span>
            </div>
            <span className="mono text-[6px] tracking-[0.3em] text-white/30 uppercase mt-0.5">Systems Engineer</span>
          </div>
        </div>
      </FadeIn>

      {/* Nav Links - More Visible */}
      <FadeIn delay={0.2} y={-10} className="pointer-events-auto hidden lg:flex items-center gap-10 glass px-8 py-3 rounded-full border border-white/5 shadow-2xl">
        {[
          { name: "About", href: "#about" },
          { name: "Projects", href: "#projects" },
          { name: "Contact", href: "#contact" }
        ].map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="mono text-[10px] uppercase tracking-[0.5em] text-white/50 hover:text-white transition-all duration-300 relative group"
          >
            {item.name}
            <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-accent transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </FadeIn>

      {/* Mode Switcher */}
      <div className="flex items-center gap-8 pointer-events-auto">
        <FadeIn delay={0.4} y={-10}>
          <button 
            onClick={toggleMode}
            className="flex items-center gap-3 px-5 py-2.5 rounded-full glass border border-white/10 hover:border-accent/40 transition-all duration-500 group shadow-lg"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(255,77,0,0.8)]" />
            <span className="mono text-[9px] uppercase tracking-[0.4em] text-white/80 group-hover:text-white transition-colors">
              {mode}
            </span>
          </button>
        </FadeIn>
      </div>
    </nav>
  );
};
