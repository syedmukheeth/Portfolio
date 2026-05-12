"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import { useMode } from "@/context/ModeContext";
import { PROJECTS, Project } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Github, ExternalLink, Code2, Database, Shield, Zap, Terminal as TerminalIcon, FileJson, BarChart3, Activity, ArrowRight } from "lucide-react";
import React, { useRef, useEffect } from "react";
import LazyVideo from "../jack/LazyVideo";

export default function Projects() {
  const { mode } = useMode();

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <motion.h2 
              layout
              className={cn(
                "text-3xl md:text-6xl font-bold tracking-tight mb-4 transition-all duration-500",
                mode === "machine" ? "font-mono uppercase text-accent" : "font-sans"
              )}
            >
              {mode === "machine" ? "SYSTEM_REPOSITORIES" : "Engineering Systems"}
            </motion.h2>
            <p className={cn(
              "max-w-xl text-sm md:text-base transition-colors duration-500",
              mode === "machine" ? "text-accent/60 font-mono" : "text-white/40"
            )}>
              {mode === "machine" 
                ? "[ROOT] /dev/portfolio/infrastructure" 
                : "Detailed case studies on infrastructure, distributed computing, and product engineering."}
            </p>
          </div>
          
          {mode === "machine" && (
            <div className="flex gap-4 font-mono text-[10px] text-accent/40">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>LIVE_INDEXING</span>
              </div>
              <div>COMMIT_HASH: 7f3a2b1</div>
            </div>
          )}
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
  const { mode } = useMode();
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "flex flex-col gap-12 transition-all duration-700",
        isEven ? "md:flex-row" : "md:flex-row-reverse",
        mode === "machine" && "gap-4"
      )}
    >
      <AnimatePresence mode="wait">
        {mode === "human" ? (
          <HumanProjectView key="human" project={project} />
        ) : (
          <MachineProjectView key="machine" project={project} />
        )}
      </AnimatePresence>
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
          <h3 className="text-4xl md:text-7xl font-bold mb-4 font-sans tracking-tighter">
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
          "aspect-square md:aspect-video rounded-3xl bg-white/[0.02] border border-white/5 overflow-hidden relative backdrop-blur-3xl group-hover:border-accent/20 transition-all duration-500 video-wrapper",
          project.clips && "p-0" // Remove padding if there's a video
        )}>
          {project.clips ? (
            <div className="absolute inset-0 w-full h-full">
              <LazyVideo
                src={project.clips[0]}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              
              {/* Video Overlay Info */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="text-[10px] font-mono text-accent uppercase tracking-widest">Live_System_Preview</span>
                </div>
                {project.clips.length > 1 && (
                  <div className="flex gap-1">
                    {project.clips.map((_, i) => (
                      <div key={i} className={cn("w-8 h-1 rounded-full bg-white/20", i === 0 && "bg-accent/60")} />
                    ))}
                  </div>
                )}
              </div>

              {/* Scanline Effect */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%] opacity-20" />
            </div>
          ) : (
            <div className="p-12 flex flex-col justify-center h-full">
              {/* Topology Visualization (Fallback) */}
              <div className="relative z-10 space-y-12">
                <div className="flex justify-between items-center px-4">
                   {project.architecture.nodes.map((node, i) => (
                     <motion.div 
                       key={node} 
                       whileHover={{ scale: 1.1, color: "var(--accent)" }}
                       className="flex flex-col items-center gap-3"
                     >
                        <div className="w-16 h-16 rounded-2xl border border-white/10 bg-black/50 flex items-center justify-center text-white/80 shadow-2xl backdrop-blur-xl group-hover:border-accent/30 transition-colors">
                           {i === 0 ? <Code2 size={24} /> : i === 1 ? <Database size={24} /> : i === 2 ? <Zap size={24} /> : <Shield size={24} />}
                        </div>
                        <span className="text-[10px] uppercase tracking-widest text-white/30">{node}</span>
                     </motion.div>
                   ))}
                </div>
                
                <div className="h-px w-full bg-white/5 relative">
                   <motion.div 
                     animate={{ x: ["0%", "100%"] }}
                     transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                     className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-accent to-transparent opacity-40"
                   />
                </div>
    
                <div className="flex flex-wrap justify-center gap-6">
                  {project.architecture.flow.map((flow, i) => (
                    <div key={flow} className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                       <span className="text-[11px] font-mono text-white/30 uppercase tracking-widest">{flow}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        </div>
      </div>
    </motion.div>
  );
}

function MachineProjectView({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="flex flex-col gap-4 w-full font-mono text-accent"
    >
      <div className="flex items-center justify-between border-b border-accent/20 pb-2">
        <div className="flex items-center gap-2">
          <TerminalIcon size={14} />
          <span className="text-xs font-bold uppercase tracking-widest">Repository::{project.title.replace(/\s+/g, '_').toUpperCase()}</span>
        </div>
        <div className="text-[10px] text-accent/40">ID: {project.id}</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Terminal Info */}
        <div className="bg-accent/[0.02] border border-accent/10 rounded p-4 space-y-6">
          <div className="space-y-1">
            <div className="text-[10px] text-accent/40 uppercase tracking-widest flex items-center gap-2">
              <FileJson size={10} /> Schema Definition
            </div>
            <pre className="text-[11px] text-accent/80 leading-relaxed overflow-x-auto p-3 bg-black/50 rounded border border-accent/5">
{`{
  "project": "${project.title}",
  "version": "2.4.0",
  "status": "PRODUCTION_ACTIVE",
  "role": "${project.role}",
  "stack": ${JSON.stringify(project.stack)},
  "meta": {
    "latency": "14ms",
    "uptime": "99.99%",
    "scaling": "AUTO"
  }
}`}
            </pre>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="text-[10px] text-accent/40 uppercase tracking-widest flex items-center gap-2">
                <BarChart3 size={10} /> Metrics
              </div>
              <div className="space-y-1">
                {project.stats.map(stat => (
                  <div key={stat.label} className="flex justify-between text-[11px]">
                    <span className="text-accent/60">{stat.label}:</span>
                    <span>{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-[10px] text-accent/40 uppercase tracking-widest flex items-center gap-2">
                <Activity size={10} /> Infrastructure
              </div>
              <div className="space-y-1">
                {project.architecture.nodes.map(node => (
                  <div key={node} className="flex items-center gap-2 text-[11px]">
                    <div className="w-1 h-1 bg-accent/40 rounded-full" />
                    <span>{node}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* System Logs / Raw Flow */}
        <div className="bg-black border border-accent/10 rounded p-4 flex flex-col h-full overflow-hidden">
          <div className="text-[10px] text-accent/40 uppercase tracking-widest mb-4 flex items-center gap-2">
            <TerminalIcon size={10} /> SYSTEM_LOGS / ARCH_FLOW
          </div>
          <div className="flex-1 font-mono text-[11px] space-y-2 overflow-y-auto max-h-[300px] scrollbar-hide">
            <div className="text-accent/40">[SYS] Initializing infrastructure trace...</div>
            {project.architecture.flow.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <span className="text-accent/20">00:{i+10}</span>
                <span className="text-accent/80 font-bold tracking-tighter">[{step}]</span>
                <span className="text-accent/40">-- protocol: gRPC | status: 200</span>
              </motion.div>
            ))}
            <div className="text-accent/60 mt-4 animate-pulse">_ EXECUTION_COMPLETE (0.14ms)</div>
            
            <div className="mt-8 space-y-1">
               <div className="text-accent/20 text-[9px]">DEBUG_OUTPUT:</div>
               <div className="w-full h-2 bg-accent/5 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ width: ["0%", "85%", "40%", "95%"] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="h-full bg-accent/30"
                  />
               </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-accent/10 flex gap-4">
             <a href={project.github} target="_blank" className="text-[10px] hover:bg-accent hover:text-black px-2 py-1 border border-accent/20 transition-all">GIT_FETCH</a>
             <a href={project.demo} target="_blank" className="text-[10px] hover:bg-accent hover:text-black px-2 py-1 border border-accent/20 transition-all">SYS_EXEC</a>
             {(project.id === "sam-compiler" || project.id === "sam-index" || project.id === "peer-net" || project.id === "sjdc-modernization") && (
               <Link href={`/projects/${project.id}`} className="text-[10px] bg-accent text-black px-2 py-1 border border-accent/20 transition-all font-bold uppercase tracking-widest">READ_CASE_STUDY</Link>
             )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
