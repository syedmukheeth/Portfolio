"use client";

import React from "react";
import { motion } from "framer-motion";
import { FadeIn } from "./JackComponents";

const SERVICES = [
  {
    id: "01",
    name: "Realtime & Event-Driven Systems",
    description: "Exploring low-latency networking through PeerNet, where I implemented WebSocket communication and Redis adapters to manage asynchronous event-driven flows and real-time social interaction."
  },
  {
    id: "02",
    name: "Repository & Infrastructure Tooling",
    description: "Building automated intelligence pipelines for SAMIndex. I developed ZIP-based ingestion workflows using Redis queues and BullMQ to process codebase context for AI-assisted analysis."
  },
  {
    id: "03",
    name: "Realtime Collaboration & Synchronization",
    description: "Experimenting with distributed state in SAM Compiler. I implemented CRDT/Yjs synchronization and WebSockets to enable seamless multi-user collaboration and real-time code execution."
  },
  {
    id: "04",
    name: "Product-Focused Engineering",
    description: "Focusing on the intersection of technical curiosity and user experience. I build tools that make complex concepts-like repository indexing or event meshes-accessible through intuitive product design."
  },
  {
    id: "05",
    name: "Security & Platform Modernization",
    description: "Modernizing legacy institutional platforms at SJDC. I migrated legacy stacks to React and implemented secure, role-based access control using Supabase RLS to protect academic workflows."
  }
];

export const ServicesSection = () => {
  return (
    <section id="expertise" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20">
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28">
            Expertise
          </h2>
        </FadeIn>

        <div className="flex flex-col border-t border-[rgba(12,12,12,0.15)]">
          {SERVICES.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.1} y={30}>
              <div className="flex flex-col md:flex-row gap-6 md:gap-20 py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] group hover:bg-black/5 transition-colors duration-300">
                <div className="text-[#0C0C0C] font-black leading-none text-[clamp(3rem,10vw,140px)] opacity-70 group-hover:opacity-100 transition-opacity">
                  {service.id}
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-[#0C0C0C] font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)]">
                    {service.name}
                  </h3>
                  <p className="text-[#0C0C0C] font-medium leading-relaxed max-w-2xl text-[clamp(1rem,1.6vw,1.25rem)]">
                    {service.description}
                  </p>
                </div>

                {/* TECHNICAL HUD DETAIL */}
                <div className="hidden md:flex flex-col gap-2 items-end ml-auto self-center opacity-0 group-hover:opacity-40 transition-all duration-700 translate-x-4 group-hover:translate-x-0">
                  <div className="flex flex-col items-end border-r-2 border-black/20 pr-4">
                    <span className="mono text-[9px] uppercase tracking-[0.3em] font-black">SPEC_VERIFIED</span>
                    <span className="mono text-[8px] uppercase tracking-[0.2em]">ENG_UNIT: {service.id}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                    <span className="mono text-[7px] uppercase tracking-widest font-bold">NODE_ACTIVE</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
