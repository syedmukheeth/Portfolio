"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMode } from "@/context/ModeContext";
import { cn } from "@/lib/utils";
import { Terminal as TerminalIcon, Cpu, Globe, Database, Shield } from "lucide-react";

const BOOT_SEQUENCE = [
  "Initializing developer kernel...",
  "Loading distributed systems protocols...",
  "Establishing secure gateway...",
  "Optimizing infrastructure clusters...",
  "Booting SAM Compiler environment...",
  "Scanning PeerNet node graph...",
  "System Status: Operational",
];

export default function Hero() {
  const { mode } = useMode();
  const [bootStep, setBootStep] = useState(0);
  const [isBooted, setIsBooted] = useState(false);

  useEffect(() => {
    if (bootStep < BOOT_SEQUENCE.length) {
      const timer = setTimeout(() => setBootStep(s => s + 1), 150 + Math.random() * 300);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setIsBooted(true), 500);
    }
  }, [bootStep]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 overflow-hidden">
         <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: mode === "human" ? [0.1, 0.2, 0.1] : [0.05, 0.1, 0.05]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className={cn(
              "absolute -top-1/4 -right-1/4 w-1/2 h-1/2 blur-[120px] rounded-full transition-colors duration-1000",
              mode === "human" ? "bg-accent/20" : "bg-accent/5"
            )}
         />
         <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: mode === "human" ? [0.05, 0.1, 0.05] : [0.02, 0.05, 0.02]
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
            className={cn(
              "absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 blur-[120px] rounded-full transition-colors duration-1000",
              mode === "human" ? "bg-blue-500/10" : "bg-accent/5"
            )}
         />
      </div>

      <div className="container max-w-6xl relative z-10">
        <AnimatePresence mode="wait">
          {!isBooted ? (
            <motion.div 
              key="boot"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="terminal-window max-w-xl mx-auto"
            >
              <div className="terminal-header">
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="text-[10px] uppercase tracking-widest text-white/40 ml-2">System Boot</span>
              </div>
              <div className="terminal-body font-mono text-accent">
                {BOOT_SEQUENCE.slice(0, bootStep).map((line, i) => (
                  <div key={i} className="mb-1">
                    <span className="text-white/40 mr-2">[{new Date().toLocaleTimeString()}]</span>
                    {line}
                  </div>
                ))}
                {bootStep < BOOT_SEQUENCE.length && (
                  <motion.span 
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-2 h-4 bg-accent ml-1 translate-y-0.5"
                  />
                )}
              </div>
            </motion.div>
          ) : (
            <div key="content" className="w-full">
              <AnimatePresence mode="wait">
                {mode === "human" ? (
                  <HumanHero key="human" />
                ) : (
                  <MachineHero key="machine" />
                )}
              </AnimatePresence>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll indicator */}
      {isBooted && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className={cn(
            "text-[10px] uppercase tracking-[0.3em] transition-colors duration-500",
            mode === "human" ? "text-white/20" : "text-accent/40 font-mono"
          )}>
            {mode === "human" ? "Scroll to inspect" : "SCAN_FOR_INFRASTRUCTURE"}
          </span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className={cn(
              "w-px h-12 bg-gradient-to-b from-accent to-transparent transition-opacity duration-500",
              mode === "machine" ? "opacity-100" : "opacity-50"
            )}
          />
        </motion.div>
      )}
    </section>
  );
}

function HumanHero() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.2em] text-white/50 mb-8"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
        </span>
        System Operational
      </motion.div>

      <h1 className="text-5xl md:text-9xl font-bold tracking-tight mb-8 leading-[1] font-sans">
        Engineering <span className="text-accent italic font-light">scalable</span> <br />
        <span className="text-white/40">systems.</span>
      </h1>

      <p className="text-lg md:text-2xl text-white/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
        Designing distributed architectures, real-time infrastructure, and high-performance product experiences.
      </p>

      <div className="flex gap-6 justify-center">
        <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-accent hover:text-white transition-all transform hover:-translate-y-1 active:scale-95 shadow-xl">
          Explore Projects
        </button>
        <button className="px-8 py-4 rounded-full border border-white/10 text-white font-semibold hover:bg-white/5 transition-all transform hover:-translate-y-1 active:scale-95">
          The Stack
        </button>
      </div>
    </motion.div>
  );
}

function MachineHero() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-4xl mx-auto font-mono text-accent"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <StatBox icon={<Cpu size={14}/>} label="CPU_LOAD" value="14.2%" />
        <StatBox icon={<Globe size={14}/>} label="NETWORK_NODES" value="1,024" />
        <StatBox icon={<Database size={14}/>} label="DB_LATENCY" value="2.4ms" />
      </div>

      <div className="border border-accent/20 bg-accent/[0.02] p-8 md:p-12 rounded-lg relative overflow-hidden group transition-all hover:bg-accent/[0.04]">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-20" />
        
        <div className="flex items-center gap-4 mb-8 text-accent/40">
           <TerminalIcon size={18} />
           <span className="text-xs tracking-widest uppercase font-bold">Identity::SYED_MUKHEETH</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tighter uppercase">
          FULL_STACK_SYSTEMS_ENGINEER <br />
          <span className="text-accent/30 text-2xl md:text-4xl">@v2.4.0-stable</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
           <div className="space-y-4">
              <div className="flex items-center gap-3">
                 <Shield size={14} className="text-accent/60" />
                 <span className="text-accent/40 uppercase tracking-widest text-[10px]">CORE_SPECIALIZATION:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                 {["DISTRIBUTED_SYSTEMS", "REAL_TIME_PROTOCOLS", "SECURE_GATEWAYS"].map(tag => (
                   <span key={tag} className="px-2 py-1 border border-accent/20 text-[10px] bg-accent/5">{tag}</span>
                 ))}
              </div>
           </div>
           <div className="space-y-2 text-[10px] text-accent/40 leading-relaxed uppercase tracking-widest">
              <div>// PRIMARY_DIRECTIVE: ARCHITECT_SCALABLE_SOLUTIONS</div>
              <div>// CURRENT_STATE: READY_FOR_DEPLOYMENT</div>
              <div>// LATENCY_OPTIMIZATION: ENABLED</div>
           </div>
        </div>
        
        <div className="mt-12 flex gap-4">
           <div className="h-px flex-1 bg-accent/10" />
           <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        </div>
      </div>
    </motion.div>
  );
}

function StatBox({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="border border-accent/10 bg-black p-4 rounded flex items-center gap-4 group hover:border-accent/30 transition-colors">
      <div className="p-2 bg-accent/5 text-accent/60 group-hover:text-accent transition-colors">
        {icon}
      </div>
      <div>
        <div className="text-[9px] uppercase tracking-widest text-accent/40 mb-1">{label}</div>
        <div className="text-sm font-bold tracking-tighter">{value}</div>
      </div>
    </div>
  );
}
