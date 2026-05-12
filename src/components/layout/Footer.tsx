"use client";

import { motion } from "framer-motion";
import { useMode } from "@/context/ModeContext";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight, Terminal, Lock, Power } from "lucide-react";

export default function Footer() {
  const { mode } = useMode();

  return (
    <footer className={cn(
      "pt-32 pb-12 transition-colors duration-1000",
      mode === "machine" ? "bg-black border-t border-accent/20" : "bg-black border-t border-white/5"
    )}>
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-24 md:mb-32">
          <div>
            <h2 className={cn(
              "text-4xl md:text-6xl font-bold mb-8 transition-all duration-500 tracking-tighter",
              mode === "machine" ? "font-mono uppercase text-accent" : "font-sans text-white"
            )}>
              {mode === "machine" ? "END_OF_LINE" : "Initiate Connection."}
            </h2>
            <p className={cn(
              "max-w-sm mb-8 transition-colors duration-500 text-sm md:text-base",
              mode === "machine" ? "text-accent/60 font-mono" : "text-white/40"
            )}>
              {mode === "machine" 
                ? "Establishing encrypted handshake for technical consultation." 
                : "Available for architectural consulting, product engineering, and distributed systems design."}
            </p>
            <a 
              href="mailto:syedmukheeth09@gmail.com" 
              className={cn(
                "group inline-flex items-center gap-4 text-xl md:text-2xl font-medium transition-colors",
                mode === "machine" ? "text-accent hover:text-white font-mono" : "text-white hover:text-accent"
              )}
            >
              {mode === "machine" ? "SYEDMUKHEETH09@GMAIL.COM" : "syedmukheeth09@gmail.com"}
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className={cn(
                "text-[10px] uppercase tracking-[0.3em] transition-colors font-bold",
                mode === "machine" ? "text-accent/40 font-mono" : "text-white/20"
              )}>
                {mode === "machine" ? "PROTOCOL_EXTENSIONS" : "Social Infrastructure"}
              </div>
              <div className="flex flex-col gap-4">
                <SocialLink href="https://github.com/syedmukheeth" icon={<Github size={18}/>} label="GitHub" />
                <SocialLink href="https://linkedin.com/in/syedmukheeth" icon={<Linkedin size={18}/>} label="LinkedIn" />
                <SocialLink href="https://twitter.com/syed_mukheeth" icon={<Twitter size={18}/>} label="Twitter / X" />
              </div>
            </div>
            <div className="space-y-6">
              <div className={cn(
                "text-[10px] uppercase tracking-[0.3em] transition-colors font-bold",
                mode === "machine" ? "text-accent/40 font-mono" : "text-white/20"
              )}>
                System Metadata
              </div>
              <div className="space-y-3">
                <div className="text-[10px] text-white/40 font-mono flex justify-between border-b border-white/5 pb-2">
                  <span>VERSION</span>
                  <span className="text-white/60">v4.2.1-STABLE</span>
                </div>
                <div className="text-[10px] text-white/40 font-mono flex justify-between border-b border-white/5 pb-2">
                  <span>BUILD_ID</span>
                  <span className="text-white/60">SHA_DC153F7</span>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className={cn(
                    "text-[10px] uppercase tracking-widest",
                    mode === "machine" ? "text-accent/40 font-mono" : "text-white/20"
                  )}>STATUS</span>
                  <div className="flex items-center gap-2">
                    <div className={cn(
                      "w-1.5 h-1.5 rounded-full animate-pulse",
                      mode === "machine" ? "bg-accent shadow-[0_0_8px_rgba(255,77,0,0.5)]" : "bg-green-500"
                    )} />
                    <span className={cn(
                      "text-[10px] uppercase tracking-widest font-bold",
                      mode === "machine" ? "text-accent font-mono" : "text-green-500/80"
                    )}>
                      Operational
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={cn(
          "flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t",
          mode === "machine" ? "border-accent/10" : "border-white/5"
        )}>
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <div className={cn(
              "w-8 h-8 rounded-sm flex items-center justify-center font-bold text-xs transition-colors",
              mode === "machine" ? "bg-accent text-black" : "bg-white/10 text-white"
            )}>SM</div>
            <span className="text-[10px] uppercase tracking-widest text-white/20">© 2026 Syed Mukheeth. Engineering High-Performance Systems.</span>
          </div>
          
          <div className="flex items-center gap-6">
            <FooterAction icon={<Lock size={12}/>} label="Security" />
            <FooterAction icon={<Power size={12}/>} label="Shutdown" />
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  const { mode } = useMode();
  return (
    <a 
      href={href} 
      target="_blank"
      className={cn(
        "flex items-center gap-3 text-sm transition-colors group",
        mode === "machine" ? "text-accent/60 hover:text-accent font-mono" : "text-white/40 hover:text-white"
      )}
    >
      <span className={cn(
        "p-2 rounded-lg border transition-all",
        mode === "machine" 
          ? "bg-accent/5 border-accent/10 group-hover:border-accent group-hover:bg-accent/20" 
          : "bg-white/5 border-white/5 group-hover:border-accent/20 group-hover:bg-accent/5"
      )}>
        {icon}
      </span>
      {label}
    </a>
  );
}

function FooterAction({ icon, label }: { icon: React.ReactNode; label: string }) {
  const { mode } = useMode();
  return (
    <button className={cn(
      "flex items-center gap-2 text-[10px] uppercase tracking-widest transition-colors",
      mode === "machine" ? "text-accent/40 hover:text-accent font-mono" : "text-white/20 hover:text-white"
    )}>
      {icon}
      {label}
    </button>
  );
}
