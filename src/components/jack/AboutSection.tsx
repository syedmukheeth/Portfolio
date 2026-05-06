"use client";

import React from "react";
import { motion } from "framer-motion";
import { FadeIn, AnimatedText, ContactButton } from "./JackComponents";

export const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 overflow-hidden">
      {/* DECORATIVE 3D IMAGES (TECHNICAL VERSION) */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 opacity-40">
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" 
          alt="Technical Node"
          className="w-[120px] sm:w-[160px] md:w-[210px] animate-float grayscale invert"
        />
      </FadeIn>

      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0 opacity-40">
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" 
          alt="Mesh Geometry"
          className="w-[100px] sm:w-[140px] md:w-[180px] animate-float-delayed grayscale"
        />
      </FadeIn>

      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 opacity-40">
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" 
          alt="System Block"
          className="w-[120px] sm:w-[160px] md:w-[210px] animate-float grayscale"
        />
      </FadeIn>
      
      {/* USER PROVIDED STICKER */}
      <motion.div 
        initial={{ opacity: 0, x: 100, rotate: 45 }}
        whileInView={{ opacity: 1, x: 0, rotate: -15 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
        className="absolute bottom-[10%] right-[5%] z-20"
      >
        <img src="/images/approved.png" alt="Approved" className="w-24 sm:w-32 md:w-40 drop-shadow-2xl" />
      </motion.div>

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
          <ContactButton delay={0.4} />
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
