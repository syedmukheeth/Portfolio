"use client";

import { motion } from "framer-motion";
import { useMode } from "@/context/ModeContext";
import { cn } from "@/lib/utils";
import { 
  Cpu, 
  Zap, 
  Database, 
  Terminal as TerminalIcon, 
  FileSearch, 
  FileArchive, 
  Activity, 
  Layers, 
  Share2, 
  ArrowRight,
  ExternalLink,
  Github,
  Search,
  Brain,
  Rocket
} from "lucide-react";
import Link from "next/link";

export default function SamIndexPage() {
  const { mode } = useMode();

  return (
    <div className="min-h-screen bg-black text-white selection:bg-accent">
      {/* Back button */}
      <Link 
        href="/" 
        className="fixed top-24 left-8 z-50 flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors"
      >
        <span className="p-1.5 rounded bg-white/5 border border-white/10">←</span>
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
              Intelligence Infrastructure
            </div>
            
            <h1 className={cn(
              "text-6xl md:text-9xl font-bold tracking-tighter leading-[0.9]",
              mode === "machine" ? "font-mono uppercase" : "font-sans"
            )}>
              SAM <br />
              <span className="text-white/20 italic">Index.</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
              <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-xl">
                A high-throughput repository intelligence engine designed to transform massive codebases into AI-ready semantic structures through ZIP-optimized indexing.
              </p>
              <div className="flex gap-4">
                <a href="#" className="flex-1 py-4 px-6 rounded-lg bg-white text-black font-bold flex items-center justify-center gap-2 hover:bg-accent hover:text-white transition-all">
                  Inspect System <Search size={18} />
                </a>
                <a href="#" className="flex-1 py-4 px-6 rounded-lg border border-white/10 text-white/40 font-mono text-xs flex items-center justify-center gap-2 hover:border-accent hover:text-accent transition-all uppercase tracking-widest">
                  View Repo <Github size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* The ZIP Strategy -> The Flex */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-32 mb-40">
          <div className="space-y-12">
            <div>
              <div className="text-[10px] font-mono text-accent uppercase tracking-widest mb-4">01 // THE ARCHITECTURE SHIFT</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Bulk Ingestion vs. API Fragmentation.</h2>
              <p className="text-white/40 leading-relaxed text-lg">
                Traditional indexing tools fail at scale due to thousands of fragmented API calls. SAMIndex bypasses this bottleneck by downloading full repository ZIP archives, extracting them locally, and performing parallel bulk processing. This infrastructure-first approach improves indexing throughput by orders of magnitude.
              </p>
            </div>
            
            <div className="space-y-6">
              <FlexItem title="Zero-API Bottleneck" desc="Bypasses GitHub API rate limits through ZIP streaming." />
              <FlexItem title="Parallel Local Extraction" desc="Multithreaded file system scanning for rapid metadata generation." />
              <FlexItem title="Bulk Database Injection" desc="Optimized SQL writes for large-scale code indexing." />
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <div className="text-[10px] font-mono text-accent uppercase tracking-widest mb-4">02 // AI READINESS</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Semantic Retrieval Layer.</h2>
              <p className="text-white/40 leading-relaxed text-lg">
                SAMIndex isn't just a search engine—it's an intelligence platform. Every indexed repository is prepared for LLM context ingestion, featuring semantic chunking, metadata enrichment, and AI-aware context window optimization.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <FeatureBox icon={<Brain />} title="AI Context Ready" />
               <FeatureBox icon={<Share2 />} title="Redis Orchestration" />
               <FeatureBox icon={<Layers />} title="Semantic Chunking" />
               <FeatureBox icon={<Activity />} title="Live Indexing" />
            </div>
          </div>
        </section>

        {/* Cinematic Video Previews */}
        <section className="mb-60">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((num) => (
                <VideoCard key={num} src={`/clips/SamIndex-${num}.mp4`} num={num} />
              ))}
           </div>
        </section>

        {/* Indexing Pipeline Visualization */}
        <section className="mb-60">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">Indexing Pipeline.</h2>
            <p className="text-white/40 font-mono text-[10px] uppercase tracking-widest">High-Throughput Repository Processing Lifecycle</p>
          </div>

          <div className="relative aspect-video rounded-3xl bg-white/[0.02] border border-white/5 p-8 md:p-20 overflow-hidden group">
            <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
            
            <div className="relative z-10 h-full flex items-center justify-between gap-4">
               {/* Tier 1: Ingest */}
               <ArchStep icon={<FileArchive />} label="ZIP_STREAM" />

               <PipeArrow />

               {/* Tier 2: Extraction */}
               <ArchStep icon={<Zap />} label="EXTRACTOR" sub="Parallel Workers" color="accent" />

               <PipeArrow />

               {/* Tier 3: Queue */}
               <ArchStep icon={<Database />} label="REDIS_QUEUE" sub="BullMQ Sync" />

               <PipeArrow />

               {/* Tier 4: DB/AI */}
               <ArchStep icon={<Brain />} label="AI_CONTEXT" sub="Semantic Store" color="accent" />
            </div>

            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
          </div>
        </section>

        {/* Technical Deep Dive */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-60">
           <DeepDiveCard 
             title="ZIP Streaming Engine" 
             desc="Engineered a custom stream-to-disk extraction pipeline that handles massive repositories without exhausting server memory. Files are processed on-the-fly as they are unzipped, ensuring O(n) space complexity."
             tags={["Streaming", "FS Performance", "O(n) Space"]}
           />
           <DeepDiveCard 
             title="BullMQ Async Orchestration" 
             desc="Implemented a multi-stage indexing queue. This separates the high-IO extraction phase from the high-CPU AI processing phase, allowing for independent scaling of worker pools based on task nature."
             tags={["Redis", "BullMQ", "Parallel Processing"]}
           />
           <DeepDiveCard 
             title="Semantic retrieval Layer" 
             desc="Designed the storage layer to be AI-native. Every file is indexed with metadata that describes its structural relationship within the project, making it instantly consumable by RAG systems."
             tags={["AI", "RAG Infrastructure", "Metadata Design"]}
           />
        </section>

        {/* Infrastructure Narrative */}
        <section className="mb-40 border border-white/10 bg-white/[0.01] rounded-3xl p-12 md:p-20 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 text-accent opacity-20">
              <Rocket size={40} />
           </div>

           <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">Scale by Design.</h2>
              <div className="space-y-8">
                 <ScaleItem 
                   title="ZIP-Native Indexing" 
                   desc="By treating repositories as bulk data units rather than file-by-file entities, we reduced network overhead by 90% compared to traditional GitHub search scrapers." 
                 />
                 <ScaleItem 
                   title="Redis-Backed Fault Tolerance" 
                   desc="Every extraction job is tracked via Redis. If a worker fails, the job is re-enqueued with its current progress, ensuring data integrity across large clusters." 
                 />
                 <ScaleItem 
                   title="AI Context Optimization" 
                   desc="SAMIndex automatically filters non-essential files during indexing, reducing context noise and improving semantic retrieval accuracy for LLM consumption." 
                 />
              </div>
           </div>
        </section>

        {/* Recruiter Positioning */}
        <section className="text-center max-w-4xl mx-auto mb-20">
           <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mx-auto mb-8">
              <Cpu size={24} />
           </div>
           <h3 className="text-2xl md:text-4xl font-bold mb-8 leading-tight">
             SAMIndex is an infrastructure play, <br />
             <span className="text-white/40">designed for the era of repository intelligence.</span>
           </h3>
           <p className="text-white/30 text-lg italic font-light">
             This project demonstrates my proficiency in building data pipelines, optimizing IO-heavy tasks, and architecting systems that bridge the gap between raw code and AI intelligence.
           </p>
        </section>
      </div>
    </div>
  );
}

function FlexItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex gap-4 group">
       <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
       <div>
          <h4 className="text-white font-medium mb-1 tracking-tight">{title}</h4>
          <p className="text-white/30 text-sm leading-relaxed">{desc}</p>
       </div>
    </div>
  );
}

function FeatureBox({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] flex flex-col gap-4 hover:border-accent/20 transition-all group">
       <div className="text-accent group-hover:scale-110 transition-transform">
          {icon}
       </div>
       <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">{title}</div>
    </div>
  );
}

function ArchStep({ icon, label, sub, color = "white" }: { icon: React.ReactNode; label: string; sub?: string; color?: string }) {
  return (
    <div className="flex flex-col items-center gap-4 flex-1">
       <div className={cn(
         "w-20 h-20 rounded-2xl border border-white/10 bg-black flex items-center justify-center transition-all hover:border-accent/40 shadow-2xl relative",
         color === "accent" ? "text-accent border-accent/20" : "text-white/80"
       )}>
          {icon}
          {color === "accent" && (
            <div className="absolute inset-0 bg-accent/5 blur-xl rounded-full" />
          )}
       </div>
       <div className="text-center">
          <div className="text-[10px] font-bold uppercase tracking-widest mb-0.5">{label}</div>
          {sub && <div className="text-[8px] text-white/20 uppercase tracking-tighter">{sub}</div>}
       </div>
    </div>
  );
}

function PipeArrow() {
  return (
    <div className="hidden md:flex flex-1 items-center justify-center relative">
       <div className="w-full h-px bg-white/10 relative">
          <motion.div 
            animate={{ left: ["0%", "100%"] }} 
            transition={{ duration: 2, repeat: Infinity }} 
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-accent/20 rounded-full blur-md" 
          />
       </div>
    </div>
  );
}

function DeepDiveCard({ title, desc, tags }: { title: string; desc: string; tags: string[] }) {
  return (
    <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group flex flex-col justify-between">
       <div>
          <h4 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors tracking-tight">{title}</h4>
          <p className="text-white/40 leading-relaxed mb-8 text-sm">{desc}</p>
       </div>
       <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="text-[8px] px-2 py-1 bg-white/5 text-white/20 rounded-full border border-white/5 uppercase tracking-widest">{tag}</span>
          ))}
       </div>
    </div>
  );
}

function ScaleItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="space-y-2">
       <h4 className="text-lg font-bold text-white flex items-center gap-3">
          <ArrowRight size={14} className="text-accent" />
          {title}
       </h4>
       <p className="text-white/40 text-sm leading-relaxed pl-6">{desc}</p>
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
      className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/5 group transition-all duration-500 hover:border-accent/30 will-change-transform"
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
             <span className="mono text-[8px] uppercase tracking-[0.4em] text-white/20">Hover to Stream</span>
          </div>
       </div>
       
       <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 pointer-events-none" />
       
       <div className="absolute bottom-6 left-6 flex items-center gap-3 pointer-events-none">
          <div className="px-2 py-1 rounded bg-accent/20 border border-accent/40 text-[8px] font-mono text-accent uppercase tracking-widest">
             Ingestion_Pipeline_0{num}
          </div>
          <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
             {isHovered ? "Real_Time_Intelligence_Feed" : "Static_Analysis"}
          </div>
       </div>
       
       <div className="absolute top-6 right-6 flex flex-col items-end gap-1 pointer-events-none">
          <div className="w-12 h-1 bg-accent/40 rounded-full overflow-hidden">
             <motion.div 
               animate={{ width: isHovered ? ["30%", "70%", "50%"] : "10%" }} 
               transition={{ duration: 3.5, repeat: Infinity }} 
               className="h-full bg-accent" 
             />
          </div>
          <div className="text-[8px] font-mono text-accent/60 uppercase">
             {isHovered ? "Bulk_Processing_Active" : "Idle_State"}
          </div>
       </div>
    </div>
  );
}
import React from 'react';
