"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
  className?: string;
  active?: boolean;
}

export default function LazyVideo({ src, poster, className, active = true, ...props }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
        } else {
          // Reset time on scroll away to free memory
          if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
          }
        }
      },
      { rootMargin: "400px", threshold: 0.01 } // More aggressive margin for smoother transitions
    );

    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (videoRef.current && shouldLoad) {
      if (active) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [active, shouldLoad]);

  // Optimized Cloudinary URL helper
  const getOptimizedUrl = (url: string) => {
    if (!url.includes('cloudinary')) return url;
    if (url.includes('/upload/')) {
      return url.replace('/upload/', '/upload/q_auto,f_auto,vc_auto,w_1280/');
    }
    return url;
  };

  const getPosterUrl = (url: string) => {
    if (!url.includes('cloudinary')) return poster;
    return url.replace('/upload/', '/upload/so_0,q_auto,f_auto,w_1280/').replace('.mp4', '.jpg');
  };

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? getOptimizedUrl(src) : undefined}
      poster={poster || getPosterUrl(src)}
      preload="none"
      muted
      loop
      playsInline
      className={cn("video-wrapper", className)}
      {...props}
    />
  );
}
