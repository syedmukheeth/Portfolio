"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import { cn } from "@/lib/utils";

interface Log {
  type: "input" | "output" | "error";
  content: string;
}

export default function Terminal() {
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState<Log[]>([
    { type: "output", content: "System Terminal v2.4.0-stable" },
    { type: "output", content: 'Type "help" to see available commands.' },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    const newLogs: Log[] = [...logs, { type: "input", content: cmd }];

    if (cleanCmd === "help") {
      newLogs.push({ type: "output", content: "Available commands: help, inspect [project], list, clear, status, reveal stack" });
    } else if (cleanCmd === "clear") {
      setLogs([{ type: "output", content: "Terminal cleared." }]);
      return;
    } else if (cleanCmd === "list") {
      PROJECTS.forEach(p => newLogs.push({ type: "output", content: `-> ${p.id}: ${p.tagline}` }));
    } else if (cleanCmd.startsWith("inspect ")) {
      const id = cleanCmd.split(" ")[1];
      const project = PROJECTS.find(p => p.id === id);
      if (project) {
        newLogs.push({ type: "output", content: JSON.stringify(project, null, 2) });
      } else {
        newLogs.push({ type: "error", content: `Error: Project "${id}" not found.` });
      }
    } else if (cleanCmd === "status") {
      newLogs.push({ type: "output", content: "System: Operational" });
      newLogs.push({ type: "output", content: "Active Mode: HUMAN" });
      newLogs.push({ type: "output", content: "Infrastructure: Multi-cloud distributed" });
    } else if (cleanCmd === "reveal stack") {
      newLogs.push({ type: "output", content: "Tech Ecosystem: React, Next.js, TypeScript, Tailwind, Node.js, Redis, Kafka, Docker, Supabase" });
    } else {
      newLogs.push({ type: "error", content: `Command not found: ${cleanCmd}` });
    }

    setLogs(newLogs);
    setInput("");
  };

  return (
    <section className="py-20">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="terminal-window h-[500px] flex flex-col">
          <div className="terminal-header justify-between">
            <div className="flex gap-2">
               <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
               <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
               <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40" />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-white/20">syed-mukheeth-os -- bash</span>
            <div className="w-12" />
          </div>

          <div ref={scrollRef} className="terminal-body flex-1 overflow-y-auto scrollbar-hide">
            {logs.map((log, i) => (
              <div key={i} className={cn(
                "mb-2 whitespace-pre-wrap",
                log.type === "input" ? "text-white" : log.type === "error" ? "text-red-400" : "text-accent/80"
              )}>
                {log.type === "input" && <span className="text-white/20 mr-2">$</span>}
                {log.content}
              </div>
            ))}
            
            <div className="flex items-center gap-2">
              <span className="text-white/20">$</span>
              <input 
                autoFocus
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleCommand(input)}
                className="bg-transparent border-none outline-none flex-1 text-white caret-accent"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
