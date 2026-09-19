"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion";
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

/**
 * Phones and tablets: the same list as a sticky row of chips under the header. The row
 * follows the reader, keeping the current chip in view by scrolling itself sideways only.
 */
export function TocChips({ items }: { items: TocItem[] }) {
  const active = useActiveSection(items.map((item) => item.id));
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    const chip = active ? list?.querySelector<HTMLElement>(`[data-id="${active}"]`) : null;
    if (!list || !chip) return;
    // scrollIntoView would also scroll the page; center the chip within the row instead.
    const left = chip.offsetLeft - (list.clientWidth - chip.offsetWidth) / 2;
    list.scrollTo({ left, behavior: prefersReducedMotion() ? "auto" : "smooth" });
  }, [active]);

  return (
    <nav
      aria-label="On this page"
      className="sticky top-16 z-30 border-b border-line bg-bg/85 backdrop-blur-md lg:hidden"
    >
      <ul ref={listRef} className="gutter no-scrollbar relative mx-auto flex max-w-[68rem] gap-2 overflow-x-auto overscroll-x-contain py-2.5">
        {items.map(({ id, label }) => {
          const current = active === id;
          return (
            <li key={id} data-id={id} className="shrink-0">
              <a
                href={`#${id}`}
                aria-current={current ? "location" : undefined}
                className={cn(
                  "press inline-flex h-9 items-center rounded-full border px-3.5 text-sm",
                  current ? "border-fg bg-fg text-bg" : "border-line text-muted hover:text-fg",
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
