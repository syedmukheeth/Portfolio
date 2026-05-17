"use client";

import React from "react";
import { HeroSection } from "@/components/jack/HeroSection";
import { MarqueeSection } from "@/components/jack/MarqueeSection";
import { AboutSection } from "@/components/jack/AboutSection";
import { ServicesSection } from "@/components/jack/ServicesSection";
import { ProjectsSection } from "@/components/jack/ProjectsSection";
import { ProjectDetailsModal } from "@/components/jack/ProjectDetailsModal";
import { OSNavbar } from "@/components/jack/OSNavbar";
export default function JackPortfolio() {
  const [selectedProject, setSelectedProject] = React.useState<any>(null);

  return (
    <div className="min-h-screen bg-[#0C0C0C] selection:bg-accent selection:text-white transition-colors duration-1000">
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
      
      {/* GLOBAL BACKGROUND NOISE/GRAIN (Parallel style) */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* PERSISTENT SYSTEM STATUS (Parallel style) */}
      <div className="fixed bottom-4 left-4 z-[100] font-mono text-[8px] uppercase tracking-[0.3em] text-white/20">
        <span className="text-accent animate-pulse">●</span> Jack_OS_v4.0.1_STABLE
      </div>
    </div>
  );
}
