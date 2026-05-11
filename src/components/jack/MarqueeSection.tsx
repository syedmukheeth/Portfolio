"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

/**
 * GUIDE: HOW TO GET PERSONALIZED ASSETS
 * ------------------------------------
 * 1. RECORD: Use OBS or CleanShotX to record 5-10 second clips of your projects (CLI, VS Code, Browser).
 * 2. CONVERT: Use 'ffmpeg' or an online converter to transform videos into .webm (best for web).
 * 3. PLACE: Move your files to /public/videos/ or /public/images/.
 * 4. UPDATE: Replace the URLs below with "/videos/your-project.webm" or "/images/your-project.gif".
 */

const ASSET_ITEMS = [
  { type: 'image', url: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJqZndqZndqZndqZndqZndqZndqZndqZndqZndqZndqZndqJmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/3o7TKSjNGBhNDM44TC/giphy.gif" }, // Code scrolling
  { type: 'image', url: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJqZndqZndqZndqZndqZndqZndqZndqZndqZndqZndqZndqJmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/QNVzHs6qC35Cg/giphy.gif" }, // Servers
  { type: 'image', url: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJqZndqZndqZndqZndqZndqZndqZndqZndqZndqZndqZndqJmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/26tn33aiTi1jkl6H6/giphy.gif" }, // Abstract data
  { type: 'image', url: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJqZndqZndqZndqZndqZndqZndqZndqZndqZndqZndqZndqJmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/13HBDT4QSTpveU/giphy.gif" }, // Network nodes
  { type: 'image', url: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJqZndqZndqZndqZndqZndqZndqZndqZndqZndqZndqZndqJmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/pS66V8vRz5Z9m/giphy.gif" }, // Matrix/System
  { type: 'image', url: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJqZndqZndqZndqZndqZndqZndqZndqZndqZndqZndqZndqJmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/o0vwzuFwCGAFO/giphy.gif" }, // Grid
  { type: 'image', url: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJqZndqZndqZndqZndqZndqZndqZndqZndqZndqZndqZndqJmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/3o7TKVUn7iM8FMEU24/giphy.gif" }, // Blueprints
  { type: 'image', url: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJqZndqZndqZndqZndqZndqZndqZndqZndqZndqZndqZndqJmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/LndvH0hF9S7W8/giphy.gif" }, // Tech Hud
  { type: 'image', url: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJqZndqZndqZndqZndqZndqZndqZndqZndqZndqZndqZndqJmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/H89gnVatH60m4/giphy.gif" }, // Satellite
  { type: 'image', url: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJqZndqZndqZndqZndqZndqZndqZndqZndqZndqZndqZndqJmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/xT9IgzoKnwFNmISR8I/giphy.gif" }, // Scanning
  { type: 'image', url: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJqZndqZndqZndqZndqZndqZndqZndqZndqZndqZndqZndqJmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/3o7TKMGpxPucLiVdzO/giphy.gif" }, // UI elements
];

export const MarqueeSection = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const offset = (window.scrollY - top + window.innerHeight) * 0.3;
      setScrollOffset(offset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const row1 = ASSET_ITEMS.slice(0, 6);
  const row2 = ASSET_ITEMS.slice(5);

  const MarqueeRow = ({ items, direction = 1 }: { items: typeof ASSET_ITEMS, direction?: number }) => (
    <div className="flex gap-4 overflow-hidden whitespace-nowrap">
      <div 
        className="flex gap-4 transition-transform duration-100 ease-linear"
        style={{ 
          transform: `translateX(${direction * (scrollOffset - 300)}px)`,
          willChange: 'transform'
        }}
      >
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <div key={i} className="w-[450px] h-[300px] rounded-3xl overflow-hidden flex-shrink-0 bg-white/5 border border-white/10 group">
             {item.type === 'video' ? (
               <video 
                 src={item.url} 
                 autoPlay 
                 loop 
                 muted 
                 playsInline 
                 className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
               />
             ) : (
               <img
                 src={item.url}
                 alt={`Work ${i}`}
                 loading="lazy"
                 className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
               />
             )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-20 overflow-hidden relative">
      {/* SECTION LABEL */}
      <div className="absolute top-10 left-10 z-10 pointer-events-none opacity-20">
         <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-accent">Internal_System_Visuals // 01</span>
      </div>

      <div className="flex flex-col gap-4">
        <MarqueeRow items={row1} direction={1} />
        <MarqueeRow items={row2} direction={-1} />
      </div>

      {/* GRADIENT OVERLAYS FOR SMOOTH EDGE */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#0C0C0C] to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#0C0C0C] to-transparent z-20 pointer-events-none" />
    </section>
  );
};
