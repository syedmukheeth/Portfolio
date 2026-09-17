"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-dashed border-line bg-bg/85 backdrop-blur-md">
      <nav className="mx-auto flex h-12 max-w-[50rem] items-center justify-between border-x border-dashed border-line px-4 sm:px-6">
        <Link href="/" className="shrink-0 font-serif text-xl leading-none tracking-tight sm:text-2xl">
          {PROFILE.shortName}
        </Link>

        <div className="flex items-center gap-0.5 text-sm sm:gap-1">
          {LINKS.map(({ href, label }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-md px-2 py-1.5 transition-colors hover:text-fg sm:px-2.5",
                  active ? "text-fg" : "text-muted",
                  href === "/" && "hidden sm:inline",
                )}
              >
                {label}
              </Link>
            );
          })}
          <a
            href={PROFILE.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 rounded-md px-2 py-1.5 text-muted transition-colors hover:text-fg sm:px-2.5"
          >
            Resume
            <ArrowUpRight className="size-3.5" />
          </a>
          <span aria-hidden className="mx-1 h-4 border-l border-line sm:mx-1.5" />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
