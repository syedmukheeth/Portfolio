"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { FadeIn } from "./JackComponents";
import { useMode } from "@/context/ModeContext";
import { PROJECTS as LIB_PROJECTS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Github, ExternalLink } from "lucide-react";

// EXTEND PROJECTS WITH IMAGES FOR THE GRID
const PROJECTS = LIB_PROJECTS.map((p, i) => {
  const images = [
    [
      "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
      "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
      "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif"
    ],
    [
      "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
      "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
      "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif"
    ],
    [
      "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
      "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
      "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif"
    ],
    [
      "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
      "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
      "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif"
    ]
  ];

  const projectImages = images[i % images.length];

  return {
    ...p,
    gridImages: {
      col1_1: projectImages[0],
      col1_2: projectImages[1],
      col2: projectImages[2]
    }
  };
});

export const ProjectsSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section 
      ref={container} 
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-32 pb-20 relative z-30"
    >
      <div className="container max-w-6xl mx-auto px-4 mb-20">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)]">
            Systems
          </h2>
        </FadeIn>
      </div>

      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-20 sm:gap-32 md:gap-40">
        {PROJECTS.map((project, i) => {
          const targetScale = 1 - (PROJECTS.length - 1 - i) * 0.05;
          return (
            <ProjectCard 
              key={project.id} 
              index={i} 
              project={project}
              range={[i * (1 / PROJECTS.length), 1]}
              targetScale={targetScale}
              progress={scrollYProgress}
            />
          );
        })}
      </div>
    </section>
  );
};

const ProjectCard = ({ 
  project, 
  index, 
  range, 
  targetScale, 
  progress 
}: any) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  const { mode } = useMode();

  return (
    <div className="h-[85vh] flex items-center justify-center sticky top-24 md:top-32">
      <motion.div
        style={{ 
          scale,
          top: `calc(-5vh + ${index * 25}px)`,
        }}
        className="relative h-full w-full bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 flex flex-col gap-6 overflow-hidden shadow-2xl"
      >
        {/* TOP ROW */}
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="text-[#D7E2EA] font-black text-[clamp(2.5rem,8vw,100px)] leading-none opacity-20">
              0{index + 1}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA]/40 text-[10px] uppercase tracking-widest">{project.tagline}</span>
              <h3 className="text-[#D7E2EA] font-medium uppercase text-[clamp(1.2rem,2.5vw,2.2rem)] leading-tight">
                {project.title}
              </h3>
            </div>
          </div>
          
          <div className="flex gap-3">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border-2 border-[#D7E2EA]/20 text-[#D7E2EA] hover:bg-[#D7E2EA] hover:text-[#0C0C0C] transition-all"
              >
                <Github size={20} />
              </a>
            )}
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest text-xs flex items-center gap-2 hover:bg-[#D7E2EA] hover:text-[#0C0C0C] transition-all"
              >
                Live <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        {/* IMAGE GRID */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-10 gap-4 min-h-0">
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="relative w-full h-[clamp(130px,16vw,230px)] rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden border border-white/10">
              <img 
                src={project.gridImages.col1_1} 
                alt={`${project.title} 1`} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="relative w-full flex-1 rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden border border-white/10">
              <img 
                src={project.gridImages.col1_2} 
                alt={`${project.title} 2`} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>
          <div className="md:col-span-6 h-full relative rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden border border-white/10">
            <img 
              src={project.gridImages.col2} 
              alt={`${project.title} Main`} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8 sm:p-12">
               <div className="max-w-md space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.slice(0, 3).map((s: string) => (
                      <span key={s} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[8px] uppercase tracking-widest text-white/60 border border-white/5">{s}</span>
                    ))}
                  </div>
                  <p className="text-[#D7E2EA]/60 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
               </div>
            </div>
          </div>
        </div>

        {/* Machine Mode technical overlay */}
        <AnimatePresence>
          {mode === "machine" && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 pointer-events-none p-4 font-mono text-[8px] text-accent flex flex-col justify-between"
            >
              <div className="flex justify-between">
                <span>SYSTEM_IDENT: {project.id.toUpperCase()}</span>
                <span>STATUS: OPERATIONAL</span>
              </div>
              <div className="flex justify-between">
                <span>CORE_STACK: {project.stack.join("::")}</span>
                <span>UUID: {crypto.randomUUID().slice(0, 8)}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
