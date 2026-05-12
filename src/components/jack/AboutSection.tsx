"use client";

import React from "react";
import { motion } from "framer-motion";
import { FadeIn, AnimatedText } from "./JackComponents";

export const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 overflow-hidden">


      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(2.5rem,10vw,100px)]">
            Engineering Through <br/> Curiosity
          </h2>
        </FadeIn>

        <AnimatedText 
          text="I’m passionate about building software that makes complex systems feel more intuitive and efficient. My projects explore areas like repository intelligence, secure code execution, realtime communication, and scalable application design. Through systems such as SAMIndex, SAM Compiler, and PeerNet, I’ve been learning how modern infrastructure, developer tooling, and product engineering come together to solve real-world engineering challenges."
          className="text-white/70 font-medium text-center leading-relaxed max-w-[850px] text-[clamp(1rem,2vw,1.35rem)]"
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
