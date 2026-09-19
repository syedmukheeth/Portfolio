"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, AtSign, Briefcase, Code, FolderGit2, Search, User, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PROFILE } from "@/lib/data";
import { prefersReducedMotion } from "@/lib/motion";
import { useActiveSection, useIsMac, useScrolled } from "@/lib/use-active-section";
import { cn } from "@/lib/utils";
import { openPalette } from "./command-palette";
import { ThemeToggle } from "./theme-toggle";

const LINKS = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "stack", label: "Stack" },
] as const;

/** Phones: every section one thumb-tap away, including the contact section at the very bottom. */
const DOCK_LINKS: { id: string; label: string; icon: LucideIcon }[] = [
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "stack", label: "Stack", icon: Code },
  { id: "contact", label: "Contact", icon: AtSign },
];

const HOME_SECTIONS = ["about", "experience", "projects", "stack", "github", "contact"] as const;
const NO_SECTIONS: readonly string[] = [];

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const active = useActiveSection(isHome ? HOME_SECTIONS : NO_SECTIONS);
  const scrolled = useScrolled();
  const isMac = useIsMac();

  const isCurrent = (id: string) => (isHome ? active === id : id === "projects" && pathname.startsWith("/projects"));
  const linkProps = (id: string) => {
    const current = isCurrent(id);
    return {
      href: isHome ? `#${id}` : `/#${id}`,
      current,
      "aria-current": current ? (isHome ? ("location" as const) : ("page" as const)) : undefined,
    };
  };

  return (
    <>
      <header
        data-scrolled={scrolled}
        className="sticky top-0 z-40 border-b border-transparent bg-bg/80 backdrop-blur-md transition-colors duration-[var(--dur-fast)] data-[scrolled=true]:border-line"
      >
        <Container className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            onClick={(event) => {
              // Already home: a same-page link won't move, so scroll up and drop any #section from the URL.
              if (!isHome) return;
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
              if (window.location.hash) history.replaceState(null, "", "/");
            }}
            className="hit-area flex shrink-0 items-center gap-2.5 rounded-full"
            aria-label={`${PROFILE.shortName}, home`}
          >
            <Image
              src={PROFILE.avatar}
              alt=""
              width={28}
              height={28}
              unoptimized
              className="size-7 rounded-full object-cover"
            />
            <span className="text-[15px] font-semibold tracking-tight">{PROFILE.shortName}</span>
          </Link>

          <nav aria-label="Primary" className="flex items-center gap-1">
            <ul className="hidden items-center gap-0.5 md:flex">
              {LINKS.map(({ id, label }) => {
                const { current, ...props } = linkProps(id);
                return (
                  <li key={id}>
                    <Link
                      {...props}
                      className={cn(
                        "press hit-area rounded-full px-3 py-1.5 text-sm",
                        current ? "text-accent-text" : "text-muted hover:text-fg",
                      )}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <button
              type="button"
              onClick={openPalette}
              aria-keyshortcuts="Meta+K Control+K /"
              className="press ml-1 inline-flex size-9 items-center justify-center gap-2 rounded-full border border-line bg-surface text-sm text-muted hover:border-faint hover:text-fg sm:h-8 sm:w-auto sm:pr-1.5 sm:pl-2.5 sm:pointer-coarse:h-9 sm:pointer-coarse:pr-3"
            >
              <Search className="size-3.5" aria-hidden />
              <span className="sr-only sm:not-sr-only">Search</span>
              <kbd className="hidden rounded-md border border-line bg-elevated px-1.5 font-mono text-[11px] leading-5 text-muted sm:block pointer-coarse:hidden">
                {isMac ? "⌘K" : "Ctrl K"}
              </kbd>
            </button>

            <a
              href={PROFILE.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="press hit-area hidden items-center gap-0.5 rounded-full px-3 py-1.5 text-sm text-muted hover:text-fg sm:inline-flex"
            >
              Resume
              <ArrowUpRight className="size-3.5" aria-hidden />
            </a>

            <ThemeToggle className="-mr-1.5 size-9 sm:mr-0 sm:size-8 sm:pointer-coarse:size-9" />
          </nav>
        </Container>
      </header>

      {/* Outside the header on purpose: the header's backdrop-filter would make it the
          containing block for position: fixed and pin the dock to the header instead. */}
      <nav
        aria-label="Sections"
        className="enter pointer-events-none fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden"
      >
        <ul className="dock pointer-events-auto mx-auto grid max-w-[22rem] grid-cols-5 gap-0.5 rounded-full border border-line bg-surface/85 p-1.5 shadow-2xl shadow-black/30 backdrop-blur-md">
          {DOCK_LINKS.map(({ id, label, icon: Icon }) => {
            const { current, ...props } = linkProps(id);
            return (
              <li key={id}>
                <Link
                  {...props}
                  className={cn(
                    "press flex h-12 flex-col items-center justify-center gap-1 rounded-full text-[10px] leading-none font-medium",
                    current ? "bg-elevated text-accent-text" : "text-muted",
                  )}
                >
                  <Icon className="size-[18px]" aria-hidden />
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
