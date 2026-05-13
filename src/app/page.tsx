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
      

      <Footer />
      
      {/* GLOBAL BACKGROUND NOISE/GRAIN - Moved to CSS for performance */}
      <div className="noise-overlay" />

      {/* CINEMATIC FOOTER */}

    </div>
  );
}
