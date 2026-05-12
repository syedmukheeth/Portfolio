"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

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
  const containerRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(containerRef, { margin: "200px" });

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0; // Free memory on scroll away
      }
    }
  }, [isInView]);

  return (
    <div ref={containerRef} className="w-[300px] sm:w-[450px] h-[200px] sm:h-[300px] rounded-3xl overflow-hidden flex-shrink-0 bg-white/5 border border-white/10 group relative video-wrapper">
      <video 
        ref={videoRef}
        poster={url.includes('cloudinary') 
          ? url.replace('/upload/', '/upload/so_0,q_auto,f_auto,w_1280/').replace('.mp4', '.jpg')
          : undefined}
        src={isInView 
          ? (url.includes('cloudinary') 
            ? url.replace('/upload/', '/upload/q_auto,f_auto,vc_auto,w_1280/') 
            : url)
          : undefined} 
        autoPlay 
        loop 
        muted 
        playsInline 
        preload="none"
        className="w-full h-full object-cover transition-all duration-700"
      />
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </div>
  );
};

export const MarqueeSection = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  // UseInView to disable the entire section scroll listener when off-screen
  const isSectionInView = useInView(sectionRef, { margin: "200px 0px 200px 0px" });

  useEffect(() => {
    if (!isSectionInView) return;
    
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const offset = (window.scrollY - top + window.innerHeight) * 0.25; // Slower, smoother parallax
      setScrollOffset(offset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSectionInView]);

  const row1 = ASSET_ITEMS.slice(0, 4);
  const row2 = ASSET_ITEMS.slice(4, 8);

  const MarqueeRow = ({ items, direction = 1 }: { items: typeof ASSET_ITEMS, direction?: number }) => (
    <div className="flex gap-4 overflow-hidden whitespace-nowrap">
      <div 
        className="flex gap-4 transition-transform duration-75 ease-linear"
        style={{ 
          transform: `translate3d(${direction * (scrollOffset - 300)}px, 0, 0)`,
          willChange: 'transform'
        }}
      >
        {/* Only 2 sets for extreme performance optimization */}
        {[...items, ...items].map((item, i) => (
          <LazyMarqueeVideo key={i} url={item.url} />
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
