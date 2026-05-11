"use client";

import React from "react";
import { motion } from "framer-motion";
import { FadeIn, AnimatedText } from "./JackComponents";

export const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 overflow-hidden">

      {/* FLOATING AVATAR HEAD */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 z-0 pointer-events-none opacity-20 blur-sm">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="relative w-64 h-64 rounded-full overflow-hidden border border-white/5"
        >
          <img src="/images/avatar.png" alt="Syed Mukheeth" className="w-full h-full object-cover grayscale" />
        </motion.div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)]">
            Systems thinker
          </h2>
        </FadeIn>

        <AnimatedText 
          text="Full Stack Systems Engineer specializing in distributed architectures and real-time infrastructure. I build high-performance compilation engines, automated repository intelligence pipelines, and secure institutional operating platforms. Driven by technical elegance and production-grade reliability."
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[700px] text-[clamp(1rem,2vw,1.35rem)]"
        />

        <div className="mt-6">
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
      `}</style>
    </section>
  );
};
