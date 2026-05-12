"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
  className?: string;
  active?: boolean;
  priority?: boolean;
}

/**
 * 🚀 ZERO-LATENCY VIDEO COMPONENT
 * Highly optimized for Core Web Vitals (CLS/LCP) and smooth interaction.
 */
export default function LazyVideo({ 
  src, 
  poster, 
  className, 
  active = true, 
  priority = false,
  ...props 
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Optimized URL Helpers - More responsive sizing
  // For mobile we don't need 1280px
  const optimizedSrc = (src.includes('cloudinary') && !src.includes('/upload/q_auto')) 
    ? src.replace('/upload/', '/upload/q_auto:best,f_auto,vc_auto,w_auto,c_limit/') 
    : src;
    
  const optimizedPoster = poster || (src.includes('cloudinary') && !src.includes('/upload/so_0')
    ? src.replace('/upload/', '/upload/so_0,q_auto,f_auto,w_800/').replace('.mp4', '.jpg')
    : undefined);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { 
        rootMargin: priority ? "1000px" : "400px", // Preload buffer
        threshold: 0.01 
      }
    );

    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, [priority]);

  // Handle Play/Pause logic centrally to avoid "jerkiness" from competing props
  useEffect(() => {
    if (!videoRef.current) return;

    const shouldPlay = isIntersecting && active;
    
    if (shouldPlay) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play might be blocked by browser
        });
      }
    } else {
      videoRef.current.pause();
      // REMOVED: currentTime = 0; // This causes the "jerk" when re-entering viewport
    }
  }, [isIntersecting, active]);

  return (
    <div className={cn("video-wrapper w-full overflow-hidden bg-black", className)}>
      <video
        ref={videoRef}
        src={optimizedSrc}
        poster={optimizedPoster}
        preload={priority ? "auto" : "metadata"}
        muted
        loop
        playsInline
        onLoadedData={() => setIsLoaded(true)}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-700",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        style={{ aspectRatio: "16/9" }}
        {...(priority ? { fetchpriority: "high" } : {})}
        {...props}
      />
      
      {/* Background fill to prevent white flash/layout shift */}
      {!isLoaded && optimizedPoster && (
        <img 
          src={optimizedPoster} 
          alt="Video Preview" 
          className="absolute inset-0 w-full h-full object-cover opacity-50 blur-sm"
        />
      )}
    </div>
  );
}
