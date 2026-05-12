"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useMode } from "@/context/ModeContext";
import { FadeIn } from "./JackComponents";
import { cn } from "@/lib/utils";
import { SystemHUD } from "./SystemHUD";
import Image from "next/image";

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
    const x = Math.max(-1.2, Math.min(1.2, ((clientX - left) / width) * 2 - 1));
    const y = Math.max(-1.2, Math.min(1.2, ((clientY - top) / height) * 2 - 1));
    setMousePos({ x, y });
  };

  return (
    <div className="relative">
      <motion.section
        id="hero"
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        initial={{ opacity: 0 }}
        animate={{ opacity: isBooted ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={cn(
          "relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black",
          !isBooted && "pointer-events-none" // Disable interaction during boot
        )}
      >

        {/* BACKGROUND LAYERS - Deferred until after boot to save main-thread work */}
        {isBooted && (
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
        )}

        {/* THE ARCHITECTURAL HIERARCHY */}
        <div className="relative z-10 w-full max-w-[1440px] px-6 md:px-20 flex flex-col items-center">
          
            {/* MAIN CONTENT: PORTRAIT & NAME */}
            <div className="relative z-20 flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-120px)] gap-12 lg:gap-24 py-24 lg:py-20 w-full">
              
              {/* PORTRAIT SECTION */}
              <div className="relative flex justify-center items-center py-4 order-1">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(255,77,0,0.05)_0%,transparent_70%)] pointer-events-none -z-10 blur-3xl animate-pulse" />
                
                <FadeIn delay={0.2} y={0} duration={1.5} className="relative">
                  <motion.div
                    animate={{ 
                      x: mousePos.x * 12, 
                      y: mousePos.y * 12,
                      rotateX: -mousePos.y * 8,
                      rotateY: mousePos.x * 8
                    }}
                    transition={{ type: "spring", stiffness: 50, damping: 25 }}
                    className="relative group preserve-3d"
                    style={{ 
                      perspective: 2000,
                      backfaceVisibility: "hidden"
                    }}
                  >
                    <div className="absolute -inset-8 border border-white/[0.03] rounded-[3rem] -z-10 group-hover:border-white/10 transition-colors duration-700" />
                    <div className="absolute -inset-16 border border-white/[0.01] rounded-[4rem] -z-20" />
                    
                    <div className="relative w-[240px] sm:w-[280px] md:w-[400px] lg:w-[500px] aspect-square overflow-hidden rounded-[3rem] glass p-1.5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.9)] border border-white/10">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
                      <Image 
                        src="https://res.cloudinary.com/dcqbcjrsp/image/upload/f_auto,q_auto,w_800/avatar_kyjo2q.png" 
                        alt="Syed Mukheeth" 
                        fill
                        priority
                        unoptimized
                        sizes="(max-width: 768px) 100vw, 500px"
                        className="object-cover object-center opacity-100 group-hover:scale-105 transition-all duration-700 z-0"
                      />
                          
                          {/* Dynamic HUD Layer */}
                          <div className="absolute inset-8 z-20 flex flex-col justify-between pointer-events-none opacity-100 transition-all duration-700">
                             <div className="flex justify-between items-start mono text-[7px] tracking-widest text-accent font-bold">
                                <span>PROFILE_01</span>
                                <span>ONLINE</span>
                             </div>
                             <div className="flex flex-col gap-3">
                                <div className="flex justify-between mono text-[7px] text-white/50">
                                   <span>SYSTEM_STATUS</span>
                                   <span className="text-accent animate-pulse">ACTIVE</span>
                                </div>
                                <div className="w-full h-[1px] bg-white/5 relative overflow-hidden">
                                   <motion.div 
                                    animate={{ x: ["-100%", "200%"] }}
                                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                                    className="w-1/4 h-full bg-accent/40" 
                                   />
                                </div>
                             </div>
                          </div>
                        </div>

                        {/* Depth Layer Text */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-30 w-[200%] flex justify-center pointer-events-none overflow-hidden opacity-[0.02]">
                          <h2 className="font-black uppercase tracking-[-0.1em] leading-[0.7] text-[15rem] text-white">
                            BIO<br/>METRIC
                          </h2>
                        </div>
                      </motion.div>
                    </FadeIn>
                  </div>

                  {/* IDENTITY SECTION */}
                  <div className="relative z-30 flex flex-col items-center lg:items-start text-center lg:text-left order-2 max-w-2xl">
                    <FadeIn delay={0.4} y={30} duration={1}>
                       <div className="flex flex-col gap-6 md:gap-8">
                          <div className="flex flex-col">
                            <motion.span 
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.8, delay: 0.6 }}
                              className="mono text-accent text-[11px] md:text-[12px] uppercase tracking-[0.4em] font-black mb-4 block"
                            >
                              Software Engineer
                            </motion.span>
                            <h1 className="font-black uppercase tracking-[-0.04em] leading-[0.85] text-[clamp(3.5rem,10vw,8.5rem)] text-white drop-shadow-2xl">
                              Syed<br/>
                              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">Mukheeth</span>
                            </h1>
                          </div>
                          
                          <div className="flex flex-col gap-6">
                            <motion.p 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 1, delay: 1 }}
                              className="mono text-[12px] md:text-[14px] lg:text-[16px] uppercase tracking-[0.4em] text-white/70 font-medium leading-relaxed max-w-md mx-auto lg:mx-0"
                            >
                              Focused on <span className="text-white font-black">Backend Architecture</span>, <br className="hidden lg:block" />
                              <span className="text-white font-black">Distributed Performance</span>, and <br className="hidden lg:block" />
                              building <span className="text-accent">Scalable Web Applications</span>.
                            </motion.p>
                          </div>
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
               <span className="mono text-[8px] uppercase tracking-[0.4em] text-white/50">Scroll to Explore</span>
               <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
            </motion.div>

      </motion.section>
    </div>
  );
};
