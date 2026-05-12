"use client";

import React from "react";
import { motion } from "framer-motion";

const ARCHITECTURES = {
  "sam-compiler": [
    { label: "Frontend", x: 0, y: 50 },
    { label: "Gateway", x: 33, y: 50 },
    { label: "Workers", x: 66, y: 50 },
    { label: "Docker", x: 100, y: 50 },
  ],
  "sam-index": [
    { label: "ZIP", x: 0, y: 50 },
    { label: "Pipeline", x: 33, y: 50 },
    { label: "Redis", x: 66, y: 50 },
    { label: "AI_Engine", x: 100, y: 50 },
  ],
  "peer-net": [
    { label: "Socket", x: 0, y: 50 },
    { label: "Adapter", x: 33, y: 50 },
    { label: "Kafka", x: 66, y: 50 },
    { label: "Consumers", x: 100, y: 50 },
  ],
  "sjdc-modernization": [
    { label: "Legacy", x: 0, y: 50 },
    { label: "Bridge", x: 33, y: 50 },
    { label: "React", x: 66, y: 50 },
    { label: "Platform", x: 100, y: 50 },
  ],
};

export const ProjectArchitecture = ({ projectId }: { projectId: string }) => {
  const nodes = ARCHITECTURES[projectId as keyof typeof ARCHITECTURES] || [];

  if (!nodes.length) return null;

  return (
    <div className="w-full h-24 relative mt-6 mono text-[8px] uppercase tracking-widest text-white/40">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2" />
      
      {nodes.map((node, i) => (
        <React.Fragment key={i}>
          {/* Connection Line */}
          {i < nodes.length - 1 && (
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: i * 0.2 + 0.5, duration: 0.8 }}
              className="absolute top-1/2 h-[1px] bg-accent/30 origin-left"
              style={{ left: `${node.x}%`, width: `${nodes[i+1].x - node.x}%` }}
            />
          )}

          {/* Node */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2, type: "spring", stiffness: 200 }}
            className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
            style={{ left: `${node.x}%`, transform: `translate(-50%, -50%)` }}
          >
            <div className="w-2 h-2 rounded-full bg-white/20 border border-white/10 group-hover:bg-accent transition-colors duration-500" />
            <span className="whitespace-nowrap">{node.label}</span>
          </motion.div>
        </React.Fragment>
      ))}
    </div>
  );
};
