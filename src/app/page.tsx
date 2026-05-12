"use client";

import React from "react";
import { HeroSection } from "@/components/jack/HeroSection";
import { MarqueeSection } from "@/components/jack/MarqueeSection";
import { AboutSection } from "@/components/jack/AboutSection";
import { ServicesSection } from "@/components/jack/ServicesSection";
import { ProjectsSection } from "@/components/jack/ProjectsSection";
import { useMode } from "@/context/ModeContext";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Twitter, FileText, ArrowUpRight } from "lucide-react";
import Image from "next/image";

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
      <footer id="contact" className="py-32 md:py-48 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
              <div className="lg:col-span-7">
                 <div className="flex items-center gap-8 mb-10">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border border-white/10 shadow-2xl">
                       <Image 
                         src="https://res.cloudinary.com/dcqbcjrsp/image/upload/f_auto,q_auto,w_128/avatar_kyjo2q.png" 
                         alt="Syed Mukheeth" 
                         fill 
                         unoptimized
                         className="object-cover" 
                       />
                       <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent" />
                    </div>
                    <h2 className="text-[clamp(3rem,8vw,5.5rem)] font-black uppercase tracking-tighter leading-[0.9] text-white">
                       Let&apos;s <br />
                       <span className="text-white/20">Connect.</span>
                    </h2>
                 </div>
                 <p className="text-white/50 text-base md:text-lg max-w-lg mb-12 leading-relaxed font-light">
                    I’m always interested in discussing backend architecture, scalable software, and the intersection of product engineering and infrastructure. If you&apos;re building something that requires a systems-thinking mindset, let&apos;s connect.
                 </p>
                 
                 <div className="group inline-flex flex-col gap-2">
                    <span className="mono text-[10px] text-white/30 uppercase tracking-[0.4em]">Direct Communication</span>
                    <a 
                       href="https://mail.google.com/mail/?view=cm&fs=1&to=syedmukheeth09@gmail.com&su=Inquiry from Portfolio&body=Hello Syed,"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-xl md:text-3xl font-medium text-white/90 hover:text-accent transition-all duration-500 underline underline-offset-8 decoration-white/5 hover:decoration-accent/40 flex items-center gap-4 break-all"
                    >
                       syedmukheeth09@gmail.com
                       <ArrowUpRight className="w-6 h-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-accent" />
                    </a>
                  </div>
              </div>
              
               <div className="lg:col-span-5 flex flex-col gap-10 lg:items-end justify-center">
                  <div className="flex flex-col gap-6 w-full max-w-[320px]">
                    {[
                      { label: "GitHub", href: "https://github.com/syedmukheeth", icon: Github, color: "group-hover:text-white", glow: "group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]" },
                      { label: "LinkedIn", href: "https://linkedin.com/in/syedmukheeth", icon: Linkedin, color: "group-hover:text-[#0077B5]", glow: "group-hover:shadow-[0_0_20px_rgba(0,119,181,0.2)]" },
                      { label: "X", href: "https://x.com/syed_mukheeth", icon: Twitter, color: "group-hover:text-[#1DA1F2]", glow: "group-hover:shadow-[0_0_20px_rgba(29,161,242,0.2)]" },
                      { label: "Resume", href: "#", icon: FileText, color: "group-hover:text-accent", glow: "group-hover:shadow-[0_0_20px_rgba(255,77,0,0.2)]" }
                    ].map(link => (
                      <a 
                        key={link.label} 
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "group relative flex items-center justify-between py-5 px-6 rounded-2xl transition-all duration-500",
                          "bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/10 hover:-translate-y-1",
                          link.glow
                        )}
                      >
                        <div className="flex items-center gap-6">
                          <div className={cn("p-2 rounded-lg bg-white/5 transition-colors duration-500", link.color)}>
                             <link.icon className="w-5 h-5 opacity-50 group-hover:opacity-100" />
                          </div>
                          <span className={cn("text-[12px] uppercase tracking-[0.4em] mono text-white/30 transition-all duration-500", link.color)}>
                            {link.label}
                          </span>
                        </div>
                        <ArrowUpRight className={cn("w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500", link.color)} />
                      </a>
                    ))}
                  </div>
               </div>
           </div>
           
           <div className="mt-40 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-10 items-center opacity-40">
              <div className="mono text-[10px] uppercase tracking-[0.6em] text-white">Designed & Engineered &copy; 2026 Syed Mukheeth</div>
              <div className="flex items-center gap-4">
                 <div className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse" />
                 <div className="mono text-[10px] uppercase tracking-[0.4em]">
                    System Mode: <span className="text-white">Active Exploration</span>
                 </div>
              </div>
           </div>
        </div>
        
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[180px] pointer-events-none" />
      </footer>
    </div>
  );
}
