"use client";

import { motion } from "framer-motion";
import { useMode } from "@/context/ModeContext";
import { cn } from "@/lib/utils";
import { Monitor, User, Command } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const { mode, toggleMode, isTransitioning } = useMode();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none">
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="glass rounded-full px-6 py-2 flex items-center gap-8 pointer-events-auto shadow-2xl"
      >
        <Link href="/" className="flex items-center gap-2">
          <div className="w-6 h-6 bg-accent rounded-sm rotate-45 flex items-center justify-center overflow-hidden">
            <span className="text-[10px] text-white -rotate-45 font-bold">SM</span>
          </div>
          <span className="text-xs font-bold tracking-tighter uppercase">Syed Mukheeth</span>
        </Link>

        <div className="h-4 w-px bg-white/10" />

        <div className="flex items-center gap-6">
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#architecture">Architecture</NavLink>
          <NavLink href="#stack">Stack</NavLink>
        </div>

        <div className="h-4 w-px bg-white/10" />

        <button 
          onClick={toggleMode}
          disabled={isTransitioning}
          className={cn(
            "relative flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-500 overflow-hidden min-w-[90px]",
            mode === "human" ? "bg-white/5 text-white" : "bg-accent/20 text-accent",
            isTransitioning && "opacity-50 cursor-wait"
          )}
        >
          <motion.div
            animate={{ 
              x: mode === "human" ? 0 : 22,
              opacity: isTransitioning ? 0 : 1
            }}
            className="flex items-center gap-2 z-10"
          >
            {mode === "human" ? (
              <>
                <User size={14} />
                <span className="text-[10px] font-bold uppercase tracking-wider">Human</span>
              </>
            ) : (
              <>
                <Monitor size={14} />
                <span className="text-[10px] font-bold uppercase tracking-wider">Machine</span>
              </>
            )}
          </motion.div>
          <div className={cn(
            "absolute inset-0 transition-opacity duration-500",
            mode === "machine" ? "opacity-100" : "opacity-0"
          )}>
            <div className="absolute inset-0 bg-accent/10" />
            <div className="absolute inset-y-0 left-0 w-1 bg-accent" />
          </div>
        </button>
      </motion.div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors"
    >
      {children}
    </Link>
  );
}
