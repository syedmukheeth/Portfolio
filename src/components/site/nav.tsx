"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, Search, X } from "lucide-react";
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

/** Phones get the same links plus a way to reach the contact section without scrolling. */
const MENU_LINKS = [{ id: "about", label: "About" }, ...LINKS, { id: "contact", label: "Contact" }] as const;

const HOME_SECTIONS = ["about", "experience", "projects", "stack", "github", "contact"] as const;
const NO_SECTIONS: readonly string[] = [];

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const active = useActiveSection(isHome ? HOME_SECTIONS : NO_SECTIONS);
  const scrolled = useScrolled();
  const isMac = useIsMac();
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const [menuOpen, setMenuOpen] = useState(false);

  const isCurrent = (id: string) => (isHome ? active === id : id === "projects" && pathname.startsWith("/projects"));

  // Escape or a tap anywhere outside the header closes the menu.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    };
    const onPointer = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      data-scrolled={scrolled || menuOpen}
      className="sticky top-0 z-40 border-b border-transparent bg-bg/80 backdrop-blur-md transition-colors duration-[var(--dur-fast)] data-[scrolled=true]:border-line"
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          onClick={(event) => {
            setMenuOpen(false);
            // Already home: a same-page link won't move, so scroll up and drop any #section from the URL.
            if (!isHome) return;
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
            if (window.location.hash) history.replaceState(null, "", "/");
          }}
          className="flex shrink-0 items-center gap-2.5 rounded-full"
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
              const current = isCurrent(id);
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
            onClick={() => {
              setMenuOpen(false);
              openPalette();
            }}
            aria-keyshortcuts="Meta+K Control+K /"
            className="press ml-1 inline-flex size-9 items-center justify-center gap-2 rounded-full border border-line bg-surface text-sm text-muted hover:border-faint hover:text-fg sm:h-8 sm:w-auto sm:pr-1.5 sm:pl-2.5 sm:pointer-coarse:pr-3"
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
            className="press hidden items-center gap-0.5 rounded-full px-3 py-1.5 text-sm text-muted hover:text-fg sm:inline-flex"
          >
            Resume
            <ArrowUpRight className="size-3.5" aria-hidden />
          </a>

          <ThemeToggle className="size-9 sm:size-8" />

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="press -mr-1.5 grid size-9 place-items-center rounded-full text-muted hover:bg-elevated hover:text-fg md:hidden"
          >
            {menuOpen ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </nav>
      </Container>

      <div
        id={menuId}
        hidden={!menuOpen}
        className="pop absolute inset-x-0 top-full origin-top border-b border-line bg-bg shadow-2xl shadow-black/30 md:hidden"
      >
        <Container>
          <ul className="py-2">
            {MENU_LINKS.map(({ id, label }) => {
              const current = isCurrent(id);
              return (
                <li key={id} className="border-b border-line last:border-b-0">
                  <Link
                    href={isHome ? `#${id}` : `/#${id}`}
                    onClick={() => setMenuOpen(false)}
                    aria-current={current ? (isHome ? "location" : "page") : undefined}
                    className={cn("flex h-14 items-center text-lg font-medium tracking-tight", current ? "text-accent-text" : "text-fg")}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
            <li>
              <a
                href={PROFILE.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex h-14 items-center gap-1 text-lg font-medium tracking-tight text-muted"
              >
                Resume
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </li>
          </ul>
        </Container>
      </div>
    </header>
  );
}
