"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LazyVideo from "./LazyVideo";

/**
 * GUIDE: HOW TO GET PERSONALIZED ASSETS
 * ------------------------------------
 * 1. RECORD: Use OBS or CleanShotX to record 5-10 second clips of your projects (CLI, VS Code, Browser).
 * 2. CONVERT: Use 'ffmpeg' or an online converter to transform videos into .webm (best for web).
 * 3. PLACE: Move your files to /public/videos/ or /public/images/.
 * 4. UPDATE: Replace the URLs below with "/videos/your-project.webm" or "/images/your-project.gif".
 */

const ASSET_ITEMS = [
  { url: "https://res.cloudinary.com/dcqbcjrsp/video/upload/f_auto,q_auto,w_800/v1778519205/PeerNet-1_ysx8lh.mp4" },
  { url: "https://res.cloudinary.com/dcqbcjrsp/video/upload/f_auto,q_auto,w_800/v1778519207/SamCompiler-1_dotu4m.mp4" },
  { url: "https://res.cloudinary.com/dcqbcjrsp/video/upload/f_auto,q_auto,w_800/v1778519207/SamIndex-1_srrmp2.mp4" },
  { url: "https://res.cloudinary.com/dcqbcjrsp/video/upload/f_auto,q_auto,w_800/v1778519206/SJDC-1_gz4t3w.mp4" },
  { url: "https://res.cloudinary.com/dcqbcjrsp/video/upload/f_auto,q_auto,w_800/v1778519207/PeerNet-2_pznwtj.mp4" },
  { url: "https://res.cloudinary.com/dcqbcjrsp/video/upload/f_auto,q_auto,w_800/v1778519210/SamCompiler-2_hdkgnc.mp4" },
  { url: "https://res.cloudinary.com/dcqbcjrsp/video/upload/f_auto,q_auto,w_800/v1778519207/SamIndex-2_rz4747.mp4" },
  { url: "https://res.cloudinary.com/dcqbcjrsp/video/upload/f_auto,q_auto,w_800/v1778519206/SJDC-2_hq7doz.mp4" },
];

const LazyMarqueeVideo = ({ url }: { url: string }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  // Use a much smaller width for marquee items
  const marqueeUrl = url.replace('w_800', 'w_400');

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-[280px] sm:w-[400px] aspect-video rounded-3xl overflow-hidden flex-shrink-0 bg-white/5 border border-white/10 group relative video-wrapper transition-transform duration-500 hover:scale-[1.02] hover:z-30 hover:border-accent/30"
    >
      <LazyVideo 
        src={marqueeUrl} 
        active={isHovered}
        className="w-full h-full object-cover transition-all duration-700"
      />
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      
      {!isHovered && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[7px] border-l-white border-b-[4px] border-b-transparent ml-1" />
           </div>
        </div>
      )}
    </div>
  );
};

export const MarqueeSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const x2 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const row1 = ASSET_ITEMS.slice(0, 4);
  const row2 = ASSET_ITEMS.slice(4, 8);

  const MarqueeRow = ({ items, x }: { items: typeof ASSET_ITEMS, x: any }) => (
    <div className="flex gap-4 overflow-hidden whitespace-nowrap py-4">
      <motion.div 
        className="flex gap-6"
        style={{ x }}
      >
        {[...items, ...items].map((item, i) => (
          <LazyMarqueeVideo key={i} url={item.url} />
        ))}
      </motion.div>
    </div>
  );

  return (
    <section ref={sectionRef} className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-20 overflow-hidden relative">
      <div className="absolute top-10 left-10 z-10 pointer-events-none flex items-center gap-2">
         <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
         <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/60">Internal_System_Visuals // 01</span>
      </div>

      <div className="flex flex-col gap-4">
        <MarqueeRow items={row1} x={x1} />
        <MarqueeRow items={row2} x={x2} />
      </div>

      {/* GRADIENT OVERLAYS FOR SMOOTH EDGE */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#0C0C0C] to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#0C0C0C] to-transparent z-20 pointer-events-none" />
    </section>
  );
};
