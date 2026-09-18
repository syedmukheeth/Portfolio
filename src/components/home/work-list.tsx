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
 * frame, so pointer movement never re-renders React. Touch shows inline thumbnails.
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
      <ul ref={listRef} onPointerMove={onPointerMove} onPointerLeave={() => setActiveId(null)}>
        {projects.map((project) => (
          <li key={project.id} className="border-t border-line last:border-b">
            <Link
              href={`/projects/${project.id}`}
              onPointerEnter={(event) => event.pointerType === "mouse" && setActiveId(project.id)}
              className="group grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-4 py-6 md:grid-cols-12 md:gap-x-8"
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- touch-only inline thumbnail */}
              <img
                src={project.thumbnail}
                alt=""
                loading="lazy"
                className="col-span-full aspect-[16/10] w-full rounded-lg border border-line object-cover object-top md:hidden"
              />
              <div className="md:col-span-5">
                <h3 className="text-xl font-semibold tracking-tight transition-colors duration-[var(--dur-micro)] group-hover:text-accent-text">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{project.tagline}</p>
              </div>
              <p className="hidden text-sm text-muted md:col-span-3 md:block">{project.role}</p>
              <p className="hidden text-sm text-muted md:col-span-3 md:block">{project.stack.slice(0, 3).join(", ")}</p>
              <ArrowRight
                aria-hidden
                className="size-5 justify-self-end text-faint transition-transform duration-[var(--dur-micro)] group-hover:translate-x-1 group-hover:text-fg motion-reduce:transition-none md:col-span-1"
              />
            </Link>
          </li>
        ))}
      </ul>

      <div
        ref={previewRef}
        aria-hidden
        className={cn(
          "pointer-events-none absolute top-0 left-0 z-10 hidden w-80 transition-opacity duration-[var(--dur-micro)] md:block",
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
