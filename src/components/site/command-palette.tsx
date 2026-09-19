"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  ArrowRight,
  AtSign,
  Briefcase,
  Code,
  Copy,
  FileText,
  FolderGit2,
  Globe,
  Hash,
  Search,
  SunMoon,
  type LucideIcon,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import type { IconType } from "react-icons";
import { PROFILE, PROJECTS, SOCIALS, STUDIO } from "@/lib/data";
import { prefersReducedMotion } from "@/lib/motion";
import { copyText } from "@/lib/use-copy";
import { cn } from "@/lib/utils";
import { useThemeSwitch } from "./theme-toggle";
import { toast } from "./toaster";

const OPEN_EVENT = "site:palette";

export function openPalette() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

type Group = "Jump to" | "Projects" | "Actions" | "Elsewhere";

interface Command {
  id: string;
  label: string;
  group: Group;
  icon: LucideIcon | IconType;
  keywords?: string;
  hint?: string;
  run: () => void;
}

const SECTIONS = [
  { id: "about", label: "About", icon: Hash },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "stack", label: "Stack", icon: Code },
  { id: "github", label: "GitHub activity", icon: Hash },
  { id: "contact", label: "Contact", icon: AtSign },
] as const;

const SOCIAL_ICONS: Record<string, IconType> = { GitHub: FaGithub, LinkedIn: FaLinkedin, X: FaXTwitter };

const isTyping = (target: EventTarget | null) =>
  target instanceof HTMLElement &&
  (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName));

export function CommandPalette() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
  const pathname = usePathname();
  const switchTheme = useThemeSwitch();
  const listId = useId();

  const open = useCallback(() => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    returnFocus.current = document.activeElement as HTMLElement | null;
    setQuery("");
    setActiveIndex(0);
    dialog.showModal();
    inputRef.current?.focus();
  }, []);

  const close = useCallback(() => dialogRef.current?.close(), []);

  const jumpTo = useCallback(
    (id: string) => {
      if (pathname !== "/") {
        router.push(`/#${id}`);
        return;
      }
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
      history.replaceState(null, "", `#${id}`);
      document.getElementById(`${id}-title`)?.focus({ preventScroll: true });
    },
    [pathname, router],
  );

  const commands = useMemo<Command[]>(() => {
    const external = (href: string) => () => window.open(href, "_blank", "noopener,noreferrer");
    return [
      ...SECTIONS.map((s) => ({
        id: `section-${s.id}`,
        label: s.label,
        group: "Jump to" as const,
        icon: s.icon,
        run: () => jumpTo(s.id),
      })),
      ...PROJECTS.map((p) => ({
        id: `project-${p.id}`,
        label: p.title,
        group: "Projects" as const,
        icon: ArrowRight,
        keywords: `${p.tagline} ${p.stack.join(" ")}`,
        hint: "Case study",
        run: () => router.push(`/projects/${p.id}`),
      })),
      {
        id: "copy-email",
        label: "Copy email address",
        group: "Actions",
        icon: Copy,
        keywords: "contact mail hire",
        hint: PROFILE.email,
        run: async () => {
          if (await copyText(PROFILE.email)) toast("Email copied to clipboard");
          else window.location.href = `mailto:${PROFILE.email}`;
        },
      },
      {
        id: "resume",
        label: "Open resume",
        group: "Actions",
        icon: FileText,
        keywords: "cv pdf",
        run: external(PROFILE.resume),
      },
      {
        id: "theme",
        label: "Toggle light / dark theme",
        group: "Actions",
        icon: SunMoon,
        keywords: "dark light mode appearance",
        run: switchTheme,
      },
      ...SOCIALS.map((s) => ({
        id: `social-${s.label}`,
        label: s.label,
        group: "Elsewhere" as const,
        icon: SOCIAL_ICONS[s.label] ?? Globe,
        run: external(s.href),
      })),
      {
        id: "studio",
        label: STUDIO.name,
        group: "Elsewhere",
        icon: Globe,
        keywords: "agency studio website",
        run: external(STUDIO.url),
      },
    ];
  }, [jumpTo, router, switchTheme]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) => `${c.label} ${c.keywords ?? ""} ${c.group}`.toLowerCase().includes(q));
  }, [commands, query]);

  const groups = useMemo(() => {
    const map = new Map<Group, Command[]>();
    for (const c of results) map.set(c.group, [...(map.get(c.group) ?? []), c]);
    return [...map.entries()];
  }, [results]);

  const run = (command: Command) => {
    // Navigation moves focus to its destination; don't pull it back to the trigger on close.
    if (command.group === "Jump to" || command.group === "Projects") returnFocus.current = null;
    close();
    command.run();
  };

  // Global shortcuts and the nav button's open event.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (dialogRef.current?.open) close();
        else open();
      } else if (event.key === "/" && !isTyping(event.target) && !dialogRef.current?.open) {
        event.preventDefault();
        open();
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_EVENT, open);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_EVENT, open);
    };
  }, [open, close]);

  // Keep the highlighted option in view while arrowing through a long list.
  useEffect(() => {
    const option = results[activeIndex];
    if (option) document.getElementById(`${listId}-${option.id}`)?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, results, listId]);

  const onInputKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((i) => (results.length ? (i + 1) % results.length : 0));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((i) => (results.length ? (i - 1 + results.length) % results.length : 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      const command = results[activeIndex];
      if (command) run(command);
    }
  };

  const active = results[activeIndex];

  return (
    <dialog
      ref={dialogRef}
      aria-label="Command palette"
      onKeyDown={(event) => {
        // Explicit Escape handling: native dialog cancel can be skipped by close-watcher heuristics.
        if (event.key === "Escape") {
          event.preventDefault();
          close();
        }
      }}
      onClose={() => returnFocus.current?.focus({ preventScroll: true })}
      onClick={(event) => event.target === event.currentTarget && close()}
      className="overlay mx-auto mt-[8vh] w-[min(36rem,calc(100vw-2rem))] max-w-none sm:mt-[12vh] overflow-hidden rounded-xl border border-line bg-surface p-0 text-fg shadow-2xl shadow-black/40"
    >
      <div className="flex items-center gap-3 border-b border-line px-4">
        <Search className="size-4 shrink-0 text-muted" aria-hidden />
        <input
          ref={inputRef}
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setActiveIndex(0);
          }}
          onKeyDown={onInputKey}
          role="combobox"
          aria-expanded="true"
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={active ? `${listId}-${active.id}` : undefined}
          aria-label="Search sections, projects and actions"
          placeholder="Search or jump to..."
          className="h-12 min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted sm:text-[15px]"
        />
        {/* A button, not just a hint: touch has no Escape key. */}
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="press shrink-0 rounded-md border border-line bg-elevated px-1.5 font-mono text-[11px] leading-5 text-muted hover:text-fg pointer-coarse:px-2.5 pointer-coarse:py-1"
        >
          esc
        </button>
      </div>

      <div id={listId} role="listbox" aria-label="Results" className="max-h-[min(24rem,50dvh)] overflow-y-auto p-2">
        {groups.length === 0 && (
          <p className="px-3 py-8 text-center text-sm text-muted">
            Nothing matches &ldquo;{query}&rdquo;. Try &ldquo;projects&rdquo; or &ldquo;email&rdquo;.
          </p>
        )}
        {groups.map(([group, items]) => (
          <div key={group} role="group" aria-label={group} className="pb-1">
            <p aria-hidden className="px-2.5 pt-2 pb-1 text-xs text-muted">
              {group}
            </p>
            {items.map((command) => {
              const index = results.indexOf(command);
              const selected = index === activeIndex;
              const Icon = command.icon;
              return (
                <div
                  key={command.id}
                  id={`${listId}-${command.id}`}
                  role="option"
                  aria-selected={selected}
                  onPointerMove={() => setActiveIndex(index)}
                  onClick={() => run(command)}
                  className={cn(
                    "flex cursor-pointer items-center gap-3 rounded-lg px-2.5 py-2 text-sm pointer-coarse:py-3",
                    selected ? "bg-elevated text-fg" : "text-muted",
                  )}
                >
                  <Icon className={cn("size-4 shrink-0", selected && "text-accent-text")} aria-hidden />
                  <span className="truncate">{command.label}</span>
                  {command.hint && <span className="ml-auto truncate pl-3 font-mono text-xs text-muted">{command.hint}</span>}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div aria-hidden className="flex items-center gap-4 border-t border-line px-4 py-2.5 text-xs text-muted pointer-coarse:hidden">
        <span className="flex items-center gap-1">
          <Kbd>↑</Kbd>
          <Kbd>↓</Kbd> to move
        </span>
        <span className="flex items-center gap-1">
          <Kbd>↵</Kbd> to open
        </span>
      </div>
    </dialog>
  );
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="grid h-5 min-w-5 place-items-center rounded border border-line bg-elevated px-1 font-mono text-[10px] text-muted">
      {children}
    </kbd>
  );
}
