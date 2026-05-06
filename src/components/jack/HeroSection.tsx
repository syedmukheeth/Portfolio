"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useMode } from "@/context/ModeContext";
import { FadeIn } from "./JackComponents";
import { cn } from "@/lib/utils";
import { OSNavbar } from "./OSNavbar";
import { SystemHUD } from "./SystemHUD";
import { TerminalHUD } from "./TerminalHUD";
import { BootSequence } from "./BootSequence";

export const HeroSection = () => {
  const { mode, isBooted, isTransitioning } = useMode();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax transforms
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
    const x = ((clientX - left) / width) * 2 - 1;
    const y = ((clientY - top) / height) * 2 - 1;
    setMousePos({ x, y });
  };

  return (
    <div className="relative">
      <BootSequence />
      
      <AnimatePresence>
        {isBooted && (
          <motion.section
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black"
          >
            <OSNavbar />
            <SystemHUD />
            <TerminalHUD />

            {/* BACKGROUND LAYERS */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <div className="absolute inset-0 dot-grid opacity-20" />
              <div className="absolute inset-0 mesh-grid opacity-10" />
              <div className="scanline" />
              
              {/* Radial Lighting */}
              <motion.div 
                animate={{ 
                  x: mousePos.x * 50, 
                  y: mousePos.y * 50 
                }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,77,0,0.05)_0%,transparent_50%)]" 
              />
            </div>

            {/* THE ARCHITECTURAL HIERARCHY */}
            <div className="relative z-10 w-full max-w-[1440px] px-6 md:px-20 flex flex-col items-center">
              
              {/* Background Title: SYSTEMS ENGINEER */}
              <motion.div 
                style={{ y: y1, opacity }}
                className="absolute top-1/2 -translate-y-1/2 left-0 w-full flex flex-col items-center pointer-events-none"
              >
                <h2 className={cn(
                  "font-black uppercase tracking-[-0.08em] leading-[0.8] text-[clamp(4rem,20vw,24rem)] opacity-[0.03] select-none text-center transition-colors duration-1000",
                  mode === "machine" ? "text-accent opacity-[0.08]" : "text-white"
                )}>
                  SYSTEMS<br/>ENGINEER
                </h2>
              </motion.div>

              {/* Main Content Reveal */}
              <div className="relative z-20 flex flex-col items-center justify-between min-h-[85vh] py-12">
                
                {/* 1. TOP SECTION: THE NAME */}
                <FadeIn delay={0.2} y={20} className="w-full text-center">
                  <div className="flex flex-col items-center">
                     <span className="mono text-accent text-[9px] md:text-[10px] uppercase tracking-[0.6em] mb-3">
                       Establishing Connectivity
                     </span>
                     <h1 className="hero-heading font-black uppercase tracking-[-0.05em] leading-none text-[clamp(2.5rem,10vw,7.5rem)] text-white">
                       {mode === "human" ? "Syed Mukheeth" : "ARCHITECT_0x0"}
                     </h1>
                  </div>
                </FadeIn>

                {/* 2. MIDDLE SECTION: THE PORTRAIT */}
                <FadeIn delay={0.4} y={0} duration={1.5} className="relative py-8">
                  <motion.div
                    animate={{ 
                      x: mousePos.x * 15, 
                      y: mousePos.y * 15,
                      rotateX: -mousePos.y * 8,
                      rotateY: mousePos.x * 8
                    }}
                    transition={{ type: "spring", stiffness: 50, damping: 20 }}
                    className="relative group"
                    style={{ perspective: 1200 }}
                  >
                    {/* HUD Rings */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -inset-12 border border-white/[0.03] rounded-full animate-[spin_40s_linear_infinite] pointer-events-none" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -inset-24 border border-dashed border-white/[0.02] rounded-full animate-[spin_60s_linear_infinite_reverse] pointer-events-none" />
                    
                    <div className="relative w-[280px] sm:w-[350px] md:w-[420px] aspect-[4/5] overflow-hidden rounded-3xl glass p-1.5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] border border-white/10">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                      <img 
                        src="/images/portrait.jpg" 
                        alt="Syed Mukheeth" 
                        className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                      />
                      
                      {/* Portrait HUD */}
                      <div className="absolute inset-6 z-20 flex flex-col justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500">
                         <div className="flex justify-between items-start mono text-[8px] tracking-widest text-accent">
                            <span>SCAN_ACTIVE</span>
                            <span>{Math.random().toString(16).slice(2, 6).toUpperCase()}</span>
                         </div>
                         <div className="flex flex-col gap-2">
                            <div className="flex justify-between mono text-[7px] text-white/40">
                               <span>SYNC_STATUS</span>
                               <span className="text-accent">CONNECTED</span>
                            </div>
                            <div className="w-full h-[1px] bg-white/10 overflow-hidden">
                               <motion.div 
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                                className="w-1/3 h-full bg-accent" 
                               />
                            </div>
                         </div>
                      </div>
                    </div>

                    {/* Background Large Text (Behind Portrait) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-screen flex justify-center pointer-events-none">
                      <h2 className={cn(
                        "font-black uppercase tracking-[-0.08em] leading-[0.75] text-[clamp(4rem,22vw,22rem)] opacity-[0.02] transition-all duration-1000",
                        mode === "machine" ? "text-accent opacity-[0.05] scale-105" : "text-white"
                      )}>
                        SYSTEMS<br/>ENGINEER
                      </h2>
                    </div>
                  </motion.div>
                </FadeIn>

                {/* 3. BOTTOM SECTION: DESCRIPTION & CALL TO ACTION */}
                <div className="w-full flex flex-col items-center gap-8">
                  <FadeIn delay={0.6} y={20}>
                    <p className="max-w-[500px] text-center text-white/40 text-[10px] md:text-xs font-light leading-relaxed uppercase tracking-[0.3em]">
                      Architecting high-performance <span className="text-white">infrastructure</span> <br/>
                      and scalable <span className="text-white">distributed systems</span>.
                    </p>
                  </FadeIn>

                  <FadeIn delay={0.8} y={20}>
                    <div className="flex flex-wrap justify-center gap-4">
                       <a href="#projects" className="px-10 py-3.5 glass rounded-full mono text-[9px] uppercase tracking-[0.3em] hover:bg-white/10 transition-all duration-300">
                         View_Systems
                       </a>
                       <a href="#contact" className="px-10 py-3.5 bg-accent text-white rounded-full mono text-[9px] uppercase tracking-[0.3em] hover:bg-accent/80 transition-all duration-300 shadow-[0_15px_30px_-5px_rgba(255,77,0,0.3)]">
                         Execute_Contact
                       </a>
                    </div>
                  </FadeIn>
                </div>

              </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div 
              style={{ opacity }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
               <span className="mono text-[8px] uppercase tracking-[0.4em] text-white/20">Scroll_to_Initialize</span>
               <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
            </motion.div>

          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};
