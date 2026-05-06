"use client";

import React from "react";
import { motion } from "framer-motion";
import { useMode } from "@/context/ModeContext";
import { FadeIn, Magnet, ContactButton } from "./JackComponents";
import { cn } from "@/lib/utils";

export const HeroSection = () => {
  const { mode } = useMode();

  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0C0C0C]">
      {/* NAVBAR */}
      <nav className="w-full flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 relative z-50">
        <FadeIn delay={0} y={-20}>
          <div className="flex gap-4 md:gap-8 lg:gap-12">
            {["About", "Projects", "Stack", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="group relative text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.2rem] hover:text-white transition-colors duration-200"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </FadeIn>
        
        {/* Parallel-inspired System Status in Corner */}
        <FadeIn delay={0.2} y={-20}>
          <div className="hidden md:flex flex-col items-end font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
              <span className="font-bold">System: Online</span>
            </div>
            <span className="opacity-40">Systems_Engineer: v9.2.4</span>
          </div>
        </FadeIn>
      </nav>

      {/* HERO HEADING (REFINED FOR CLARITY & RESPONSIVENESS) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 px-6 md:px-12">
        <FadeIn delay={0.15} y={0} duration={1.2}>
          <h1 className="hero-heading font-black uppercase tracking-[-0.05em] leading-none whitespace-nowrap text-[clamp(2rem,10.5vw,13rem)] opacity-100 select-none text-center">
            Syed Mukheeth
          </h1>
        </FadeIn>
      </div>

      {/* HERO PORTRAIT */}
      <div className="relative flex-1 flex flex-col justify-end items-center z-10 pb-[5vh]">
        <FadeIn delay={0.6} y={50} duration={1.2}>
          <Magnet padding={200} strength={2}>
            <motion.div
              className="w-[280px] sm:w-[340px] md:w-[440px] lg:w-[500px] relative aspect-[3/4] sm:aspect-[4/5]"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
               {/* Cinematic Glow */}
               <div className="absolute inset-0 bg-gradient-to-tr from-accent/40 to-transparent rounded-[30px] sm:rounded-[50px] blur-3xl opacity-30 -z-10" />
               
               <div className="w-full h-full rounded-[30px] sm:rounded-[50px] overflow-hidden border-2 border-white/10 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.8)]">
                 <img
                    src="/images/portrait.jpg"
                    alt="Syed Mukheeth Portrait"
                    className="w-full h-full object-cover object-top"
                 />
                 
                 {/* VIGNETTE OVERLAY */}
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none" />
               </div>
               
               {/* Overlay Terminal details in Machine mode */}
               {mode === "machine" && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                     <div className="absolute inset-4 border border-accent/40 rounded-[30px] sm:rounded-[40px] animate-pulse" />
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8px] font-mono uppercase tracking-[0.4em] text-accent whitespace-nowrap bg-[#0C0C0C] px-4 py-1 border border-accent/20 rounded-full">
                        Subject: System_Architect_0x00
                     </div>
                  </div>
               )}
            </motion.div>
          </Magnet>
        </FadeIn>
      </div>

      {/* BOTTOM BAR */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 relative z-50 gap-6">
        <FadeIn delay={0.35} y={20}>
          <div className="space-y-2">
            <p className="text-accent font-mono text-[10px] uppercase tracking-[0.4em] mb-2 text-center md:text-left">Human Centric // Machine Optimized</p>
            <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[320px] md:max-w-[450px] text-center md:text-left text-[clamp(0.85rem,1.4vw,1.3rem)] opacity-90">
              Engineering <span className="text-white font-bold italic">scalable systems</span>, distributed mesh networks, and intelligent infrastructure
            </p>
          </div>
        </FadeIn>
        
        <ContactButton delay={0.5} />
      </div>

      {/* Background Gradients/Effects */}
      <div className={cn(
        "absolute inset-0 pointer-events-none transition-opacity duration-1000",
        mode === "machine" ? "opacity-100" : "opacity-0"
      )}>
        <div className="absolute inset-0 mesh-grid opacity-20" />
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-accent/10 to-transparent" />
      </div>
    </section>
  );
};
