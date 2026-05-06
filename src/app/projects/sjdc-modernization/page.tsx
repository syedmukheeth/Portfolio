"use client";

import { motion } from "framer-motion";
import { useMode } from "@/context/ModeContext";
import { cn } from "@/lib/utils";
import { 
  ShieldCheck, 
  RefreshCw, 
  LayoutGrid, 
  Database, 
  Workflow, 
  Cpu, 
  Lock, 
  Zap, 
  Layers, 
  ArrowRight,
  ExternalLink,
  Github,
  Building2,
  Users,
  BrainCircuit,
  Settings2
} from "lucide-react";
import Link from "next/link";

export default function SjdcModernizationPage() {
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
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-green-500/20 bg-green-500/5 text-[10px] uppercase tracking-widest text-green-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
              </span>
              Enterprise Modernization Initiative
            </div>
            
            <h1 className={cn(
              "text-6xl md:text-9xl font-bold tracking-tighter leading-[0.9]",
              mode === "machine" ? "font-mono uppercase" : "font-sans"
            )}>
              SJDC <br />
              <span className="text-white/20 italic">Modern.</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
              <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-xl">
                A large-scale institutional digital transformation, replacing legacy academic systems with a high-performance, real-time React architecture and a zero-trust security model.
              </p>
              <div className="flex gap-4">
                <a href="#" className="flex-1 py-4 px-6 rounded-lg bg-green-600 text-white font-bold flex items-center justify-center gap-2 hover:bg-green-700 transition-all shadow-[0_0_20px_rgba(22,163,74,0.3)]">
                  Access Platform <Building2 size={18} />
                </a>
                <a href="#" className="flex-1 py-4 px-6 rounded-lg border border-white/10 text-white/40 font-mono text-xs flex items-center justify-center gap-2 hover:border-green-400 hover:text-green-400 transition-all uppercase tracking-widest">
                  Migration Log <Github size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* The Legacy -> Modern Narrative */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-32 mb-60">
          <div className="space-y-12">
            <div>
              <div className="text-[10px] font-mono text-green-400 uppercase tracking-widest mb-4">01 // THE MODERNIZATION</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Zero-Disruption Transformation.</h2>
              <p className="text-white/40 leading-relaxed text-lg">
                The primary engineering challenge was modernizing a production institutional system without interrupting critical academic workflows. We implemented a progressive migration strategy using compatibility wrappers, allowing legacy services to coexist with the new React ecosystem while data was migrated in parallel.
              </p>
            </div>
            
            <div className="space-y-6">
              <ModernItem icon={<RefreshCw size={18} />} title="Progressive Migration" desc="Step-by-step decoupling of legacy modules." />
              <ModernItem icon={<Layers size={18} />} title="Compatibility Layer" desc="Unified API wrapper bridging legacy DBs and modern GraphQL/REST." />
              <ModernItem icon={<Zap size={18} />} title="Headless Architecture" desc="Decoupling institutional logic from the UI for maximum agility." />
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <div className="text-[10px] font-mono text-green-400 uppercase tracking-widest mb-4">02 // INSTITUTIONAL SECURITY</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Zero-Trust Authorization.</h2>
              <p className="text-white/40 leading-relaxed text-lg">
                Security in an academic environment is paramount. We moved away from monolithic permission checks to database-level Row Level Security (RLS) via Supabase. This ensures that every academic record is protected at the kernel level of the database, regardless of the entry point.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <FeatureBox icon={<Lock />} title="Supabase RLS" />
               <FeatureBox icon={<ShieldCheck />} title="Zero-Trust" />
               <FeatureBox icon={<Users />} title="RBAC Management" />
               <FeatureBox icon={<BrainCircuit />} title="AI-Assisted" />
            </div>
          </div>
        </section>

        {/* Migration Flow Visualization */}
        <section className="mb-60">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">Migration Architecture.</h2>
            <p className="text-white/40 font-mono text-[10px] uppercase tracking-widest">Progressive Institutional Transformation Pipeline</p>
          </div>

          <div className="relative aspect-video rounded-3xl bg-white/[0.02] border border-white/5 p-8 md:p-20 overflow-hidden group">
            <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
               {/* Tier 1: Legacy */}
               <div className="flex justify-center opacity-40">
                  <ArchNode icon={<Settings2 />} label="LEGACY_INFRA" sub="Legacy PHP/DB" />
               </div>

               {/* Connections */}
               <div className="flex justify-center h-16">
                  <div className="w-px h-full bg-gradient-to-b from-white/10 to-green-500/50" />
               </div>

               {/* Tier 2: Migration Layer */}
               <div className="flex justify-center">
                  <div className="px-12 py-6 rounded-2xl border border-green-500/20 bg-green-500/5 backdrop-blur-3xl relative overflow-hidden group-hover:border-green-400/40 transition-all">
                     <div className="flex items-center gap-8 text-green-400">
                        <RefreshCw size={24} className="animate-spin-slow" />
                        <span className="font-mono text-xs font-bold uppercase tracking-[0.4em]">COMPATIBILITY_WRAPPER_V2.0</span>
                        <Workflow size={24} />
                     </div>
                     <motion.div animate={{ left: ["-100%", "200%"] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-0 left-0 h-[1px] w-40 bg-green-400/50" />
                  </div>
               </div>

               {/* Tier 3: Modern SPA */}
               <div className="mt-8 flex justify-around">
                  <ArchNode icon={<LayoutGrid />} label="REACT_19_SPA" sub="Vite 8 Optimized" color="green" />
                  <ArchNode icon={<Database />} label="SUPABASE_CORE" sub="Realtime Sync" color="green" />
               </div>

               {/* Tier 4: Output */}
               <div className="mt-8 flex justify-center">
                  <div className="flex items-center gap-4 text-white/20">
                     <div className="w-12 h-px bg-white/5" />
                     <span className="text-[10px] font-mono uppercase tracking-widest">Operational Production Environment</span>
                     <div className="w-12 h-px bg-white/5" />
                  </div>
               </div>
            </div>

            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none" />
          </div>
        </section>

        {/* Technical Deep Dive */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-60">
           <DeepDiveCard 
             title="Progressive Migration Strategy" 
             desc="Engineered a zero-downtime transition by wrapping legacy endpoints in a modern unified API layer. This allowed us to build the new React frontend while the backend was still being refactored, ensuring institutional continuity."
             tags={["Legacy Refactoring", "Zero-Downtime", "API Wrapping"]}
           />
           <DeepDiveCard 
             title="Supabase RLS & Security" 
             desc="Implemented strict database-level authorization. By leveraging Supabase Row Level Security, we ensured that sensitive academic data (grades, records) are filtered at the source based on the authenticated user's session."
             tags={["RLS Security", "PostgreSQL", "Zero-Trust"]}
           />
           <DeepDiveCard 
             title="Real-time Academic Engine" 
             desc="Built real-time collaboration features for academic workflows using Postgres changes. Notifications, document edits, and status updates are propagated instantly across campus without page refreshes."
             tags={["Real-time", "Pub/Sub", "Websockets"]}
           />
        </section>

        {/* Product Engineering Narrative */}
        <section className="mb-40 border border-white/10 bg-white/[0.01] rounded-3xl p-12 md:p-20 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 text-green-400 opacity-20">
              <Cpu size={40} />
           </div>

           <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">Enterprise Value.</h2>
              <div className="space-y-8">
                 <ValueItem 
                   title="Operational Efficiency" 
                   desc="Modernized academic workflows, reducing manual data entry by 60% through automated forms and real-time state management." 
                 />
                 <ValueItem 
                   title="Future-Proof Architecture" 
                   desc="Built using React 19 and Vite 8, ensuring the platform remains at the edge of performance and maintainability for the next decade." 
                 />
                 <ValueItem 
                   title="AI-Powered Retrieval" 
                   desc="Integrated a knowledge retrieval system that allows faculty to instantly query institutional documentation using semantic search." 
                 />
              </div>
           </div>
        </section>

        {/* Recruiter Positioning */}
        <section className="text-center max-w-4xl mx-auto mb-20">
           <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-400 mx-auto mb-8">
              <ShieldCheck size={24} />
           </div>
           <h3 className="text-2xl md:text-4xl font-bold mb-8 leading-tight">
             SJDC Modernization was a mission of resilience, <br />
             <span className="text-white/40">bringing legacy institutional systems into the real-time era.</span>
           </h3>
           <p className="text-white/30 text-lg italic font-light">
             This project demonstrates my ability to handle complex enterprise migrations, architect secure database systems, and deliver production-grade institutional platforms.
           </p>
        </section>
      </div>
    </div>
  );
}

function ModernItem({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex gap-4 group">
       <div className="mt-1.5 p-2 rounded bg-green-500/10 text-green-400 group-hover:bg-green-500 group-hover:text-white transition-all">
          {icon}
       </div>
       <div>
          <h4 className="text-white font-medium mb-1 tracking-tight">{title}</h4>
          <p className="text-white/30 text-sm leading-relaxed">{desc}</p>
       </div>
    </div>
  );
}

function FeatureBox({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] flex flex-col gap-4 hover:border-green-400/20 transition-all group">
       <div className="text-green-400 group-hover:scale-110 transition-transform">
          {icon}
       </div>
       <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">{title}</div>
    </div>
  );
}

function ArchNode({ icon, label, sub, color = "white" }: { icon: React.ReactNode; label: string; sub?: string; color?: string }) {
  return (
    <div className={cn(
      "flex flex-col items-center gap-3",
      color === "green" ? "text-green-400" : "text-white/80"
    )}>
       <div className={cn(
         "w-20 h-20 rounded-2xl border border-white/10 bg-black flex items-center justify-center transition-all hover:border-green-400/40 shadow-2xl",
         color === "green" ? "border-green-500/20 shadow-green-500/5" : ""
       )}>
          {icon}
       </div>
       <div className="text-center">
          <div className="text-[10px] font-bold uppercase tracking-widest mb-0.5">{label}</div>
          {sub && <div className="text-[8px] text-white/20 uppercase tracking-tighter">{sub}</div>}
       </div>
    </div>
  );
}

function DeepDiveCard({ title, desc, tags }: { title: string; desc: string; tags: string[] }) {
  return (
    <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group flex flex-col justify-between">
       <div>
          <h4 className="text-2xl font-bold mb-4 group-hover:text-green-400 transition-colors tracking-tight">{title}</h4>
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

function ValueItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="space-y-2">
       <h4 className="text-lg font-bold text-white flex items-center gap-3">
          <ArrowRight size={14} className="text-green-400" />
          {title}
       </h4>
       <p className="text-white/40 text-sm leading-relaxed pl-6">{desc}</p>
    </div>
  );
}
