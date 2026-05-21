"use client";

import React from "react";
import dynamic from "next/dynamic";
import { HeroSection } from "@/components/jack/HeroSection";
import { MarqueeSection } from "@/components/jack/MarqueeSection";
import { AboutSection } from "@/components/jack/AboutSection";
import { ServicesSection } from "@/components/jack/ServicesSection";
import { ProjectsSection } from "@/components/jack/ProjectsSection";
import { cn } from "@/lib/utils";
import { OSNavbar } from "@/components/jack/OSNavbar";

// DYNAMIC IMPORTS FOR PERFORMANCE
const ProjectDetailsModal = dynamic(() => import("@/components/jack/ProjectDetailsModal").then(mod => mod.ProjectDetailsModal), { ssr: false });

const Footer = dynamic(() => import("@/components/layout/Footer"), { ssr: false });

export default function Home() {
  const [selectedProject, setSelectedProject] = React.useState<any>(null);

  return (
    <div className="min-h-screen bg-black selection:bg-accent selection:text-white">
      <OSNavbar />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection onOpenProject={setSelectedProject} />
      
      <ProjectDetailsModal 
        isOpen={!!selectedProject} 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
      
      <section aria-label="About Syed Abdul Mukheeth" className="sr-only">
        <h1>Syed Abdul Mukheeth — Software Engineer</h1>
        <p>
          Syed Abdul Mukheeth, also known as Syed Mukheeth, is a software engineering
          student and engineer based in India. He specializes in high-performance backend
          architecture, distributed systems, and real-time infrastructure engineering.
          He is actively seeking full-time software engineering roles and internships.
        </p>
        <h2>Skills and Technologies</h2>
        <p>
          Syed works primarily with TypeScript, Node.js, React, Docker, Redis, Apache Kafka,
          BullMQ, MongoDB, PostgreSQL, Supabase, Socket.IO, WebSockets, CRDT, Yjs, and
          the OpenAI API. He has experience with event-driven architecture, distributed
          message queues, real-time synchronization, and AI-assisted developer tooling.
        </p>
        <h2>Projects</h2>
        <h3>SAM Compiler</h3>
        <p>
          SAM Compiler is a distributed cloud IDE that executes multi-language code inside
          isolated Docker sandboxes. It features real-time multi-user collaboration powered
          by CRDT and Yjs synchronization over WebSockets, and scalable job orchestration
          using BullMQ and Redis worker queues. Built with React, TypeScript, Node.js,
          Docker, and Socket.IO.
        </p>
        <h3>SAMIndex</h3>
        <p>
          SAMIndex is an AI-powered repository intelligence platform. It ingests GitHub
          codebases via ZIP pipelines, processes them through Redis queues and BullMQ,
          and provides AI-assisted code analysis powered by OpenAI. The system features
          architecture-aware retrieval and scalable async indexing. Built with React,
          TypeScript, Node.js, Express, BullMQ, Redis, MongoDB, and the OpenAI API.
        </p>
        <h3>PeerNet</h3>
        <p>
          PeerNet is a real-time scalable social networking platform built on an event-driven
          backend. It uses Apache Kafka for message streaming, Redis adapters for WebSocket
          scalability, and Socket.IO for low-latency real-time social interactions. Built
          with React, TypeScript, Node.js, Socket.IO, Kafka, Redis, and MongoDB.
        </p>
        <h3>SJDC Academic Platform Modernization</h3>
        <p>
          SJDC is a modernized academic platform that replaced a legacy institutional system.
          It uses React 19, Next.js, Supabase with row-level security (RLS), and PostgreSQL
          to support secure, role-based workflows for students, faculty, and administrators.
        </p>
        <h2>Contact and Profiles</h2>
        <p>
          GitHub: github.com/syedmukheeth |
          Twitter: @syed_mukheeth |
          Portfolio: www.syedmukheeth.is-a.dev
        </p>
      </section>

      <Footer />
      
      {/* GLOBAL BACKGROUND NOISE/GRAIN - Moved to CSS for performance */}
      <div className="noise-overlay" />

      {/* CINEMATIC FOOTER */}

    </div>
  );
}
