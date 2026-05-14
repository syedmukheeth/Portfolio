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
          
          {/* Animated Connections - CSS Optimized */}
          <path
            d="M100,200 L400,100 L700,300 L900,150"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="0.5"
            fill="none"
            className="animate-path-flow"
          />
          <path
            d="M50,600 L300,800 L600,500 L950,700"
            stroke="rgba(255, 255, 255, 0.05)"
            strokeWidth="0.5"
            fill="none"
            className="animate-path-flow-delayed"
          />
          
          {/* Floating Nodes - CSS Optimized */}
          {[
            { x: 100, y: 200, r: 2 }, { x: 400, y: 100, r: 3 }, 
            { x: 700, y: 300, r: 2 }, { x: 900, y: 150, r: 4 },
            { x: 50, y: 600, r: 3 }, { x: 300, y: 800, r: 2 },
            { x: 600, y: 500, r: 4 }, { x: 950, y: 700, r: 2 }
          ].map((node, i) => (
            <circle
              key={i}
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill="url(#nodeGradient)"
              className="animate-pulse-node"
              style={{ animationDelay: `${i * 0.4}s` }}
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
          text="As a software engineering student, I’m passionate about building systems that make complexity intuitive. My focus lies in Backend Architecture and Infrastructure-building tools that solve real-world engineering challenges. Through projects like SAMIndex, SAM Compiler, and PeerNet, I’m exploring high-performance systems and seeking opportunities to apply these skills in Full-Time or Internship roles."
          className="text-white/70 font-medium text-center leading-relaxed max-w-[850px] text-[clamp(1rem,2vw,1.35rem)]"
        />

        {/* Static bio for AI crawlers & screen readers — mirrors AnimatedText above */}
        <p className="sr-only">
          As a software engineering student, I am passionate about building systems that make complexity intuitive. My focus lies in Backend Architecture and Infrastructure — building tools that solve real-world engineering challenges. Through projects like SAMIndex, SAM Compiler, and PeerNet, I am exploring high-performance systems and seeking opportunities to apply these skills in Full-Time or Internship roles.
        </p>

        <div className="mt-6">
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes flow {
          0% { stroke-dasharray: 0 1000; opacity: 0; }
          50% { stroke-dasharray: 500 1000; opacity: 1; }
          100% { stroke-dasharray: 1000 1000; opacity: 0; }
        }
        @keyframes node-pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-path-flow { animation: flow 8s ease-in-out infinite; }
        .animate-path-flow-delayed { animation: flow 10s ease-in-out infinite 1s; }
        .animate-pulse-node { animation: node-pulse 4s ease-in-out infinite; transform-origin: center; }
      `}</style>
    </section>
  );
};
