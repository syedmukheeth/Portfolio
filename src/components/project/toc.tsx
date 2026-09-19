"use client";

import { useActiveSection } from "@/lib/use-active-section";
import { cn } from "@/lib/utils";

export interface TocItem {
  id: string;
  label: string;
}

/** Sticky "On this page" list that tracks the section being read. */
export function Toc({ items }: { items: TocItem[] }) {
  const active = useActiveSection(items.map((item) => item.id));

  return (
    <nav aria-label="On this page" className="sticky top-24">
      <p className="mb-3 text-sm text-muted">On this page</p>
      <ul className="border-l border-line">
        {items.map(({ id, label }) => {
          const current = active === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={current ? "location" : undefined}
                className={cn(
                  "hit-area -ml-px block border-l py-1.5 pl-4 text-sm transition-colors duration-[var(--dur-micro)]",
                  current ? "border-accent-text text-fg" : "border-transparent text-muted hover:text-fg",
                )}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
