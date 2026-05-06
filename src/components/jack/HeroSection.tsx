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
              <div className="relative flex flex-col items-center gap-12 mt-[10vh] md:mt-0">
                
                {/* PORTRAIT HUD CONTAINER */}
                <FadeIn delay={0.2} y={50} duration={1.2}>
                  <motion.div
                    animate={{ 
                      x: mousePos.x * 20, 
                      y: mousePos.y * 20,
                      rotateX: -mousePos.y * 10,
                      rotateY: mousePos.x * 10
                    }}
                    transition={{ type: "spring", stiffness: 75, damping: 15 }}
                    className="relative group cursor-none"
                    style={{ perspective: 1000 }}
                  >
                    {/* HUD Layers */}
                    <div className="absolute -inset-10 border border-white/5 rounded-full animate-[spin_20s_linear_infinite] opacity-20 group-hover:opacity-40 transition-opacity" />
                    <div className="absolute -inset-20 border border-dashed border-white/5 rounded-full animate-[spin_30s_linear_infinite_reverse] opacity-10" />
                    
                    <div className="relative w-[280px] sm:w-[380px] md:w-[450px] aspect-[4/5] overflow-hidden rounded-2xl glass p-1">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                      <img 
                        src="/images/portrait.jpg" 
                        alt="Syed Mukheeth" 
                        className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                      />
                      
                      {/* Internal HUD Elements */}
                      <div className="absolute inset-4 z-20 flex flex-col justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500">
                         <div className="flex justify-between items-start mono text-[8px] tracking-widest text-accent">
                            <span>SCANNING_ACTIVE</span>
                            <span>ID: 0X92A1</span>
                         </div>
                         <div className="flex flex-col gap-1 mono text-[8px] tracking-widest text-white/40">
                            <div className="flex justify-between">
                               <span>LATENCY</span>
                               <span className="text-white">OPTIMAL</span>
                            </div>
                            <div className="w-full h-[1px] bg-white/10">
                               <motion.div 
                                animate={{ width: ["0%", "100%", "60%"] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="h-full bg-accent/60" 
                               />
                            </div>
                         </div>
                      </div>
                    </div>

                    {/* Machine Mode Floating Data */}
                    {mode === "machine" && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute -right-20 top-0 w-40 mono text-[8px] text-accent/60 space-y-2 hidden lg:block"
                      >
                         <p className="border-b border-accent/20 pb-1">ARCHITECTURE_TREE</p>
                         <p>├─ KAFKA_BUS</p>
                         <p>├─ REDIS_SYNC</p>
                         <p>└─ EDGE_WORKERS</p>
                      </motion.div>
                    )}
                  </motion.div>
                </FadeIn>

                {/* TEXT CONTENT Overlay */}
                <div className="flex flex-col items-center text-center gap-6 relative z-20">
                  <FadeIn delay={0.4} y={20}>
                    <div className="flex flex-col items-center">
                       <span className="mono text-accent text-[10px] md:text-xs uppercase tracking-[0.6em] mb-4">
                         Establishing Connectivity
                       </span>
                       <h1 className="hero-heading font-black uppercase tracking-[-0.05em] leading-[0.9] text-[clamp(3rem,8vw,10rem)]">
                         {mode === "human" ? "Syed Mukheeth" : "ARCHITECT_0x0"}
                       </h1>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.6} y={20}>
                    <p className="max-w-[600px] text-white/50 text-sm md:text-lg lg:text-xl font-light leading-relaxed uppercase tracking-widest">
                      Building scalable <span className="text-white font-medium">infrastructure</span>, 
                      AI-powered <span className="text-white font-medium">tooling</span>, 
                      and realtime <span className="text-white font-medium">digital systems</span>.
                    </p>
                  </FadeIn>

                  <FadeIn delay={0.8} y={30}>
                    <div className="flex gap-6 mt-4">
                       <a href="#projects" className="px-8 py-3 glass rounded-full mono text-[10px] uppercase tracking-[0.3em] hover:bg-white/10 transition-all duration-300">
                         View_Systems
                       </a>
                       <a href="#contact" className="px-8 py-3 bg-accent text-white rounded-full mono text-[10px] uppercase tracking-[0.3em] hover:bg-accent/80 transition-all duration-300 shadow-[0_0_20px_rgba(255,77,0,0.3)]">
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
