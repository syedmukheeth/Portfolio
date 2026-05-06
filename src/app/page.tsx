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
                 <p className="text-white/40 text-lg max-w-sm mb-12 uppercase tracking-widest">
                    Available for senior systems engineering roles, distributed infrastructure design, and technical product leadership.
                 </p>
                 <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=syedmukheeth09@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl md:text-4xl font-medium text-white hover:text-accent transition-colors underline underline-offset-8"
                 >
                    syedmukheeth09@gmail.com
                 </a>
              </div>
              
              <div className="flex flex-col gap-6 md:items-end">
                 {SOCIAL_LINKS.map(link => (
                   <a 
                     key={link.label} 
                     href={link.href}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-xl uppercase tracking-widest text-white/40 hover:text-white transition-all flex items-center gap-4 group mono"
                   >
                     <span className="w-8 h-px bg-white/10 group-hover:bg-accent group-hover:w-12 transition-all" />
                     {link.label}
                   </a>
                 ))}
              </div>
           </div>
           
           <div className="mt-40 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-8 items-center">
              <div className="mono text-[8px] uppercase tracking-[0.4em] text-white/20">Designed & Engineered &copy; 2026 Syed Mukheeth</div>
              <div className="mono text-[8px] uppercase tracking-widest text-accent/40 bg-accent/5 px-4 py-2 rounded-full border border-accent/10">
                 Infrastructure: SYSMUK//OS Node_01
              </div>
           </div>
        </div>
        
        {/* Ambient Glow */}
        <div className="absolute -bottom-1/2 -right-1/4 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />
      </footer>
    </div>
  );
}
