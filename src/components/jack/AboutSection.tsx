"use client";

import React from "react";
import { motion } from "framer-motion";
import { FadeIn, AnimatedText } from "./JackComponents";

export const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 overflow-hidden">

      {/* SYSTEM NODES BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.15]">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FF4D00" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FF4D00" stopOpacity="0" />
            </radialGradient>
          </defs>
          
          {/* Animated Connections */}
          <motion.path
            d="M100,200 L400,100 L700,300 L900,150"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
          <motion.path
            d="M50,600 L300,800 L600,500 L950,700"
            stroke="rgba(255, 255, 255, 0.05)"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 4, delay: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
          
          {/* Floating Nodes */}
          {[
            { x: 100, y: 200, r: 2 }, { x: 400, y: 100, r: 3 }, 
            { x: 700, y: 300, r: 2 }, { x: 900, y: 150, r: 4 },
            { x: 50, y: 600, r: 3 }, { x: 300, y: 800, r: 2 },
            { x: 600, y: 500, r: 4 }, { x: 950, y: 700, r: 2 }
          ].map((node, i) => (
            <motion.circle
              key={i}
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill="url(#nodeGradient)"
              animate={{
                y: [node.y - 20, node.y + 20],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
      </div>
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
