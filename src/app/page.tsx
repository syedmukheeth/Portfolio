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
      <footer id="contact" className="py-20 md:py-24 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
              {/* ... existing columns ... */}
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
                      { 
                        label: "GitHub", 
                        href: "https://github.com/syedmukheeth", 
                        icon: Github, 
                        color: "group-hover:text-white", 
                        glow: "group-hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]",
                        stats: "19 Repos",
                        status: "SOURCE_CONTROL",
                        metric: "99.9% Uptime"
                      },
                      { 
                        label: "LinkedIn", 
                        href: "https://linkedin.com/in/syedmukheeth", 
                        icon: Linkedin, 
                        color: "group-hover:text-[#0077B5]", 
                        glow: "group-hover:shadow-[0_0_30px_rgba(0,119,181,0.2)]",
                        stats: "8,247 Followers",
                        status: "NETWORK_NODE",
                        metric: "+12.4% Weekly"
                      },
                      { 
                        label: "X", 
                        href: "https://x.com/syed_mukheeth", 
                        icon: Twitter, 
                        color: "group-hover:text-[#1DA1F2]", 
                        glow: "group-hover:shadow-[0_0_30px_rgba(29,161,242,0.15)]",
                        stats: "",
                        status: "SIGNAL_BROADCAST",
                        metric: "ACTIVE"
                      },
                      { 
                        label: "Internal Resume", 
                        href: "#", 
                        icon: FileText, 
                        color: "group-hover:text-accent", 
                        glow: "group-hover:shadow-[0_0_30px_rgba(255,77,0,0.2)]",
                        stats: "",
                        status: "DOCUMENT_STORE",
                        metric: "PDF_VERIFIED"
                      }
                    ].map((link, idx) => (
                      <a 
                        key={link.label} 
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "group relative flex items-center justify-between py-6 px-7 rounded-[2rem] transition-all duration-700",
                          "bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] hover:border-white/10 hover:-translate-y-2",
                          link.glow
                        )}
                      >
                        {/* Vertical Scanline Animation */}
                        <div className="absolute inset-x-0 h-[1px] bg-white/20 top-0 opacity-0 group-hover:opacity-100 animate-[scanline_3s_linear_infinite] pointer-events-none" />
                        
                        <div className="flex items-center gap-6 relative z-10">
                          <div className={cn(
                            "p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 transition-all duration-500",
                            "group-hover:bg-white/[0.05] group-hover:scale-110 group-hover:rotate-6",
                            link.color
                          )}>
                             <link.icon className="w-6 h-6 opacity-40 group-hover:opacity-100" />
                          </div>
                          
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-3">
                              <span className={cn("text-[13px] font-black uppercase tracking-[0.4em] text-white/40 transition-all duration-500", link.color)}>
                                {link.label}
                              </span>
                              <span className="mono text-[7px] text-white/10 tracking-widest hidden sm:block">[{link.status}]</span>
                            </div>
                            
                            <div className="flex items-center gap-3">
                               {link.stats && (
                                 <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 rounded-full animate-pulse bg-accent" />
                                    <span className="mono text-[9px] text-white/80 font-bold tracking-widest uppercase">
                                      {link.stats}
                                    </span>
                                 </div>
                               )}
                               <span className="mono text-[7px] text-accent/50 font-bold">{link.metric}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end gap-2 relative z-10">
                           <ArrowUpRight className={cn("w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500", link.color)} />
                           <div className="mono text-[6px] text-white/10 uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
                              Direct_Access_Link
                           </div>
                        </div>
                      </a>
                    ))}
                  </div>
               </div>
           </div>
           
           <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-10 items-center">
              <div className="mono text-xs uppercase tracking-[0.4em] text-white/40">
                Designed & Engineered &copy; 2026 <span className="text-white font-bold tracking-[0.2em]">Syed Mukheeth</span>
              </div>
              <div className="flex items-center gap-6">
                 <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_15px_rgba(255,77,0,0.8)]" />
                 <div className="mono text-xs uppercase tracking-[0.4em] text-white/40">
                    System Mode: <span className="text-accent font-black tracking-widest">Active Exploration</span>
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
