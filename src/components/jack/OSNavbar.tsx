"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMode } from "@/context/ModeContext";
import { FadeIn } from "./JackComponents";
import { Menu, X } from "lucide-react";
import Image from "next/image";

/**
 * OSNavbar Component
 * 
 * A high-fidelity, fixed navigation bar that mimics a system interface.
 * Features:
 * - Dynamic mode switching (Human/Machine)
 * - Glassmorphism effects
 * - Responsive "Floating Island" mobile menu
 * - Shimmer animations and hover states
 */
export const OSNavbar = () => {
  const { mode, toggleMode } = useMode();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#expertise" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-[1000] flex justify-between items-center px-4 md:px-12 py-4 md:py-6 pointer-events-none">
      {/* Background Mask - Ensures readability on scroll */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent h-40 -z-10 pointer-events-none" />

      {/* Brand Identity / Logo */}
      <FadeIn delay={0.1} y={-10} className="pointer-events-auto">
        <a 
          href="#hero" 
          aria-label="Back to home"
          className="flex items-center gap-4 group cursor-pointer transition-transform duration-300"
        >
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:border-accent/50 transition-all duration-500 group-hover:scale-110">
            <Image 
              src="https://res.cloudinary.com/dcqbcjrsp/image/upload/f_auto,q_auto,w_64/avatar_kyjo2q.png" 
              alt="Syed Mukheeth Profile Avatar" 
              width={40}
              height={40}
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_12px_rgba(255,77,0,0.8)] animate-pulse mt-1.5 md:mt-2" />
            <div className="flex flex-col">
              <span className="mono text-[10px] sm:text-[12px] md:text-[14px] uppercase tracking-[0.3em] sm:tracking-[0.5em] font-black bg-gradient-to-r from-white via-white/50 to-white bg-[length:200%_auto] animate-[text-shimmer_6s_linear_infinite] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(255,255,255,0.2)] group-hover:from-accent group-hover:via-white group-hover:to-accent transition-all duration-500">Syed Mukheeth</span>
              <span className="mono text-[8px] md:text-[9px] tracking-[0.4em] text-white/70 uppercase mt-1 font-medium">Software Engineer</span>
            </div>
          </div>
        </a>
      </FadeIn>

      {/* Desktop Navigation */}
      <FadeIn delay={0.2} y={-10} className="pointer-events-auto hidden lg:flex items-center gap-10 glass-heavy px-10 py-4 rounded-full border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] relative overflow-hidden group/nav">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover/nav:animate-[shimmer_3s_infinite] pointer-events-none" />
        
        {navLinks.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="mono text-[11px] uppercase tracking-[0.6em] text-white/70 hover:text-white transition-all duration-300 relative group/link font-bold"
          >
            {item.name}
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-accent shadow-[0_0_10px_rgba(255,77,0,0.8)] transition-all duration-300 group-hover/link:w-full" />
          </a>
        ))}
      </FadeIn>

      <div className="flex items-center gap-4 md:gap-8 pointer-events-auto">
        {/* Burger Button - Improved visibility */}
        <FadeIn delay={0.3} y={-10} className="lg:hidden">
          <button 
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Navigation Menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="p-3.5 rounded-full bg-accent/10 border border-accent/20 hover:bg-accent/20 transition-all duration-300 group"
          >
            <Menu className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
          </button>
        </FadeIn>

        {/* Mode Switcher - Systems Mode Toggle */}
        <FadeIn delay={0.4} y={-10}>
          <button 
            onClick={toggleMode}
            aria-label={`Switch to ${mode === 'human' ? 'machine' : 'human'} mode`}
            className="flex items-center gap-3 px-6 py-3 rounded-full glass-heavy border border-white/10 hover:border-accent/50 transition-all duration-500 group shadow-[0_0_20px_rgba(0,0,0,0.4)] relative overflow-hidden"
          >
            <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_12px_rgba(255,77,0,0.9)] animate-pulse" />
            <span className="mono text-[8px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.5em] font-black bg-gradient-to-r from-white via-accent/50 to-white bg-[length:200%_auto] animate-[text-shimmer_3s_linear_infinite] bg-clip-text text-transparent group-hover:text-accent transition-colors">
              {mode}
            </span>
          </button>
        </FadeIn>
      </div>

      {/* Mobile Menu - "Floating Island" Architecture */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-[3000] bg-black/60 backdrop-blur-md pointer-events-auto lg:hidden"
            />
            
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation Menu"
              initial={{ opacity: 0, scale: 0.9, y: -20, x: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20, x: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 400 }}
              className="fixed top-6 right-6 w-[280px] z-[3001] bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.8)] pointer-events-auto lg:hidden overflow-hidden"
            >
              <div className="flex flex-col p-10 gap-8">
                <div className="flex justify-between items-center">
                  <span className="mono text-[9px] uppercase tracking-[0.5em] text-accent font-black">System_Menu</span>
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close Menu"
                    className="p-3 -mr-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>

                <div className="flex flex-col gap-2">
                   {navLinks.map((item, i) => (
                     <motion.a
                       initial={{ opacity: 0, x: 20 }}
                       animate={{ opacity: 1, x: 0 }}
                       transition={{ delay: i * 0.05 + 0.1 }}
                       key={item.name}
                       href={item.href}
                       onClick={() => setIsMenuOpen(false)}
                       onKeyDown={(e) => { if(e.key === 'Enter') setIsMenuOpen(false); }}
                       className="mono text-[14px] uppercase tracking-[0.6em] text-white/70 hover:text-accent hover:translate-x-4 transition-all duration-500 py-4 border-b border-white/[0.03] last:border-none font-black flex justify-between items-center group"
                     >
                       {item.name}
                       <span className="text-accent/0 group-hover:text-accent transition-colors">_</span>
                     </motion.a>
                   ))}
                </div>

                <div className="mt-4 pt-6 border-t border-white/[0.05] flex flex-col gap-4 items-center">
                   <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(255,77,0,0.5)]" />
                   <span className="mono text-[7px] text-white/60 uppercase tracking-widest">Interface v2.4.1 stable</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

