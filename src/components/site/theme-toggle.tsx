"use client";

import { useCallback } from "react";
import { flushSync } from "react-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { prefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Switch theme with a short crossfade (View Transitions API) where supported.
 * The class is flipped inside the transition callback so the "new" snapshot is
 * captured after the change; next-themes then persists the choice.
 */
export function useThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();

  return useCallback(() => {
    const next = resolvedTheme === "light" ? "dark" : "light";
    const apply = () => {
      document.documentElement.classList.toggle("dark", next === "dark");
      document.documentElement.classList.toggle("light", next === "light");
      flushSync(() => setTheme(next));
    };

    if (!document.startViewTransition || prefersReducedMotion()) {
      apply();
      return;
    }
    document.startViewTransition(apply);
  }, [resolvedTheme, setTheme]);
}

export function ThemeToggle({ className }: { className?: string }) {
  const toggle = useThemeSwitch();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      className={cn("press grid size-8 place-items-center rounded-full text-muted hover:bg-elevated hover:text-fg", className)}
    >
      <Sun className="size-4 dark:hidden" aria-hidden />
      <Moon className="hidden size-4 dark:block" aria-hidden />
    </button>
  );
}
