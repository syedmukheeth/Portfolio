"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Monitor, User, Command } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none">
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        whileHover={{ scale: 1.02 }}
        className="glass glass-shine rounded-full px-6 py-2 flex items-center gap-8 pointer-events-auto shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/10"
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
      </motion.div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="text-[10px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-all hover:tracking-[0.25em]"
    >
      {children}
    </Link>
  );
}
