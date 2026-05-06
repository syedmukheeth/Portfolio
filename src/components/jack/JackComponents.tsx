"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// FADE IN COMPONENT
export const FadeIn = ({ 
  children, 
  delay = 0, 
  duration = 0.7, 
  x = 0, 
  y = 30, 
  className = "" 
}: { 
  children: React.ReactNode; 
  delay?: number; 
  duration?: number; 
  x?: number; 
  y?: number; 
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px" }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.25, 0.1, 0.25, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// MAGNET COMPONENT
export const Magnet = ({ 
  children, 
  padding = 150, 
  strength = 3, 
  className = "" 
}: { 
  children: React.ReactNode; 
  padding?: number; 
  strength?: number; 
  className?: string;
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    if (Math.abs(distanceX) < padding && Math.abs(distanceY) < padding) {
      setPosition({ x: distanceX / strength, y: distanceY / strength });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("relative transition-transform duration-300 ease-out", className)}
      style={{ 
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  );
};

// CONTACT BUTTON
export const ContactButton = ({ delay = 0.5 }: { delay?: number }) => {
  return (
    <FadeIn delay={delay} y={20}>
      <motion.a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=syedmukheeth09@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative inline-block px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 rounded-full text-white font-medium uppercase tracking-[0.2em] text-xs sm:text-sm md:text-base overflow-hidden group shadow-[0px_4px_4px_rgba(181,1,167,0.25)] outline outline-2 outline-white -outline-offset-[3px] text-center"
        style={{
          background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
          boxShadow: "inset 4px 4px 12px #7721B1"
        }}
      >
        <span className="relative z-10">Contact Me</span>
      </motion.a>
    </FadeIn>
  );
};

// LIVE PROJECT BUTTON
export const LiveProjectButton = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, backgroundColor: "rgba(215, 226, 234, 0.1)" }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-3 sm:px-10 sm:py-3.5 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-[0.2em] text-sm sm:text-base transition-colors"
    >
      Live Project
    </motion.button>
  );
};

// ANIMATED TEXT (Character by Character)
export const AnimatedText = ({ text, className = "" }: { text: string; className?: string }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"]
  });

  const characters = text.split("");

  return (
    <p ref={containerRef} className={cn("relative flex flex-wrap", className)}>
      {characters.map((char, index) => {
        const start = index / characters.length;
        const end = (index + 1) / characters.length;
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
        
        return (
          <motion.span key={index} style={{ opacity }} className="relative">
            {char === " " ? "\u00A0" : char}
          </motion.span>
        );
      })}
    </p>
  );
};
