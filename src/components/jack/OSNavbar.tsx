"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMode } from "@/context/ModeContext";
import { FadeIn } from "./JackComponents";
import { Menu, X } from "lucide-react";

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
    <nav className="fixed top-0 inset-x-0 z-[100] flex justify-between items-center px-6 md:px-12 py-6 pointer-events-none">
      {/* Background Mask */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent h-32 -z-10 pointer-events-none" />

      {/* Editorial Name */}
      <FadeIn delay={0.1} y={-10} className="pointer-events-auto">
        <a href="#hero" className="flex items-center gap-4 group cursor-pointer transition-transform duration-300">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:border-accent/50 transition-all duration-500 group-hover:scale-110">
            <img src="https://res.cloudinary.com/dcqbcjrsp/image/upload/f_auto,q_auto,w_64/avatar_kyjo2q.png" alt="SM" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_12px_rgba(255,77,0,0.8)] animate-pulse mt-1.5 md:mt-2" />
            <div className="flex flex-col">
              <span className="mono text-[12px] md:text-[14px] uppercase tracking-[0.5em] font-black bg-gradient-to-r from-white via-white/50 to-white bg-[length:200%_auto] animate-[text-shimmer_6s_linear_infinite] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(255,255,255,0.2)] group-hover:from-accent group-hover:via-white group-hover:to-accent transition-all duration-500">Syed Mukheeth</span>
              <span className="mono text-[8px] md:text-[9px] tracking-[0.4em] text-white/70 uppercase mt-1 font-medium">Systems Engineer</span>
            </div>
          </div>
        </a>
      </FadeIn>

      {/* Desktop Nav Links */}
      <FadeIn delay={0.2} y={-10} className="pointer-events-auto hidden lg:flex items-center gap-10 glass-heavy px-10 py-4 rounded-full border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] relative overflow-hidden group/nav">
        {/* Subtle Shimmer Background */}
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
        {/* Burger Button - Mobile/Tablet Only */}
        <FadeIn delay={0.3} y={-10} className="lg:hidden">
          <button 
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Navigation Menu"
            className="p-3 rounded-full glass border border-white/10 hover:border-accent/40 transition-all duration-300 group"
          >
            <Menu className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
          </button>
        </FadeIn>

        {/* Mode Switcher */}
        <FadeIn delay={0.4} y={-10}>
          <button 
            onClick={toggleMode}
            className="flex items-center gap-3 px-6 py-3 rounded-full glass-heavy border border-white/10 hover:border-accent/50 transition-all duration-500 group shadow-[0_0_20px_rgba(0,0,0,0.4)] relative overflow-hidden"
          >
            <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_12px_rgba(255,77,0,0.9)] animate-pulse" />
            <span className="mono text-[10px] uppercase tracking-[0.5em] font-black bg-gradient-to-r from-white via-accent/50 to-white bg-[length:200%_auto] animate-[text-shimmer_3s_linear_infinite] bg-clip-text text-transparent group-hover:text-accent transition-colors">
              {mode}
            </span>
          </button>
        </FadeIn>
      </div>

      {/* Mobile Menu - Floating Island */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop for closing */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-[190] bg-black/20 backdrop-blur-sm pointer-events-auto lg:hidden"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20, x: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20, x: 20 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="fixed top-6 right-6 w-[240px] z-[200] glass-heavy rounded-[2rem] border border-white/10 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)] pointer-events-auto lg:hidden overflow-hidden"
            >
              <div className="flex flex-col p-8 gap-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="mono text-[8px] uppercase tracking-[0.4em] text-accent font-bold">Menu</span>
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close Menu"
                    className="p-2 -mr-2 rounded-full hover:bg-white/5 transition-colors"
                  >
                    <X className="w-4 h-4 text-white/60" />
                  </button>
                </div>

                <div className="flex flex-col gap-4">
                   {navLinks.map((item, i) => (
                     <motion.a
                       initial={{ opacity: 0, x: 10 }}
                       animate={{ opacity: 1, x: 0 }}
                       transition={{ delay: i * 0.05 }}
                       key={item.name}
                       href={item.href}
                       onClick={() => setIsMenuOpen(false)}
                       className="mono text-[13px] uppercase tracking-[0.6em] text-white/60 hover:text-accent hover:translate-x-3 transition-all duration-300 py-3 border-b border-white/[0.05] last:border-none font-bold"
                     >
                       {item.name}
                     </motion.a>
                   ))}
                </div>

                <div className="mt-4 pt-4 border-t border-white/[0.05] flex justify-center">
                   <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
