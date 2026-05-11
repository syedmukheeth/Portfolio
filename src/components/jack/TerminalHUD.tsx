"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMode } from "@/context/ModeContext";

const KNOWLEDGE_BASE = {
  whois: "NAME: SYED MUKHEETH\nROLE: SOFTWARE ENGINEER / SYSTEMS EXPLORER\nSTATUS: ACTIVE_DEVELOPMENT\nLOCATION: HYDERABAD, INDIA\n\nI build software that deconstructs complex systems. My work focuses on backend architecture, distributed performance, and bridging the 'Context Gap' in developer tooling.",
  mission: "ENGINEERING PHILOSOPHY:\n- Solve friction, don't just add features.\n- Build systems that feel intuitive and efficient.\n- Deconstruct complex infrastructure (like event meshes and compilers) to understand the 'why' behind the 'how'.",
  stack: "CORE SYSTEMS:\n- Frontend: [React, Next.js, Framer Motion]\n- Backend: [Node.js, Express, BullMQ]\n- Infrastructure: [Redis, Kafka, Docker, Supabase]\n- Language: [TypeScript, JavaScript, SQL]",
  projects: "SYSTEMS_CATALOG:\n1. [SAMINDEX] - Repository Intelligence Pipeline\n2. [SAM-COMPILER] - Distributed Secure Execution\n3. [PEERNET] - Scalable Event Mesh Networking\n4. [SJDC] - Institutional Modernization\n\nType 'inspect [name]' for deep-dive technical data.",
  "inspect samindex": "TECHNICAL ANALYSIS: SAMINDEX\n- Problem: 'Keyword Blindness' in large codebases.\n- Solution: Automated intelligence pipelines.\n- Stack: Next.js, BullMQ, Redis, OpenAI.\n- Result: Bridged the gap between raw code and developer intent.",
  "inspect sam-compiler": "TECHNICAL ANALYSIS: SAM-COMPILER\n- Problem: Secure execution of untrusted code at scale.\n- Solution: Docker-sandboxed execution environments.\n- Stack: Node.js, Docker, Socket.io, Redis.\n- Features: CRDT/Yjs realtime sync, multi-tenant isolation.",
  "inspect peernet": "TECHNICAL ANALYSIS: PEERNET\n- Problem: High-throughput real-time event propagation.\n- Solution: Distributed social graph activities.\n- Stack: Kafka, Express, MongoDB, Redis.\n- Features: Resilient WebSocket meshes, event-driven state.",
  "inspect sjdc": "TECHNICAL ANALYSIS: SJDC MODERNIZATION\n- Focus: Legacy modernization for 20k+ users.\n- Stack: React, Supabase RLS, PostgreSQL.\n- Core: Secure RBAC architectures, real-time academic workflows.",
  contact: "CONNECT_INTERFACE:\n- Email: syedmukheeth09@gmail.com\n- Status: Open to collaborating on ambitious systems projects.",
  socials: "SOCIAL_NODES:\n- GitHub: github.com/syedmukheeth\n- LinkedIn: linkedin.com/in/syedmukheeth\n- X: x.com/syed_mukheeth",
  help: "AVAILABLE_COMMANDS: whois, mission, stack, projects, inspect [name], socials, contact, clear, exit",
  clear: "CLEAR",
};

export const TerminalHUD = () => {
  const { mode } = useMode();
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState<string[]>(["welcome to symuk//os terminal.", "type 'help' for available commands."]);
  const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "t" && !isOpen) {
        setIsOpen(true);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputValue.toLowerCase().trim();
    if (!cmd) return;

    const newHistory = [...history, `> ${cmd}`];
    
    if (cmd === "clear") {
      setHistory([]);
    } else if (KNOWLEDGE_BASE[cmd as keyof typeof KNOWLEDGE_BASE]) {
      newHistory.push(KNOWLEDGE_BASE[cmd as keyof typeof KNOWLEDGE_BASE]);
      setHistory(newHistory);
    } else if (cmd === "exit") {
      setIsOpen(false);
    } else {
      newHistory.push(`command not found: ${cmd}. type 'help' for assistance.`);
      setHistory(newHistory);
    }

    setInputValue("");
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2 glass rounded-full mono text-[10px] uppercase tracking-widest text-white/60 hover:text-white transition-colors duration-300"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        Terminal_Access [T]
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed inset-x-6 bottom-10 md:inset-x-auto md:right-10 md:w-[500px] h-[350px] z-[60] glass rounded-2xl overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Terminal Header */}
            <div className="flex justify-between items-center px-4 py-3 border-b border-white/5 bg-white/5">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>
              <span className="mono text-[8px] uppercase tracking-[0.4em] text-white/20"> symuk // os_terminal </span>
              <button onClick={() => setIsOpen(false)} className="text-white/20 hover:text-white transition-colors">
                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            </div>

            {/* Terminal Content */}
            <div ref={scrollRef} className="flex-1 p-4 mono text-[11px] leading-relaxed overflow-y-auto custom-scrollbar">
              {history.map((line, i) => (
                <div key={i} className={line.startsWith(">") ? "text-accent" : "text-white/60 whitespace-pre-wrap mb-2"}>
                  {line}
                </div>
              ))}
            </div>

            {/* Terminal Input */}
            <form onSubmit={handleCommand} className="p-4 border-t border-white/5 bg-black/40 flex items-center gap-2">
               <span className="text-accent mono text-[11px]">{">"}</span>
               <input 
                ref={inputRef}
                autoFocus
                type="text" 
                value={inputValue}
                onKeyDown={(e) => e.stopPropagation()}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none mono text-[11px] text-white placeholder:text-white/10"
                placeholder="enter command..."
               />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
