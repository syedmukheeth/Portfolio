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
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
              >
                {link}
              </a>
            ))}
          </div>
        </FadeIn>
        
        {/* Parallel-inspired System Status in Corner */}
        <FadeIn delay={0.2} y={-20}>
          <div className="hidden md:flex flex-col items-end font-mono text-[10px] uppercase tracking-widest text-accent">
            <span>System: Online</span>
            <span className="opacity-40">Systems_Engineer: v9.2.4</span>
          </div>
        </FadeIn>
      </nav>

      {/* HERO HEADING (BACKGROUND TEXT) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 px-4 md:px-10">
        <div className="w-full flex justify-center">
          <FadeIn delay={0.15} y={0} duration={1}>
            <h1 className="hero-heading font-black uppercase tracking-tighter leading-none whitespace-nowrap text-[12vw] sm:text-[14vw] md:text-[15vw] lg:text-[16vw] opacity-70 select-none text-center">
              Syed Mukheeth
            </h1>
          </FadeIn>
        </div>
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
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 pointer-events-none" />
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
        
        {/* Floating Stickers */}
        <motion.div 
          initial={{ opacity: 0, scale: 0, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 12 }}
          transition={{ delay: 1.2, type: "spring" }}
          className="absolute right-[10%] top-[20%] z-20 pointer-events-none hidden xl:block"
        >
          <img src="/images/wow.png" alt="Wow" className="w-32 drop-shadow-2xl" />
        </motion.div>
      </div>

      {/* BOTTOM BAR */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 relative z-50 gap-6">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[280px] md:max-w-[400px] text-center md:text-left text-[clamp(0.75rem,1.4vw,1.2rem)] opacity-80">
            Engineering scalable systems, distributed mesh networks, and intelligent infrastructure
          </p>
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
