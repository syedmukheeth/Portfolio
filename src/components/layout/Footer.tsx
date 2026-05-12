/**
 * Footer Component
 * 
 * A cinematic, information-dense footer that reinforces the "Systems Thinker" brand.
 * Includes terminal-style metadata, social integration, and interactive CTA.
 */
"use client";

import React from 'react';
import { Github, Twitter, Linkedin, Mail, ArrowUpRight, Globe, Cpu, Database } from 'lucide-react';
import { FadeIn } from '@/components/jack/JackComponents';
import { useMode } from "@/context/ModeContext";
import { cn } from "@/lib/utils";

export default function Footer() {
  const { mode } = useMode();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn(
      "relative pt-32 pb-12 overflow-hidden transition-colors duration-1000",
      mode === 'machine' ? 'bg-black border-t border-accent/20' : 'bg-black border-t border-white/5'
    )}>
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 mb-24">
          
          {/* Left Side: Brand & CTA */}
          <div className="flex flex-col gap-10">
            <FadeIn delay={0.1} y={20}>
              <div className="flex items-center gap-4 mb-6">
                <div className={cn(
                  "w-12 h-12 rounded-2xl flex items-center justify-center transition-colors border",
                  mode === 'machine' ? 'bg-accent/10 border-accent/20' : 'bg-white/5 border-white/10'
                )}>
                  <Cpu className={cn("w-6 h-6", mode === 'machine' ? 'text-accent' : 'text-white')} />
                </div>
                <h2 className={cn(
                  "text-3xl md:text-5xl font-black uppercase tracking-tighter transition-colors",
                  mode === 'machine' ? 'text-accent font-mono' : 'text-white'
                )}>
                  {mode === 'machine' ? "CONNECT_HANDSHAKE" : "Let's Build Systems."}
                </h2>
              </div>
              <p className="text-white/80 text-lg md:text-xl max-w-md leading-relaxed">
                Currently open for software developer roles and engineering internships.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} y={20}>
              <a 
                href="mailto:syedmukheeth09@gmail.com"
                className="group flex items-center gap-6 text-white hover:text-accent transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent/50 group-hover:scale-110 transition-all duration-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="mono text-[10px] uppercase tracking-[0.4em] text-accent/80 font-black">Direct_Line</span>
                  <span className={cn(
                    "text-xl md:text-2xl font-bold tracking-tight text-white",
                    mode === 'machine' && 'font-mono'
                  )}>syedmukheeth09@gmail.com</span>
                </div>
              </a>
            </FadeIn>
          </div>

          {/* Right Side: Terminal Metadata & Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FadeIn delay={0.3} y={20} className="flex flex-col gap-8">
               <span className="mono text-[11px] uppercase tracking-[0.5em] text-accent font-black">Social_Nodes</span>
               <div className="flex flex-col gap-4">
                  {[
                    { name: 'Github', icon: <Github size={18} />, href: 'https://github.com/Syed-Mukheeth' },
                    { name: 'LinkedIn', icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/syed-mukheeth-425b03212/' },
                    { name: 'Twitter', icon: <Twitter size={18} />, href: 'https://twitter.com/syed_mukheeth' }
                  ].map((social) => (
                    <a 
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      className="group flex items-center justify-between py-3 border-b border-white/10 hover:border-accent/30 transition-colors"
                    >
                      <div className="flex items-center gap-4 text-white/80 group-hover:text-white transition-colors">
                        {social.icon}
                        <span className="mono text-[12px] uppercase tracking-widest font-medium">{social.name}</span>
                      </div>
                      <ArrowUpRight size={14} className="text-white/60 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </a>
                  ))}
               </div>
            </FadeIn>

            <FadeIn delay={0.4} y={20} className="flex flex-col gap-8">
               <span className="mono text-[11px] uppercase tracking-[0.5em] text-accent font-black">System_Spec</span>
               <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col gap-4">
                   <div className="flex justify-between items-center mono text-[9px]">
                    <span className="text-white/80 font-bold">VERSION</span>
                    <span className="text-white font-black">V4.3.0-STABLE</span>
                  </div>
                  <div className="flex justify-between items-center mono text-[9px]">
                    <span className="text-white/80 font-bold">RUNTIME</span>
                    <span className="text-green-400 font-black">NODE_20_LTS</span>
                  </div>
                  <div className="flex justify-between items-center mono text-[9px]">
                    <span className="text-white/80 font-bold">UPTIME</span>
                    <span className="text-white font-black animate-pulse">99.99%</span>
                  </div>
                  <div className="flex justify-between items-center mono text-[9px] pt-4 border-t border-white/10">
                    <span className="text-white/80 font-bold">LOCATION</span>
                    <div className="flex items-center gap-2 text-white font-black">
                      <Globe size={10} className="text-accent" />
                      <span>BANGALORE, IN</span>
                    </div>
                  </div>
               </div>
            </FadeIn>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <span className="mono text-[10px] text-white/80 uppercase tracking-[0.4em] font-medium">© {currentYear} Syed Mukheeth</span>
            <div className="hidden md:block w-px h-3 bg-white/20" />
            <span className="mono text-[10px] text-accent uppercase tracking-[0.4em] font-black hidden md:block">Engineering Portfolio Architecture</span>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 mono text-[10px] text-white/80 font-bold">
              <Database size={12} className="text-accent" />
              <span>DB_STABLE</span>
            </div>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mono text-[10px] uppercase tracking-[0.4em] text-white/80 hover:text-white transition-colors flex items-center gap-2 group font-black"
            >
              Back to Top
              <ArrowUpRight size={12} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Scanline */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-[shimmer_4s_infinite]" />
    </footer>
  );
}
