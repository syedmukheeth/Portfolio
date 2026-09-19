"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/lib/data";
import { FOLLOW, prefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface Point {
  x: number;
  y: number;
}

/**
 * Project index. On a fine pointer, a screenshot preview trails the cursor while a
 * row is hovered: position lives in refs and is written straight to the DOM each
 * frame, so pointer movement never re-renders React. Below lg the rows become cards.
 */
export function WorkList({ projects }: { projects: Project[] }) {
  const listRef = useRef<HTMLUListElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const target = useRef<Point>({ x: 0, y: 0 });
  const current = useRef<Point>({ x: 0, y: 0 });
  const frame = useRef<number | undefined>(undefined);
  const [activeId, setActiveId] = useState<string | null>(null);

  const paint = useCallback(() => {
    const el = previewRef.current;
    if (el) el.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`;
  }, []);

  // Frame loop lives in a ref so it can reschedule itself; it stops once settled.
  const tick = useRef<() => void>(() => {});
  useEffect(() => {
    tick.current = () => {
      const c = current.current;
      const t = target.current;
      c.x += (t.x - c.x) * FOLLOW;
      c.y += (t.y - c.y) * FOLLOW;
      paint();
      const moving = Math.abs(t.x - c.x) > 0.1 || Math.abs(t.y - c.y) > 0.1;
      frame.current = moving ? requestAnimationFrame(tick.current) : undefined;
    };
    return () => cancelAnimationFrame(frame.current ?? 0);
  }, [paint]);

  const onPointerMove = (event: React.PointerEvent) => {
    if (event.pointerType !== "mouse" || !listRef.current) return;
    const rect = listRef.current.getBoundingClientRect();
    target.current = { x: event.clientX - rect.left + 28, y: event.clientY - rect.top - 90 };

    // First frame after appearing, or reduced motion: jump straight to the cursor.
    if (activeId === null || prefersReducedMotion()) {
      current.current = { ...target.current };
      paint();
      return;
    }
    if (frame.current === undefined) frame.current = requestAnimationFrame(tick.current);
  };

  return (
    <div className="relative">
      {/* Phones: a swipe carousel with the next card peeking in. sm: two-up cards. lg: the index list. */}
      <ul
        ref={listRef}
        onPointerMove={onPointerMove}
        onPointerLeave={() => setActiveId(null)}
        className="no-scrollbar -mx-5 flex snap-x snap-mandatory scroll-px-5 gap-3 overflow-x-auto overscroll-x-contain px-5 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 lg:block"
      >
        {projects.map((project) => (
          <li key={project.id} className="w-[82%] shrink-0 snap-start sm:w-auto lg:border-t lg:border-line lg:last:border-b">
            <Link
              href={`/projects/${project.id}`}
              onPointerEnter={(event) => event.pointerType === "mouse" && setActiveId(project.id)}
              className="group grid h-full grid-cols-[1fr_auto] content-start items-center gap-x-4 gap-y-4 rounded-xl border border-line bg-surface p-3 pb-4 max-lg:press lg:grid-cols-12 lg:gap-x-8 lg:rounded-none lg:border-0 lg:bg-transparent lg:px-0 lg:py-6"
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- card thumbnail below lg */}
              <img
                src={project.thumbnail}
                alt=""
                loading="lazy"
                className="col-span-full aspect-[16/10] w-full rounded-lg border border-line object-cover object-top lg:hidden"
              />
              <div className="pl-1 lg:col-span-5 lg:pl-0 lg:pointer-coarse:flex lg:pointer-coarse:items-center lg:pointer-coarse:gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element -- touch laptops get no hover preview, so a small inline one */}
                <img
                  src={project.thumbnail}
                  alt=""
                  loading="lazy"
                  className="hidden aspect-[16/10] w-28 shrink-0 rounded-md border border-line object-cover object-top lg:pointer-coarse:block"
                />
                <div>
                  <h3 className="text-lg font-semibold tracking-tight transition-colors duration-[var(--dur-micro)] group-hover:text-accent-text sm:text-xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{project.tagline}</p>
                </div>
              </div>
              <p className="hidden text-sm text-muted lg:col-span-3 lg:block">{project.role}</p>
              <p className="hidden text-sm text-muted lg:col-span-3 lg:block">{project.stack.slice(0, 3).join(", ")}</p>
              <ArrowRight
                aria-hidden
                className="mr-1 size-5 justify-self-end text-faint transition-transform duration-[var(--dur-micro)] group-hover:translate-x-1 group-hover:text-fg motion-reduce:transition-none lg:col-span-1 lg:mr-0"
              />
            </Link>
          </li>
        ))}
      </ul>

      <div
        ref={previewRef}
        aria-hidden
        className={cn(
          "pointer-events-none absolute top-0 left-0 z-10 hidden w-80 transition-opacity duration-[var(--dur-micro)] lg:block",
          activeId ? "opacity-100" : "opacity-0",
        )}
      >
        <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-line bg-surface shadow-2xl shadow-black/40">
          {projects.map((project) => (
            // eslint-disable-next-line @next/next/no-img-element -- all previews stay mounted so switching rows crossfades instantly
            <img
              key={project.id}
              src={project.thumbnail}
              alt=""
              className={cn(
                "absolute inset-0 size-full object-cover object-top transition-opacity duration-[var(--dur-micro)]",
                activeId === project.id ? "opacity-100" : "opacity-0",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
