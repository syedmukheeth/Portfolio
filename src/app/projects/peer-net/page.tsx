"use client";

import { motion } from "framer-motion";
import { useMode } from "@/context/ModeContext";
import { cn } from "@/lib/utils";
import { 
  Zap, 
  Database, 
  MessageSquare, 
  Share2, 
  Users, 
  Activity, 
  Network, 
  ArrowRight,
  ExternalLink,
  Github,
  Radio,
  Server,
  Workflow,
  Sparkles
} from "lucide-react";
import Link from "next/link";

export default function PeerNetPage() {
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
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-[10px] uppercase tracking-widest text-blue-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
              </span>
              Real-time Social Infrastructure
            </div>
            
            <h1 className={cn(
              "text-6xl md:text-9xl font-bold tracking-tighter leading-[0.9]",
              mode === "machine" ? "font-mono uppercase" : "font-sans"
            )}>
              PEER <br />
              <span className="text-white/20 italic">Net.</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
              <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-xl">
                A distributed event-driven communication ecosystem engineered to scale real-time social interactions through a robust Kafka-backed messaging backbone.
              </p>
              <div className="flex gap-4">
                <a href="#" className="flex-1 py-4 px-6 rounded-lg bg-blue-500 text-white font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                  Enter Network <Radio size={18} />
                </a>
                <a href="#" className="flex-1 py-4 px-6 rounded-lg border border-white/10 text-white/40 font-mono text-xs flex items-center justify-center gap-2 hover:border-blue-400 hover:text-blue-400 transition-all uppercase tracking-widest">
                  Architecture <Github size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* The Product -> The Infrastructure */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-32 mb-60">
          <div className="space-y-12">
            <div>
              <div className="text-[10px] font-mono text-blue-400 uppercase tracking-widest mb-4">01 // THE MISSION</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Social at Infrastructure Scale.</h2>
              <p className="text-white/40 leading-relaxed text-lg">
                Modern social platforms require more than just UI; they require a distributed nervous system. PeerNet was built to handle high-frequency social interactions—likes, messages, and state updates—using an event-driven architecture that ensures data consistency and real-time propagation across global nodes.
              </p>
            </div>
            
            <div className="space-y-6">
              <SocialFlexItem icon={<MessageSquare size={18} />} title="Real-time Messaging" desc="Sub-100ms latency for global message propagation." />
              <SocialFlexItem icon={<Network size={18} />} title="Event Mesh" desc="Decoupled services communicating via a Kafka-powered event stream." />
              <SocialFlexItem icon={<Users size={18} />} title="Scalable Social Graph" desc="Optimized Redis caching for instant social connection retrieval." />
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <div className="text-[10px] font-mono text-blue-400 uppercase tracking-widest mb-4">02 // REAL-TIME ORCHESTRATION</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">The WebSocket Backbone.</h2>
              <p className="text-white/40 leading-relaxed text-lg">
                Scaling WebSockets in a distributed environment is a non-trivial engineering challenge. PeerNet utilizes a Redis-backed Socket.io adapter to synchronize connection states across multiple server instances, ensuring that no user is isolated.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <FeatureBox icon={<Radio />} title="Kafka Streaming" />
               <FeatureBox icon={<Share2 />} title="Distributed Sync" />
               <FeatureBox icon={<Server />} title="Socket Clusters" />
               <FeatureBox icon={<Activity />} title="Low Latency" />
            </div>
          </div>
        </section>

        {/* Event Flow Visualization */}
        <section className="mb-60">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">Distributed Event Mesh.</h2>
            <p className="text-white/40 font-mono text-[10px] uppercase tracking-widest">Real-time Propagation Architecture</p>
          </div>

          <div className="relative aspect-video rounded-3xl bg-white/[0.02] border border-white/5 p-8 md:p-20 overflow-hidden group">
            <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
               {/* Tier 1: Client Layer */}
               <div className="flex justify-around">
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity }}>
                    <ArchNode icon={<Users />} label="CLIENT_A" sub="Websocket Conn" />
                  </motion.div>
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }}>
                    <ArchNode icon={<Users />} label="CLIENT_B" sub="Websocket Conn" />
                  </motion.div>
               </div>

               {/* Connections */}
               <div className="flex justify-around h-16">
                  <div className="w-px h-full bg-blue-500/20 relative">
                     <motion.div animate={{ top: ["0%", "100%"] }} transition={{ duration: 1, repeat: Infinity }} className="absolute w-1.5 h-1.5 -left-[2.5px] bg-blue-400 rounded-full blur-[1px]" />
                  </div>
                  <div className="w-px h-full bg-blue-500/20 relative">
                     <motion.div animate={{ top: ["100%", "0%"] }} transition={{ duration: 1, repeat: Infinity }} className="absolute w-1.5 h-1.5 -left-[2.5px] bg-blue-400 rounded-full blur-[1px]" />
                  </div>
               </div>

               {/* Tier 2: Socket/API Layer */}
               <div className="flex justify-center">
                  <ArchNode icon={<Radio />} label="SOCKET_CLUSTER" sub="Redis Adapter" color="blue" />
               </div>

               {/* Tier 3: Event Stream */}
               <div className="mt-8 flex justify-center">
                  <div className="w-full max-w-2xl px-12 py-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 backdrop-blur-3xl relative overflow-hidden group-hover:border-blue-400/40 transition-all">
                     <div className="flex items-center justify-between gap-4 text-blue-400">
                        <Workflow size={24} />
                        <span className="font-mono text-xs font-bold uppercase tracking-[0.3em]">KAFKA_EVENT_BUS_01</span>
                        <Activity size={24} className="animate-pulse" />
                     </div>
                     <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 2.5, repeat: Infinity }} className="absolute bottom-0 left-0 h-[2px] w-60 bg-blue-400/50" />
                  </div>
               </div>

               {/* Tier 4: Background Consumers */}
               <div className="mt-8 flex justify-center gap-12">
                  <ArchNode icon={<Database />} label="PERSISTENCE" sub="MongoDB/Redis" small />
                  <ArchNode icon={<Zap />} label="NOTIFICATIONS" sub="Async Push" small />
               </div>
            </div>

            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
          </div>
        </section>

        {/* Technical Deep Dive */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-60">
           <DeepDiveCard 
             title="Kafka Event Sourcing" 
             desc="Every social interaction is treated as an immutable event. Kafka handles the durability and replayability of these events, allowing us to build a fault-tolerant system where no data is lost during spikes."
             tags={["Kafka", "Event Sourcing", "Durability"]}
           />
           <DeepDiveCard 
             title="Redis Socket Orchestration" 
             desc="Using Redis Pub/Sub, we scaled Socket.io horizontally. This allows thousands of concurrent users to communicate across different server instances as if they were on the same node."
             tags={["Redis Pub/Sub", "Horizontal Scaling", "Websockets"]}
           />
           <DeepDiveCard 
             title="Async Feed Generation" 
             desc="Instead of heavy join queries, feeds are generated asynchronously. Kafka consumers process activity events and pre-compute social feeds into Redis, providing O(1) retrieval for users."
             tags={["Pre-computation", "Caching", "Performance"]}
           />
        </section>

        {/* Product Engineering Narrative */}
        <section className="mb-40 border border-white/10 bg-white/[0.01] rounded-3xl p-12 md:p-20 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 text-blue-400 opacity-20">
              <Sparkles size={40} />
           </div>

           <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">Product Craftsmanship.</h2>
              <div className="space-y-8">
                 <ProductItem 
                   title="Immersive Social UI" 
                   desc="Built with Framer Motion to ensure every interaction—from a message notification to a like animation—feels fluid and tactile." 
                 />
                 <ProductItem 
                   title="Fault-Tolerant Updates" 
                   desc="Even if the database is lagging, the event-driven backbone ensures that message delivery is eventual and guaranteed." 
                 />
                 <ProductItem 
                   title="Real-time Social Awareness" 
                   desc="Presence indicators and activity feeds are synchronized globally with sub-200ms delay, maintaining a sense of community." 
                 />
              </div>
           </div>
        </section>

        {/* Recruiter Positioning */}
        <section className="text-center max-w-4xl mx-auto mb-20">
           <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mx-auto mb-8">
              <Network size={24} />
           </div>
           <h3 className="text-2xl md:text-4xl font-bold mb-8 leading-tight">
             PeerNet is more than a social app; <br />
             <span className="text-white/40">it is an exercise in high-frequency social infrastructure.</span>
           </h3>
           <p className="text-white/30 text-lg italic font-light">
             This project demonstrates my capability to build consumer-facing platforms that are backed by enterprise-grade distributed systems and real-time data pipelines.
           </p>
        </section>
      </div>
    </div>
  );
}

function SocialFlexItem({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex gap-4 group">
       <div className="mt-1.5 p-2 rounded bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
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
    <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] flex flex-col gap-4 hover:border-blue-400/20 transition-all group">
       <div className="text-blue-400 group-hover:scale-110 transition-transform">
          {icon}
       </div>
       <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">{title}</div>
    </div>
  );
}

function ArchNode({ icon, label, sub, color = "white", small = false }: { icon: React.ReactNode; label: string; sub?: string; color?: string; small?: boolean }) {
  return (
    <div className={cn(
      "flex flex-col items-center gap-3",
      color === "blue" ? "text-blue-400" : "text-white/80"
    )}>
       <div className={cn(
         "rounded-2xl border border-white/10 bg-black flex items-center justify-center transition-all hover:border-blue-400/40 shadow-2xl",
         small ? "w-12 h-12" : "w-20 h-20"
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
          <h4 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors tracking-tight">{title}</h4>
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

function ProductItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="space-y-2">
       <h4 className="text-lg font-bold text-white flex items-center gap-3">
          <ArrowRight size={14} className="text-blue-400" />
          {title}
       </h4>
       <p className="text-white/40 text-sm leading-relaxed pl-6">{desc}</p>
    </div>
  );
}
