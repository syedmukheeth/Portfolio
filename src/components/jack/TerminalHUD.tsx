"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMode } from "@/context/ModeContext";

const COMMANDS = {
  help: "available commands: help, inspect [project], reveal stack, clear, list systems, exit",
  "list systems": "systems: [SAM-COMPILER], [SAMINDEX], [PEERNET], [SJDC-ACADEMIC]",
  "reveal stack": "core: [next.js, typescript, tailwind]\ninfra: [distributed mesh, edge runtime, redis orchestration]\nintelligence: [gemini-pro, nvidia-nim]",
  "inspect sam-compiler": "analyzing SAM-COMPILER architecture...\n- isolated docker sandboxes\n- distributed execution workers\n- crdt realtime sync\n- multi-tenant isolation",
  "inspect samindex": "analyzing SAMINDEX pipeline...\n- bulk repository indexing\n- semantic vector retrieval\n- redis event queue\n- ai-powered workspace intelligence",
  clear: "CLEAR",
};

export const TerminalHUD = () => {
  const { mode } = useMode();
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState<string[]>(["welcome to symuk//os terminal.", "type 'help' for available commands."]);
  const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

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
    } else if (COMMANDS[cmd as keyof typeof COMMANDS]) {
      newHistory.push(COMMANDS[cmd as keyof typeof COMMANDS]);
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
               <span className="text-accent mono text-[11px]">></span>
               <input 
                autoFocus
                type="text" 
                value={inputValue}
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
