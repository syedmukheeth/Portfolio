"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Search } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PROFILE } from "@/lib/data";
import { useActiveSection, useIsMac, useScrolled } from "@/lib/use-active-section";
import { cn } from "@/lib/utils";
import { openPalette } from "./command-palette";
import { ThemeToggle } from "./theme-toggle";

const LINKS = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "stack", label: "Stack" },
] as const;

const HOME_SECTIONS = ["about", "experience", "projects", "stack", "github", "contact"] as const;
const NO_SECTIONS: readonly string[] = [];

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const active = useActiveSection(isHome ? HOME_SECTIONS : NO_SECTIONS);
  const scrolled = useScrolled();
  const isMac = useIsMac();

  return (
    <header
      data-scrolled={scrolled}
      className="sticky top-0 z-40 border-b border-transparent bg-bg/80 backdrop-blur-md transition-colors duration-[var(--dur-fast)] data-[scrolled=true]:border-line"
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex shrink-0 items-center gap-2.5 rounded-full" aria-label={`${PROFILE.shortName}, home`}>
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
              const current = isHome ? active === id : id === "projects" && pathname.startsWith("/projects");
              return (
                <li key={id}>
                  <Link
                    href={isHome ? `#${id}` : `/#${id}`}
                    aria-current={current ? (isHome ? "location" : "page") : undefined}
                    className={cn(
                      "press rounded-full px-3 py-1.5 text-sm",
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
            className="press ml-1 inline-flex h-8 items-center gap-2 rounded-full border border-line bg-surface pr-1.5 pl-2.5 text-sm text-muted hover:border-faint hover:text-fg"
          >
            <Search className="size-3.5" aria-hidden />
            <span className="sr-only sm:not-sr-only">Search</span>
            <kbd className="rounded-md border border-line bg-elevated px-1.5 font-mono text-[11px] leading-5 text-muted pointer-coarse:hidden">
              {isMac ? "⌘K" : "Ctrl K"}
            </kbd>
          </button>

          <a
            href={PROFILE.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="press hidden items-center gap-0.5 rounded-full px-3 py-1.5 text-sm text-muted hover:text-fg sm:inline-flex"
          >
            Resume
            <ArrowUpRight className="size-3.5" aria-hidden />
          </a>

          <ThemeToggle />
        </nav>
      </Container>
    </header>
  );
}
