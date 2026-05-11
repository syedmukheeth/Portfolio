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
        <a href="#hero" className="flex items-center gap-4 group cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/10 shadow-lg group-hover:border-accent/40 transition-colors">
            <img src="/images/avatar.png" alt="SM" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="mono text-[10px] uppercase tracking-[0.5em] text-white font-bold drop-shadow-md group-hover:text-accent transition-colors">Syed Mukheeth</span>
            </div>
            <span className="mono text-[6px] tracking-[0.3em] text-white/30 uppercase mt-0.5">Software Engineer</span>
          </div>
        </a>
      </FadeIn>

      {/* Desktop Nav Links */}
      <FadeIn delay={0.2} y={-10} className="pointer-events-auto hidden lg:flex items-center gap-10 glass px-8 py-3 rounded-full border border-white/5 shadow-2xl">
        {navLinks.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="mono text-[10px] uppercase tracking-[0.5em] text-white/50 hover:text-white transition-all duration-300 relative group"
          >
            {item.name}
            <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-accent transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </FadeIn>

      <div className="flex items-center gap-4 md:gap-8 pointer-events-auto">
        {/* Burger Button - Mobile/Tablet Only */}
        <FadeIn delay={0.3} y={-10} className="lg:hidden">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="p-3 rounded-full glass border border-white/10 hover:border-accent/40 transition-all duration-300 group"
          >
            <Menu className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
          </button>
        </FadeIn>

        {/* Mode Switcher */}
        <FadeIn delay={0.4} y={-10}>
          <button 
            onClick={toggleMode}
            className="flex items-center gap-3 px-5 py-2.5 rounded-full glass border border-white/10 hover:border-accent/40 transition-all duration-500 group shadow-lg"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(255,77,0,0.8)]" />
            <span className="mono text-[9px] uppercase tracking-[0.4em] text-white/80 group-hover:text-white transition-colors">
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
                    className="p-2 -mr-2 rounded-full hover:bg-white/5 transition-colors"
                  >
                    <X className="w-4 h-4 text-white/50" />
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
                       className="mono text-[11px] uppercase tracking-[0.5em] text-white/40 hover:text-accent hover:translate-x-2 transition-all duration-300 py-2 border-b border-white/[0.03] last:border-none"
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
