"use client";

import { motion } from "framer-motion";
import { useMode } from "@/context/ModeContext";
import { cn } from "@/lib/utils";
import { 
  Globe,
  Shield, 
  Cpu, 
  Zap, 
  Database, 
  Terminal as TerminalIcon, 
  Code2, 
  Box, 
  Share2, 
  Lock, 
  Workflow, 
  Server,
  Layers,
  ArrowRight,
  ExternalLink,
  Github
} from "lucide-react";
import Link from "next/link";

export default function SamCompilerPage() {
  const { mode } = useMode();

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white transition-colors duration-500">
      {/* Back button */}
      <Link 
        href="/" 
        className="fixed top-24 left-8 z-50 flex items-center gap-2 text-[10px] uppercase tracking-widest text-foreground/40 hover:text-foreground transition-colors"
      >
        <span className="p-1.5 rounded bg-foreground/5 border border-foreground/10">←</span>
        Back to System
      </Link>

      <div className="container max-w-6xl mx-auto px-4 pt-40 pb-20">
        {/* Cinematic Hero */}
        <section className="mb-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-[10px] uppercase tracking-widest text-accent">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Production Grade Infrastructure
            </div>
            
            <h1 className={cn(
              "text-6xl md:text-9xl font-bold tracking-tighter leading-[0.9]",
              mode === "machine" ? "font-mono uppercase" : "font-sans"
            )}>
              SAM <br />
              <span className="text-foreground/20 italic">Compiler.</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
              <p className="text-xl md:text-2xl text-foreground/60 font-light leading-relaxed max-w-xl">
                A distributed cloud-native IDE designed for secure, collaborative code execution within ephemeral, kernel-level isolated sandboxes.
              </p>
              <div className="flex gap-4">
                <a href="#" className="flex-1 py-4 px-6 rounded-lg bg-foreground text-background font-bold flex items-center justify-center gap-2 hover:bg-accent hover:text-white transition-all">
                  Launch Platform <ExternalLink size={18} />
                </a>
                <a href="#" className="flex-1 py-4 px-6 rounded-lg border border-foreground/10 text-foreground/40 font-mono text-xs flex items-center justify-center gap-2 hover:border-accent hover:text-accent transition-all uppercase tracking-widest">
                  View Repo <Github size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* The Problem -> Solution */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-32 mb-40">
          <div className="space-y-12">
            <div>
              <div className="text-[10px] font-mono text-accent uppercase tracking-widest mb-4">01 // THE CHALLENGE</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">The Security-Latency Paradox.</h2>
              <p className="text-foreground/40 leading-relaxed text-lg">
                Direct execution of untrusted code in a multi-tenant environment is inherently dangerous. Traditional solutions sacrifice latency for security, or synchronization for simplicity. We needed a system that provided kernel-level isolation without compromising the real-time collaborative experience.
              </p>
            </div>
            
            <div className="space-y-6">
              <ProblemItem title="Code Injection Vulnerabilities" desc="Untrusted user input executed at high privileges." />
              <ProblemItem title="Resource Starvation" desc="Infinite loops or memory leaks crashing the primary engine." />
              <ProblemItem title="Synchronization Drift" desc="State inconsistencies in real-time collaborative editing." />
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <div className="text-[10px] font-mono text-accent uppercase tracking-widest mb-4">02 // THE INFRASTRUCTURE</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Orchestrated Isolation.</h2>
              <p className="text-foreground/40 leading-relaxed text-lg">
                SAM Compiler solves this through a multi-tier orchestration layer. Every execution request is decoupled from the main thread, queued via BullMQ, and dispatched to a pool of ephemeral Docker workers that exist only for the duration of the task.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <SolutionBox icon={<Box />} title="Container Isolation" />
               <SolutionBox icon={<Share2 />} title="CRDT Sync" />
               <SolutionBox icon={<Workflow />} title="Distributed Ops" />
               <SolutionBox icon={<Shield />} title="Zero-Trust" />
            </div>
          </div>
        </section>

        {/* Cinematic Video Previews */}
        <section className="mb-60">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((num) => (
                <VideoCard key={num} src={`/clips/SamCompiler-${num}.mp4`} num={num} />
              ))}
           </div>
        </section>

        {/* Architecture Visualization */}
        <section className="mb-60">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">System Topology.</h2>
            <p className="text-foreground/40 font-mono text-[10px] uppercase tracking-widest">Distributed Request Lifecycle Architecture</p>
          </div>

          <div className="relative aspect-video rounded-3xl bg-foreground/[0.02] border border-foreground/5 p-8 md:p-20 overflow-hidden group">
            <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
               {/* Tier 1: Ingest */}
               <div className="flex justify-center">
                  <ArchNode icon={<Globe />} label="CLIENT_INGEST" color="accent" />
               </div>

               {/* Connections */}
               <div className="flex justify-center h-20">
                  <div className="w-px h-full bg-gradient-to-b from-accent/50 to-foreground/10 relative">
                     <motion.div animate={{ top: ["0%", "100%"] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute w-2 h-2 -left-[3.5px] bg-accent rounded-full blur-[2px]" />
                  </div>
               </div>

               {/* Tier 2: Control Plane */}
               <div className="grid grid-cols-2 gap-40 max-w-3xl mx-auto w-full">
                  <ArchNode icon={<Shield />} label="GATEWAY_AUTH" sub="RBAC Protocol" />
                  <ArchNode icon={<Database />} label="REDIS_QUEUE" sub="BullMQ Orchestration" />
               </div>

               {/* Connections */}
               <div className="flex justify-around h-20">
                  <div className="w-px h-full bg-foreground/10" />
                  <div className="w-px h-full bg-foreground/10" />
               </div>

               {/* Tier 3: Workers */}
               <div className="flex justify-between gap-4">
                  {[...Array(4)].map((_, i) => (
                    <ArchNode key={i} icon={<Cpu />} label={`WORKER_0${i+1}`} sub="Execution Agent" small />
                  ))}
               </div>

               {/* Tier 4: Isolation */}
               <div className="mt-20 flex justify-center gap-8">
                  <div className="px-12 py-6 rounded-2xl border border-foreground/5 bg-accent/5 backdrop-blur-3xl relative overflow-hidden group-hover:border-accent/20 transition-all">
                     <div className="flex items-center gap-4 text-accent">
                        <Box size={24} />
                        <span className="font-mono text-xs font-bold uppercase tracking-widest">Kernel-Level Docker Sandbox Pool</span>
                     </div>
                     <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 3, repeat: Infinity }} className="absolute bottom-0 left-0 h-[2px] w-40 bg-accent/30" />
                  </div>
               </div>
            </div>

            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
          </div>
        </section>

        {/* Technical Deep Dive */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-60">
           <DeepDiveCard 
             title="CRDT-Based Synchronization" 
             desc="Implemented Yjs-inspired CRDTs for real-time collaboration. This ensures that every developer maintains a consistent state without a central 'lock' mechanism, enabling conflict-free editing across distributed nodes."
             tags={["Conflict-Resolution", "Real-time", "Operational Transform"]}
           />
           <DeepDiveCard 
             title="BullMQ Worker Pool" 
             desc="Execution tasks are managed through a robust Redis-backed queue. This allows for horizontal scaling of workers, dead-letter queue management, and prioritized execution of critical system tasks."
             tags={["Redis", "Orchestration", "Task Queuing"]}
           />
           <DeepDiveCard 
             title="Ephemeral Sandboxing" 
             desc="Each code execution request triggers a fresh, isolated Docker container. Resource limits are strictly enforced at the container level to prevent memory leaks or CPU abuse from affecting the control plane."
             tags={["Docker", "Virtualization", "Security"]}
           />
        </section>

        {/* Scaling Philosophy */}
        <section className="mb-40 border border-foreground/10 bg-foreground/[0.01] rounded-3xl p-12 md:p-20 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8">
              <Layers size={40} className="text-accent opacity-20" />
           </div>

           <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">Scaling Intelligence.</h2>
              <div className="space-y-8">
                 <ScalingItem 
                   title="Horizontal Worker Scaling" 
                   desc="The worker pool automatically expands based on the Redis queue depth, ensuring low latency during peak usage." 
                 />
                 <ScalingItem 
                   title="State De-serialization" 
                   desc="Code states are de-serialized into ephemeral storage, allowing any worker to pick up any task without localized dependencies." 
                 />
                 <ScalingItem 
                   title="Global Fault Tolerance" 
                   desc="Isolated workers mean a single container failure doesn't affect the IDE session. The orchestrator automatically retries failed executions." 
                 />
              </div>
           </div>
        </section>

        {/* Recruiter Positioning */}
        <section className="text-center max-w-4xl mx-auto mb-20">
           <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mx-auto mb-8">
              <Zap size={24} />
           </div>
           <h3 className="text-2xl md:text-4xl font-bold mb-8 leading-tight">
             Building SAM Compiler wasn't about the code; <br />
             <span className="text-foreground/40">it was about the infrastructure that supports it.</span>
           </h3>
           <p className="text-foreground/30 text-lg italic font-light">
             This project demonstrates my ability to design distributed systems, manage secure execution environments, and architect production-ready cloud platforms from the ground up.
           </p>
        </section>
      </div>
    </div>
  );
}

function ProblemItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex gap-4 group">
       <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
       <div>
          <h4 className="text-foreground font-medium mb-1">{title}</h4>
          <p className="text-foreground/30 text-sm">{desc}</p>
       </div>
    </div>
  );
}

function SolutionBox({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="p-6 rounded-xl border border-foreground/5 bg-foreground/[0.02] flex flex-col gap-4 hover:border-accent/20 transition-all group">
       <div className="text-accent group-hover:scale-110 transition-transform">
          {icon}
       </div>
       <div className="text-xs font-bold uppercase tracking-widest text-foreground/60 group-hover:text-foreground transition-colors">{title}</div>
    </div>
  );
}

function ArchNode({ icon, label, sub, color = "white", small = false }: { icon: React.ReactNode; label: string; sub?: string; color?: string; small?: boolean }) {
  return (
    <div className={cn(
      "flex flex-col items-center gap-3",
      color === "accent" ? "text-accent" : "text-foreground"
    )}>
       <div className={cn(
         "rounded-xl border border-foreground/10 bg-black flex items-center justify-center transition-all hover:border-accent/40",
         small ? "w-12 h-12" : "w-16 h-16"
       )}>
          {icon}
       </div>
       <div className="text-center">
          <div className="text-[10px] font-bold uppercase tracking-widest mb-0.5">{label}</div>
          {sub && <div className="text-[8px] text-foreground/20 uppercase tracking-tighter">{sub}</div>}
       </div>
    </div>
  );
}

function DeepDiveCard({ title, desc, tags }: { title: string; desc: string; tags: string[] }) {
  return (
    <div className="p-8 rounded-3xl border border-foreground/5 bg-foreground/[0.01] hover:bg-foreground/[0.03] transition-all group flex flex-col justify-between">
       <div>
          <h4 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">{title}</h4>
          <p className="text-foreground/40 leading-relaxed mb-8 text-sm">{desc}</p>
       </div>
       <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="text-[8px] px-2 py-1 bg-foreground/5 text-foreground/20 rounded-full border border-foreground/5 uppercase tracking-widest">{tag}</span>
          ))}
       </div>
    </div>
  );
}

function ScalingItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="space-y-2">
       <h4 className="text-lg font-bold text-foreground flex items-center gap-3">
          <ArrowRight size={14} className="text-accent" />
          {title}
       </h4>
       <p className="text-foreground/40 text-sm leading-relaxed pl-6">{desc}</p>
    </div>
  );
}

function VideoCard({ src, num }: { src: string; num: number }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  
  React.useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered]);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative aspect-video rounded-2xl overflow-hidden border border-foreground/10 bg-foreground/5 group transition-all duration-500 hover:border-accent/30 will-change-transform"
    >
       {/* Persistent Video Element for Zero Latency */}
       <video 
         ref={videoRef}
         src={src} 
         muted 
         loop 
         playsInline 
         preload="metadata"
         className={cn(
           "w-full h-full object-cover transition-opacity duration-500 absolute inset-0",
           isHovered ? "opacity-100" : "opacity-0"
         )} 
       />

       {/* Placeholder UI */}
       <div className={cn(
         "w-full h-full bg-black/40 flex items-center justify-center transition-opacity duration-500",
         isHovered ? "opacity-0" : "opacity-100"
       )}>
          <div className="flex flex-col items-center gap-4">
             <div className="w-12 h-12 rounded-full border border-accent/20 flex items-center justify-center text-accent/40 animate-pulse">
                <TerminalIcon size={20} />
             </div>
             <span className="mono text-[8px] uppercase tracking-[0.4em] text-foreground/20">Hover to Stream</span>
          </div>
       </div>
       
       <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 pointer-events-none" />
       
       <div className="absolute bottom-6 left-6 flex items-center gap-3 pointer-events-none">
          <div className="px-2 py-1 rounded bg-accent/20 border border-accent/40 text-[8px] font-mono text-accent uppercase tracking-widest">
             Execution_Trace_0{num}
          </div>
          <div className="text-[10px] font-mono text-foreground/40 uppercase tracking-widest">
             {isHovered ? "Sandbox_Isolation_Monitor" : "Static_Analysis"}
          </div>
       </div>
       
       <div className="absolute top-6 right-6 flex flex-col items-end gap-1 pointer-events-none">
          <div className="w-12 h-1 bg-accent/40 rounded-full overflow-hidden">
             <motion.div 
               animate={{ width: isHovered ? ["10%", "90%", "30%"] : "5%" }} 
               transition={{ duration: 4, repeat: Infinity }} 
               className="h-full bg-accent" 
             />
          </div>
          <div className="text-[8px] font-mono text-accent/60 uppercase">
             {isHovered ? "Kernel_Audit_Log" : "Idle_State"}
          </div>
       </div>
    </div>
  );
}
import React from 'react';
