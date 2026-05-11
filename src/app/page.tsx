"use client";

import React from "react";
import { HeroSection } from "@/components/jack/HeroSection";
import { MarqueeSection } from "@/components/jack/MarqueeSection";
import { AboutSection } from "@/components/jack/AboutSection";
import { ServicesSection } from "@/components/jack/ServicesSection";
import { ProjectsSection } from "@/components/jack/ProjectsSection";
import { useMode } from "@/context/ModeContext";
import { cn } from "@/lib/utils";

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/syedmukheeth" },
  { label: "LinkedIn", href: "https://linkedin.com/in/syedmukheeth" },
  { label: "X", href: "https://x.com/syed_mukheeth" },
  { label: "CV", href: "#" }
];

export default function Home() {
  const { mode } = useMode();

  return (
    <div className={cn(
      "min-h-screen bg-black selection:bg-accent selection:text-white transition-colors duration-1000",
      mode === "machine" ? "machine-theme" : ""
    )}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      
      {/* GLOBAL BACKGROUND NOISE/GRAIN */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.02] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* CINEMATIC FOOTER */}
      <footer id="contact" className="py-32 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <div>
                 <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
                    Let&apos;s build <br />
                    <span className="text-accent">together.</span>
                 </h2>
                 <p className="text-white/60 text-sm md:text-base max-w-md mb-12 uppercase tracking-[0.2em] leading-relaxed">
                    Open to exploring ambitious engineering challenges in distributed systems, backend infrastructure, and product-driven development. 🛠️ 🌐 ⚡
                 </p>
                 <div className="flex flex-col gap-2">
                   <span className="mono text-[10px] text-accent/60 uppercase tracking-widest">Drop a message</span>
                   <a 
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=syedmukheeth09@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl md:text-4xl font-medium text-white hover:text-accent transition-all duration-500 underline underline-offset-8 decoration-white/10 hover:decoration-accent"
                   >
                      syedmukheeth09@gmail.com
                   </a>
                 </div>
              </div>
              
              <div className="flex flex-col gap-6 md:items-end">
                 {[
                   { label: "GitHub", href: "https://github.com/syedmukheeth", emoji: "🐙" },
                   { label: "LinkedIn", href: "https://linkedin.com/in/syedmukheeth", emoji: "💼" },
                   { label: "X / Twitter", href: "https://x.com/syed_mukheeth", emoji: "🐦" },
                   { label: "Download CV", href: "#", emoji: "📄" }
                 ].map(link => (
                   <a 
                     key={link.label} 
                     href={link.href}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-xl uppercase tracking-[0.3em] text-white/40 hover:text-white transition-all flex items-center gap-6 group mono"
                   >
                     <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0">
                       {link.emoji}
                     </span>
                     <span className="w-8 h-px bg-white/10 group-hover:bg-accent group-hover:w-16 transition-all duration-500" />
                     {link.label}
                   </a>
                 ))}
              </div>
           </div>
           
           <div className="mt-40 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-8 items-center">
              <div className="mono text-[9px] uppercase tracking-[0.5em] text-white/20">Designed & Engineered &copy; 2026 Syed Mukheeth</div>
              <div className="mono text-[9px] uppercase tracking-[0.3em] text-accent/40 bg-accent/5 px-6 py-3 rounded-full border border-accent/10 backdrop-blur-sm">
                 SYSTEM_STATUS: <span className="text-accent">READY_TO_CONNECT</span>
              </div>
           </div>
        </div>
        
        {/* Ambient Glow */}
        <div className="absolute -bottom-1/2 -right-1/4 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[160px] pointer-events-none opacity-50" />
      </footer>
    </div>
  );
}
