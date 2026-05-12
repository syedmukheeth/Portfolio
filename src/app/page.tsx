"use client";

import React from "react";
import dynamic from "next/dynamic";
import { HeroSection } from "@/components/jack/HeroSection";
import { MarqueeSection } from "@/components/jack/MarqueeSection";
import { AboutSection } from "@/components/jack/AboutSection";
import { ServicesSection } from "@/components/jack/ServicesSection";
import { ProjectsSection } from "@/components/jack/ProjectsSection";
import { useMode } from "@/context/ModeContext";
import { cn } from "@/lib/utils";
import { OSNavbar } from "@/components/jack/OSNavbar";

// DYNAMIC IMPORTS FOR PERFORMANCE
const ProjectDetailsModal = dynamic(() => import("@/components/jack/ProjectDetailsModal").then(mod => mod.ProjectDetailsModal), { ssr: false });
const SystemHUD = dynamic(() => import("@/components/jack/SystemHUD").then(mod => mod.SystemHUD), { ssr: false });
const Footer = dynamic(() => import("@/components/layout/Footer"), { ssr: false });

export default function Home() {
  const { mode } = useMode();
  const [selectedProject, setSelectedProject] = React.useState<any>(null);

  return (
    <div className={cn(
      "min-h-screen bg-black selection:bg-accent selection:text-white transition-colors duration-1000",
      mode === "machine" ? "machine-theme" : ""
    )}>
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
      
      {/* <SystemHUD /> */}
      <Footer />
      
      {/* GLOBAL BACKGROUND NOISE/GRAIN */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.02] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* CINEMATIC FOOTER */}

    </div>
  );
}
