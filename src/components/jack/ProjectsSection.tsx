"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "framer-motion";
import { FadeIn } from "./JackComponents";
import { useMode } from "@/context/ModeContext";
import { PROJECTS as LIB_PROJECTS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Github, ExternalLink } from "lucide-react";
import LazyVideo from "./LazyVideo";

// THE PROJECTS ARE NOW FULLY DRIVEN BY DATA.TS
const PROJECTS = LIB_PROJECTS;

import { ProjectArchitecture } from "./ProjectArchitecture";

export const ProjectsSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section 
      id="projects"
      ref={container} 
      className="bg-black pt-32 pb-40 relative z-30"
    >
      <div className="container max-w-6xl mx-auto px-6 mb-32">
        <FadeIn delay={0} y={40} className="flex flex-col items-center">
           <span className="mono text-accent text-xs uppercase tracking-[0.6em] mb-4">Engineering Portfolio</span>
           <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,120px)] leading-none">
             Projects
           </h2>
        </FadeIn>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-10 flex flex-col gap-32">
        {PROJECTS.map((project, i) => {
          const targetScale = 1 - (PROJECTS.length - 1 - i) * 0.03;
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
      className="h-[85vh] flex items-center justify-center sticky"
      style={{ top: `calc(4rem + ${index * 30}px)` }}
    >
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ 
          scale,
        }}
        className="relative h-full w-full bg-[#050505] border border-white/5 rounded-[40px] p-6 sm:p-10 flex flex-col gap-8 overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,1)] group will-change-transform"
      >
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_100%_0%,rgba(255,77,0,0.03)_0%,transparent_70%)] pointer-events-none" />

        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative z-10">
          <div className="flex items-start gap-8">
            <span className="mono text-white/5 font-bold text-7xl md:text-9xl leading-none select-none">
              0{index + 1}
            </span>
            <div className="flex flex-col pt-2 md:pt-4">
              <span className="mono text-accent text-[10px] uppercase tracking-[0.4em] mb-2">{project.tagline}</span>
              <h3 className="text-white font-black uppercase text-[clamp(1.5rem,4vw,3.5rem)] leading-none tracking-tight">
                {project.title}
              </h3>
              
              <div className="flex gap-4 mt-6">
                 {project.github && (
                   <a href={project.github} className="mono text-[9px] uppercase tracking-widest text-white/60 hover:text-white transition-colors flex items-center gap-2">
                     Source_Code <Github size={10} />
                   </a>
                 )}
                 {project.demo && (
                   <a href={project.demo} className="mono text-[9px] uppercase tracking-widest text-accent hover:text-white transition-colors flex items-center gap-2">
                     Live_Interface <ExternalLink size={10} />
                   </a>
                 )}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 md:max-w-[200px] justify-end">
             {project.stack.map((s: string) => (
               <span key={s} className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] mono text-[8px] uppercase tracking-widest text-white/60">{s}</span>
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
                   <ProjectArchitecture projectId={project.id} />
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
             <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 flex flex-col gap-6">
                <p className="text-white/50 text-sm md:text-base leading-relaxed uppercase tracking-wider font-light">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mono text-[8px] uppercase tracking-[0.2em] text-white/40 border-t border-white/10 pt-6">
                   <div className="flex flex-col gap-1">
                      <span className="text-white/60">Status</span>
                      <span className="text-green-500/80 font-bold">Production_Ready</span>
                   </div>
                   <div className="flex flex-col gap-1">
                      <span className="text-white/60">Complexity</span>
                      <span className="text-white/80 font-bold">High_Performance</span>
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
              className="absolute inset-x-10 bottom-10 pointer-events-none flex justify-between mono text-[7px] text-accent/40"
            >
               <span>ARCH_VERSION: V{index + 1}.0.2</span>
               <span>SYSTEM_REDUNDANCY: ACTIVE</span>
               <span>DATA_FLOW_VERIFIED: TRUE</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
