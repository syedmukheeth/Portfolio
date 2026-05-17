"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { PROJECTS, Project } from "@/lib/data";
import { cn } from "@/lib/utils";
import { 
  Github, ExternalLink, Code2, Database, Shield, Zap, Terminal as TerminalIcon, FileJson, BarChart3, Activity, ArrowRight,
  Layout, Network, Box, Cpu, Workflow, Search, Lock, Server, Globe
} from "lucide-react";
import React from "react";
import LazyVideo from "../jack/LazyVideo";

const NODE_ICON_MAP: Record<string, any> = {
  "Frontend": Layout,
  "Gateway": Network,
  "Workers": Zap,
  "Docker": Box,
  "ZIP": Box,
  "Pipeline": Workflow,
  "Redis": Database,
  "AI_Engine": Cpu,
  "Socket": Zap,
  "Adapter": Network,
  "Kafka": Database,
  "Consumers": Workflow,
  "Legacy": Database,
  "Bridge": Network,
  "React": Layout,
  "Platform": Cpu,
  "Search": Search,
  "Auth": Lock
};

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <motion.h2 
              layout
              className="text-3xl md:text-6xl font-bold tracking-tight mb-4 font-sans text-white"
            >
              Engineering Systems
            </motion.h2>
            <p className="max-w-xl text-sm md:text-base text-white/40">
              Detailed case studies on infrastructure, distributed computing, and product engineering.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-40">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "flex flex-col gap-12 transition-all duration-700",
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      <HumanProjectView project={project} />
    </motion.div>
  );
}

function HumanProjectView({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      className="flex flex-col md:flex-row gap-12 w-full"
    >
      {/* Content Side */}
      <div className="flex-1 space-y-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
             <span className="text-[10px] font-mono text-accent uppercase tracking-widest px-2 py-1 bg-accent/10 rounded">
               {project.role}
             </span>
          </div>
          <h3 className="text-4xl md:text-7xl font-bold mb-4 font-sans tracking-tighter text-white">
            {project.title}
          </h3>
          <p className="text-xl text-white/60 font-light italic">
            {project.tagline}
          </p>
        </div>

        <p className="text-white/50 leading-relaxed max-w-lg text-lg">
          {project.description}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 border-y border-white/5 py-8">
          {project.stats.map(stat => (
            <div key={stat.label}>
              <div className="text-[10px] uppercase tracking-widest text-white/30 mb-1">{stat.label}</div>
              <div className="text-lg font-mono text-white/80">{stat.value}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.map(tech => (
            <span key={tech} className="text-[10px] px-3 py-1.5 bg-white/5 text-white/60 rounded-full border border-white/10 hover:border-accent/40 transition-colors">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-6">
          {project.github && (
            <a href={project.github} target="_blank" className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors group">
              <Github size={18} className="group-hover:text-accent transition-colors" /> Source Code
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors group">
              <ExternalLink size={18} className="group-hover:text-accent transition-colors" /> Live System
            </a>
          )}
          {(project.id === "sam-compiler" || project.id === "sam-index" || project.id === "peer-net" || project.id === "sjdc-modernization") && (
            <Link href={`/projects/${project.id}`} className="flex items-center gap-2 text-sm text-accent hover:text-white transition-colors group font-semibold">
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /> Read Engineering Case Study
            </Link>
          )}
        </div>
      </div>

      {/* Visualization Side */}
      <div className="flex-1 relative group">
        <div className={cn(
          "aspect-video rounded-3xl bg-white/[0.02] border border-white/5 overflow-hidden relative backdrop-blur-3xl group-hover:border-accent/20 transition-all duration-500 video-wrapper flex items-center justify-center",
          project.clips && "p-0"
        )}>
          {project.clips ? (
            <div className="absolute inset-0 w-full h-full">
              <LazyVideo
                src={project.clips[0]}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="text-[10px] font-mono text-accent uppercase tracking-widest">Live_System_Preview</span>
                </div>
              </div>

              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%] opacity-20" />
            </div>
          ) : (
            <div className="w-full p-12 flex flex-col justify-center h-full">
              <div className="relative z-10 space-y-12">
                <div className="flex justify-between items-center px-4 relative">
                   <div className="absolute top-[32px] left-8 right-8 h-px bg-white/5" />
                   
                   {project.architecture.nodes.map((node, i) => {
                     const Icon = NODE_ICON_MAP[node] || Code2;
                     return (
                       <motion.div 
                         key={node} 
                         whileHover={{ y: -5 }}
                         className="flex flex-col items-center gap-4 relative z-10"
                       >
                          <div className="w-16 h-16 rounded-2xl border border-white/10 bg-black/50 flex items-center justify-center text-white/80 shadow-2xl backdrop-blur-xl group-hover:border-accent/30 group-hover:text-accent transition-all duration-500">
                             <Icon size={24} />
                          </div>
                          <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/30 group-hover:text-white/60 transition-colors">{node}</span>
                       </motion.div>
                     );
                   })}
                </div>
                
                <div className="h-px w-full bg-white/5 relative overflow-hidden">
                   <motion.div 
                     animate={{ x: ["-100%", "100%"] }}
                     transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                     className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-accent to-transparent opacity-20"
                   />
                </div>
    
                <div className="flex flex-wrap justify-center gap-6">
                  {project.architecture.flow.map((flow, i) => (
                    <div key={flow} className="flex items-center gap-2">
                       <div className="w-1 h-1 rounded-full bg-accent/40" />
                       <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">{flow}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        </div>
      </div>
    </motion.div>
  );
}
