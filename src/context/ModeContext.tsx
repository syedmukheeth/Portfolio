"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Mode = "human" | "machine";

interface ModeContextType {
  mode: Mode;
  isTransitioning: boolean;
  toggleMode: () => void;
  setMode: (mode: Mode) => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<Mode>("human");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("portfolio-mode") as Mode;
    if (savedMode) {
      setModeState(savedMode);
    }
  }, []);

  const setMode = (newMode: Mode) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setModeState(newMode);
      localStorage.setItem("portfolio-mode", newMode);
      document.documentElement.setAttribute("data-mode", newMode);
      setTimeout(() => setIsTransitioning(false), 500);
    }, 400);
  };

  const toggleMode = () => {
    setMode(mode === "human" ? "machine" : "human");
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "m") {
        toggleMode();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mode]);

  return (
    <ModeContext.Provider value={{ mode, isTransitioning, toggleMode, setMode }}>
      <div className={mode === "machine" ? "font-mono" : "font-kanit"}>
        {children}
      </div>
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error("useMode must be used within a ModeProvider");
  }
  return context;
}
