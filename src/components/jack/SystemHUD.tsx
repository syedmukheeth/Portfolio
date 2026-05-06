"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMode } from "@/context/ModeContext";
import { cn } from "@/lib/utils";

export const SystemHUD = () => {
  const { mode } = useMode();
  const [latency, setLatency] = useState(18);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(Math.random() * (24 - 14) + 14));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 p-6 md:p-10 flex flex-col justify-between mono text-[10px] uppercase tracking-[0.3em] text-white/40">
      {/* Top HUD */}
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
            <span className="text-white/80">Systems_Operational</span>
          </div>
          <div className="flex flex-col gap-1">
            <span>Uptime: 99.98%</span>
            <span>Workers: 12 Active</span>
          </div>
        </div>

        <div className="flex flex-col items-end gap-1">
          <span className={cn(mode === "machine" ? "text-accent" : "text-white/40")}>Mode: {mode}</span>
          <span>Region: Global_Edge</span>
          <span>Build: v2.4.1</span>
        </div>
      </div>

      {/* Bottom HUD */}
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
             <span className="opacity-20">Network:</span>
             <span className="text-white/60">latency {latency}ms</span>
          </div>
          <span>Distributed_Mesh: Active</span>
        </div>

        <div className="hidden md:flex flex-col items-end gap-1">
          <span>Syed Mukheeth // Portfolio</span>
          <span className="opacity-20 text-[8px]">© 2026 all rights reserved</span>
        </div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-white/5 pointer-events-none" />
      <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-white/5 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-white/5 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-white/5 pointer-events-none" />
    </div>
  );
};
