"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { SKILL_CATEGORIES, SKILLS, type SkillCategory } from "@/lib/data";
import { cn } from "@/lib/utils";

type Filter = "All" | SkillCategory;

const FILTERS: Filter[] = ["All", ...SKILL_CATEGORIES];

export function TechStack() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = filter === "All" ? SKILLS : SKILLS.filter((s) => s.category === filter);

  return (
    <Section
      id="stack"
      title="Tech Stack"
      action={
        <div role="group" aria-label="Filter by category" className="no-scrollbar -mx-1 flex overflow-x-auto">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={cn(
                "shrink-0 rounded-md px-2.5 py-1 text-xs transition-colors",
                filter === f ? "bg-fg/[0.07] text-fg" : "text-muted hover:text-fg",
              )}
            >
              {f}
            </button>
          ))}
        </div>
      }
    >
      <ul className="flex min-h-24 flex-wrap content-start gap-2 px-4 sm:px-6">
        {visible.map(({ name, href, icon: Icon }) => (
          <li key={name}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-8 items-center gap-2 rounded-sm border border-dotted border-line bg-fg/[0.02] pr-3 pl-2.5 text-sm text-muted transition-colors hover:bg-fg/[0.05] hover:text-fg"
            >
              <Icon className="size-3.5" />
              {name}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
