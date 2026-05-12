"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Cpu, Database, Server, Box, Globe, Shield, Zap } from "lucide-react";
import LazyVideo from "./LazyVideo";
import { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

interface ProjectDetailsModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const TECH_ICONS: Record<string, any> = {
  "Node.js": Server,
  "React": Cpu,
  "Next.js": Globe,
  "Docker": Box,
  "Redis": Database,
  "Kafka": Zap,
  "PostgreSQL": Database,
  "MongoDB": Database,
  "Supabase": Shield,
  "Express": Server,
  "Socket.io": Zap,
  "OpenAI": Cpu,
};

export const ProjectDetailsModal = ({ project, isOpen, onClose }: ProjectDetailsModalProps) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[4000] bg-black/95 backdrop-blur-2xl cursor-zoom-out"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 z-[4001] bg-[#080808] border border-white/10 rounded-[2rem] overflow-hidden flex flex-col shadow-[0_0_100px_rgba(0,0,0,1)]"
          >
            {/* Header / Close Button */}
            <div className="absolute top-6 right-6 md:top-10 md:right-10 z-[2001]">
              <button 
                onClick={onClose}
                aria-label="Close modal"
                className="p-4 md:p-5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all group backdrop-blur-xl shadow-2xl active:scale-90"
              >
                <X className="w-6 h-6 md:w-5 md:h-5 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            <div 
              className="flex-1 overflow-y-auto custom-scrollbar p-6 pt-24 md:p-12 lg:p-16"
              data-lenis-prevent
            >
              <div className="max-w-6xl mx-auto space-y-24">
                
                {/* Hero Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  <div className="space-y-8">
                    <div className="flex flex-col gap-4">
                        <span className="mono text-accent text-xs uppercase tracking-[0.5em]">{project.tagline}</span>
                        <h2 className="text-3xl md:text-7xl font-black uppercase text-white leading-none tracking-tighter">
                          {project.title}
                        </h2>
                    </div>
                    <p className="text-xl text-white/70 font-light leading-relaxed">
                      {project.fullOverview}
                    </p>
                    <div className="flex flex-wrap gap-8 pt-4">
                       {project.github && (
                         <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-accent transition-colors group">
                            <Github className="w-5 h-5" />
                            <span className="mono text-xs uppercase tracking-widest font-bold">Repository</span>
                         </a>
                       )}
                       {project.demo && (
                         <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-accent hover:text-white transition-colors group">
                            <ExternalLink className="w-5 h-5" />
                            <span className="mono text-xs uppercase tracking-widest font-bold">Live_Demo</span>
                         </a>
                       )}
                    </div>
                  </div>

                  <div className="aspect-video relative rounded-[2rem] overflow-hidden border border-white/10 bg-black shadow-2xl">
                     {project.clips && project.clips.length > 0 && (
                       <LazyVideo src={project.clips[0]} active={true} className="w-full h-full object-cover" />
                     )}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                     <div className="absolute bottom-8 left-8 flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                        <span className="mono text-xs text-white/90 uppercase tracking-[0.2em] font-bold">PRODUCTION_FEED_ACTIVE</span>
                     </div>
                  </div>
                </div>

                {/* Tech Stack & Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   <div className="md:col-span-2 space-y-6">
                      <h4 className="mono text-[10px] uppercase tracking-[0.4em] text-white/40">Technology Stack</h4>
                      <div className="flex flex-wrap gap-3">
                         {project.stack.map((tech) => {
                           const Icon = TECH_ICONS[tech] || Box;
                           return (
                             <div key={tech} className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-accent/30 transition-all group">
                                <Icon className="w-4 h-4 text-accent/60 group-hover:text-accent transition-colors" />
                                <span className="mono text-xs uppercase tracking-widest text-white/80">{tech}</span>
                             </div>
                           );
                         })}
                      </div>
                   </div>
                   <div className="grid grid-cols-1 gap-4">
                      {project.stats.map((stat, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-accent/[0.03] border border-accent/10 flex justify-between items-center">
                           <span className="mono text-[9px] uppercase tracking-widest text-white/40">{stat.label}</span>
                           <span className="text-sm font-bold text-white uppercase">{stat.value}</span>
                        </div>
                      ))}
                   </div>
                </div>

                {/* Features & Challenges */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                   <div className="space-y-8">
                      <h4 className="mono text-[10px] uppercase tracking-[0.4em] text-white/40">Core Functionality</h4>
                      <div className="grid grid-cols-1 gap-4">
                         {project.features.map((feature, i) => (
                           <div key={i} className="flex items-start gap-4 group">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
                              <p className="text-white/60 text-lg group-hover:text-white transition-colors">{feature}</p>
                           </div>
                         ))}
                      </div>
                   </div>
                   <div className="space-y-8">
                      <h4 className="mono text-[10px] uppercase tracking-[0.4em] text-white/40">Engineering Challenges</h4>
                      <div className="space-y-6">
                         {project.challenges.map((challenge, i) => (
                           <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                              <span className="mono text-[9px] text-accent/60 uppercase">Challenge_0{i+1}</span>
                              <p className="text-white/80 font-medium">{challenge}</p>
                           </div>
                         ))}
                      </div>
                   </div>
                </div>

                {/* Demonstrates */}
                <div className="pt-16 border-t border-white/5">
                   <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                      <div className="space-y-2">
                         <h4 className="mono text-[10px] uppercase tracking-[0.4em] text-white/40">Expertise Demonstrated</h4>
                         <p className="text-white/60">This project serves as a technical benchmark for:</p>
                      </div>
                      <div className="flex flex-wrap gap-4 justify-center md:justify-end">
                         {project.demonstrates.map((skill, i) => (
                           <span key={i} className="px-5 py-2 rounded-full border border-accent/20 bg-accent/5 text-accent mono text-[10px] uppercase tracking-widest font-bold">
                              {skill}
                           </span>
                         ))}
                      </div>
                   </div>
                </div>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
