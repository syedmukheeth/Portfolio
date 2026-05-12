"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
  className?: string;
  active?: boolean;
}

/**
 * 🚀 ZERO-LATENCY VIDEO COMPONENT
 * Uses Predictive Buffering (rootMargin: 800px) and Metadata Preloading
 * to ensure videos are ready to play BEFORE the user reaches them.
 */
export default function LazyVideo({ src, poster, className, active = true, ...props }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Optimized URL Helpers
  const optimizedSrc = src.includes('cloudinary') 
    ? src.replace('/upload/', '/upload/q_auto,f_auto,vc_auto,w_1280/') 
    : src;
    
  const optimizedPoster = poster || (src.includes('cloudinary') 
    ? src.replace('/upload/', '/upload/so_0,q_auto,f_auto,w_1280/').replace('.mp4', '.jpg')
    : undefined);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start playing when the user is close or hovering
          if (videoRef.current && active) {
            videoRef.current.play().catch(() => {});
          }
        } else {
          // Pause and reset when out of view to save CPU/Memory
          if (videoRef.current) {
            videoRef.current.pause();
            // Free up buffer memory
            videoRef.current.currentTime = 0;
          }
        }
      },
      { 
        rootMargin: "800px 0px", // 🚀 Predictive Buffering: 800px look-ahead
        threshold: 0.01 
      }
    );

    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, [active]);

  return (
    <video
      ref={videoRef}
      src={optimizedSrc}
      poster={optimizedPoster}
      preload="metadata" // 🚀 Preload headers immediately (tiny size, huge speed gain)
      muted
      loop
      playsInline
      className={cn("video-wrapper", className)}
      {...props}
    />
  );
}
