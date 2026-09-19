"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Phones only: folds long copy behind a toggle so a section doesn't cost several screens.
 * The text is always in the DOM (and always shown from md up); collapsed, it's just hidden.
 */
export function ReadMore({ className, children }: { className?: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <>
      <div id={id} className={cn(className, !open && "max-md:hidden")}>
        {children}
      </div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={id}
        className="press hit-area mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-fg hover:text-accent-text md:hidden"
      >
        {open ? "Show less" : "Read more"}
        <ChevronDown
          aria-hidden
          className={cn(
            "size-4 transition-transform duration-[var(--dur-micro)] motion-reduce:transition-none",
            open && "rotate-180",
          )}
        />
      </button>
    </>
  );
}
