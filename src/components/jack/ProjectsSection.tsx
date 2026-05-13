"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useInView, useSpring } from "framer-motion";
import { FadeIn } from "./JackComponents";
import { useMode } from "@/context/ModeContext";
import { PROJECTS as LIB_PROJECTS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Github, ExternalLink } from "lucide-react";
import LazyVideo from "./LazyVideo";

// THE PROJECTS ARE NOW FULLY DRIVEN BY DATA.TS
const PROJECTS = LIB_PROJECTS;

import { ProjectDetailsModal } from "./ProjectDetailsModal";
import { ProjectArchitecture } from "./ProjectArchitecture";

export const ProjectsSection = ({ onOpenProject }: { onOpenProject: (project: any) => void }) => {
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section 
      id="projects"
      ref={container} 
      className="bg-black pt-24 pb-40 relative z-40"
    >
      <div className="container max-w-6xl mx-auto px-6 mb-20">
        <FadeIn delay={0} y={40} className="flex flex-col items-center">
           <span className="mono bg-gradient-to-r from-accent via-white to-accent bg-[length:200%_auto] animate-[text-shimmer_5s_linear_infinite] bg-clip-text text-transparent text-[10px] md:text-xs uppercase tracking-[0.8em] mb-4 font-black drop-shadow-[0_0_20px_rgba(255,77,0,0.5)]">
             Engineering Portfolio
           </span>
           <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,120px)] leading-none">
             Projects
           </h2>
        </FadeIn>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-10 relative">
        {PROJECTS.map((project, i) => {
          const targetScale = 1 - (PROJECTS.length - 1 - i) * 0.03;
          return (
            <div key={project.id} className="min-h-[85vh] relative mb-0">
              <ProjectCard 
                index={i} 
                project={project}
                range={[i * (1 / PROJECTS.length), 1]}
                targetScale={targetScale}
                progress={scrollYProgress}
                onOpenDetails={() => onOpenProject(project)}
              />
            </div>
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
  progress,
  onOpenDetails
}: any) => {
  const scaleRaw = useTransform(progress, range, [1, targetScale]);
  const scale = useSpring(scaleRaw, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const { mode } = useMode();
  const [isHovered, setIsHovered] = React.useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { 
    margin: "-10% 0px -10% 0px", // Trigger when partially in view
    once: false 
  });

  return (
    <div 
      ref={containerRef} 
      className="h-auto min-h-[75vh] flex items-center justify-center sticky py-10"
      style={{ top: `calc(clamp(80px, 12vh, 120px) + ${index * 20}px)` }}
    >
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ 
          scale,
        }}
        className="relative h-auto w-full bg-[#050505] border border-white/5 rounded-[40px] p-6 sm:p-10 flex flex-col gap-8 overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,1)] group will-change-transform glass-shine"
      >
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_100%_0%,rgba(255,77,0,0.03)_0%,transparent_70%)] pointer-events-none" />

        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 relative z-10">
          <div className="flex items-start gap-8">
            <span className="mono text-white/40 font-black text-6xl md:text-9xl leading-none select-none drop-shadow-[0_0_30px_rgba(255,255,255,0.05)]">
              0{index + 1}
            </span>
            <div className="flex flex-col pt-2">
              <span className="mono text-accent text-xs uppercase tracking-[0.5em] mb-2 font-bold">{project.tagline}</span>
              <h3 className="text-white font-black uppercase text-[clamp(1.5rem,4vw,3.2rem)] leading-tight tracking-tight">
                {project.title}
              </h3>
              
              <div className="flex gap-6 mt-8 items-center">
                  <button 
                    onClick={onOpenDetails}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    aria-label={`View details for ${project.title}`}
                    className={cn(
                      "px-8 py-3.5 rounded-full mono text-[11px] font-black uppercase tracking-widest transition-all duration-300 shadow-xl active:scale-95",
                      isHovered ? "bg-[#FF4D00] text-white" : "bg-white text-black"
                    )}
                  >
                    KNOW MORE
                  </button>
                  <div className="flex gap-6">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label={`View ${project.title} source code on GitHub`}
                        className="mono text-[10px] uppercase tracking-widest text-white/60 hover:text-white transition-colors flex items-center gap-2"
                      >
                        <Github size={12} className="opacity-60" /> Source
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label={`View ${project.title} live interface`}
                        className="mono text-[10px] uppercase tracking-widest text-accent/80 hover:text-accent transition-colors flex items-center gap-2"
                      >
                        <ExternalLink size={12} className="opacity-60" /> Interface
                      </a>
                    )}
                  </div>
               </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 md:max-w-[280px] justify-end">
             {project.stack.map((s: string) => (
               <span key={s} className="px-3 py-1.5 rounded-full border border-white/20 bg-white/[0.06] mono text-[9px] uppercase tracking-widest text-white/90 font-medium">
                 {s}
               </span>
             ))}
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-0 relative z-10">
          
          {/* Main Visual Showcase */}
          <div className="lg:col-span-7 flex flex-col gap-6">
             <div className="aspect-video relative rounded-3xl overflow-hidden glass group-hover:border-white/10 transition-colors duration-500 bg-black/40 video-wrapper">
                {project.clips && project.clips.length > 0 && (
                  <LazyVideo 
                    src={project.clips[0]}
                    active={isInView || isHovered}
                    priority={index === 0}
                    className="w-full h-full object-cover"
                  />
                )}
                
                {/* Subtle depth overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-8 left-8 right-8 pointer-events-none">
                   <AnimatePresence>
                     {(isInView || isHovered) && (
                       <motion.div
                         initial={{ opacity: 0, y: 10 }}
                         animate={{ opacity: 1, y: 0 }}
                         exit={{ opacity: 0, y: 10 }}
                         transition={{ duration: 0.5 }}
                       >
                         <ProjectArchitecture projectId={project.id} />
                       </motion.div>
                     )}
                   </AnimatePresence>
                </div>

                {/* Video Indicator Overlay */}
                {project.clips && project.clips.length > 0 && (
                  <div className="absolute top-6 left-6 flex items-center gap-2 pointer-events-none">
                    <div className={cn(
                      "w-1.5 h-1.5 rounded-full transition-colors duration-500",
                      (isInView || isHovered) ? "bg-accent animate-pulse" : "bg-white/20"
                    )} />
                    <span className="mono text-[8px] text-accent uppercase tracking-widest font-bold">
                       {(isInView || isHovered) ? "System_Live_Feed" : "Static_Analysis"}
                    </span>
                  </div>
                )}
             </div>
          </div>

          {/* Project Details */}
          <div className="lg:col-span-5 flex flex-col justify-end gap-6">
             <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col gap-8 shadow-inner">
                <p className="text-white/70 text-[15px] md:text-[17px] leading-relaxed font-medium">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-2 gap-8 mono text-[10px] uppercase tracking-[0.2em] border-t border-white/10 pt-8">
                   <div className="flex flex-col gap-2">
                      <span className="text-white/60">System_Status</span>
                      <span className="text-green-400 font-black flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        PROD_READY
                      </span>
                   </div>
                   <div className="flex flex-col gap-2">
                      <span className="text-white/60">Architecture</span>
                      <span className="text-white font-black">HIGH_LOAD_OK</span>
                   </div>
                </div>
             </div>
          </div>

        </div>

        {/* Machine Mode Technical HUD */}
        <AnimatePresence>
          {mode === "machine" && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-x-10 bottom-10 pointer-events-none flex justify-between mono text-[7px] text-accent/60"
            >
               <span>ARCH_VERSION: V{index + 1}.0.2</span>
               <span className="animate-pulse">MD_NEGOTIATION: READY</span>
               <span>SYSTEM_REDUNDANCY: ACTIVE</span>
               <span>DATA_FLOW_VERIFIED: TRUE</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
