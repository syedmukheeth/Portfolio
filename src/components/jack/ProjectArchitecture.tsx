"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Zap, 
  Shield, 
  Layout, 
  Network, 
  Box, 
  Cpu, 
  Workflow,
  Search,
  Lock,
  Server,
  Globe
} from "lucide-react";
import { cn } from "@/lib/utils";

const ARCHITECTURES = {
  "sam-compiler": [
    { label: "Frontend", x: 0, y: 50, icon: Layout },
    { label: "Gateway", x: 33, y: 50, icon: Network },
    { label: "Workers", x: 66, y: 50, icon: Zap },
    { label: "Docker", x: 100, y: 50, icon: Box },
  ],
  "sam-index": [
    { label: "ZIP", x: 0, y: 50, icon: Box },
    { label: "Pipeline", x: 33, y: 50, icon: Workflow },
    { label: "Redis", x: 66, y: 50, icon: Database },
    { label: "AI_Engine", x: 100, y: 50, icon: Cpu },
  ],
  "peer-net": [
    { label: "Socket", x: 0, y: 50, icon: Zap },
    { label: "Adapter", x: 33, y: 50, icon: Network },
    { label: "Kafka", x: 66, y: 50, icon: Database },
    { label: "Consumers", x: 100, y: 50, icon: Workflow },
  ],
  "sjdc-modernization": [
    { label: "Legacy", x: 0, y: 50, icon: Database },
    { label: "Bridge", x: 33, y: 50, icon: Network },
    { label: "React", x: 66, y: 50, icon: Layout },
    { label: "Platform", x: 100, y: 50, icon: Cpu },
  ],
};

export const ProjectArchitecture = ({ projectId }: { projectId: string }) => {
  const nodes = ARCHITECTURES[projectId as keyof typeof ARCHITECTURES] || [];

  if (!nodes.length) return null;

  return (
    <div className="w-full h-40 relative mt-12 mono text-[9px] uppercase tracking-widest text-white/40">
      {/* Background Track */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2" />
      
      {nodes.map((node, i) => {
        const Icon = node.icon || Code2;
        
        return (
          <React.Fragment key={i}>
            {/* Connection Line with CSS-based Flow */}
            {i < nodes.length - 1 && (
              <div 
                className="absolute top-1/2 h-px bg-white/10 overflow-hidden"
                style={{ 
                  left: `${10 + (node.x * 0.8)}%`, 
                  width: `${(nodes[i+1].x - node.x) * 0.8}%`,
                  transform: 'translateY(-50%)'
                }}
              >
                <div 
                  className="w-20 h-full bg-gradient-to-r from-transparent via-accent/40 to-transparent animate-flow-line"
                  style={{ 
                    animationDelay: `${i * 0.5}s`,
                  }}
                />
              </div>
            )}

            {/* Node Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
               className="absolute top-1/2 flex flex-col items-center gap-4 group"
              style={{ left: `${10 + (node.x * 0.8)}%`, transform: `translate(-50%, -50%)` }}
            >
              <div className="relative">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl flex items-center justify-center text-white/60 group-hover:text-accent group-hover:border-accent/40 group-hover:bg-accent/5 transition-all duration-500 shadow-2xl">
                   <Icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
              
              <span className="whitespace-nowrap text-[7px] md:text-[8px] font-bold tracking-[0.2em] group-hover:text-white transition-colors">
                {node.label}
              </span>
            </motion.div>
          </React.Fragment>
        );
      })}

      <style jsx>{`
        @keyframes flow-line {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-flow-line {
          animation: flow-line 2.5s linear infinite;
        }
      `}</style>

    </div>
  );
};
