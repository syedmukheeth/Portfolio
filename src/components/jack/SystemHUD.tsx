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
    <div className="fixed inset-0 pointer-events-none z-40 p-6 md:p-12 lg:p-16 flex flex-col justify-between mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-white/60">
      {/* Top HUD - Offset to avoid OSNavbar */}
      <div className="flex justify-between items-start pt-16 md:pt-20">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
            <span className="text-white/60">Systems_Operational</span>
          </div>
          <div className="hidden md:flex flex-col gap-1 opacity-50">
            <span>Uptime: 99.98%</span>
            <span>Workers: 12 Active</span>
          </div>
        </div>

        <div className="flex flex-col items-end gap-1">
          <span className={cn("transition-colors duration-500", mode === "machine" ? "text-accent" : "text-white/40")}>Mode: {mode}</span>
          <span className="hidden sm:inline">Region: Global_Edge</span>
          <span className="hidden sm:inline">Build: v2.4.1</span>
        </div>
      </div>

      {/* Bottom HUD */}
      <div className="flex justify-between items-end pb-4 md:pb-8">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
             <span className="opacity-50">Network:</span>
             <span className="text-white/70 font-bold">latency {latency}ms</span>
          </div>
          <span className="hidden sm:inline">Distributed_Mesh: Active</span>
        </div>

        <div className="hidden lg:flex flex-col items-end gap-1">
          <span>Syed Mukheeth // Portfolio</span>
          <span className="opacity-50 text-[8px]">© 2026 all rights reserved</span>
        </div>
      </div>
    </div>
  );
};
