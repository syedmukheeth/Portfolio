import type { Metadata } from "next";
import { Rule } from "@/components/site/rule";
import { ProjectGrid } from "@/components/ui/project-grid";
import { PROJECTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Distributed systems, realtime infrastructure and developer tooling projects by Syed Abdul Mukheeth.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <header className="px-4 pt-10 pb-8 motion-safe:animate-rise sm:px-6">
        <p className="font-mono text-xs text-muted">{String(PROJECTS.length).padStart(2, "0")} projects</p>
        <h1 className="mt-2 font-serif text-5xl leading-none tracking-tight">Projects</h1>
        <p className="mt-3 max-w-lg text-[15px] leading-7 text-muted">
          Things I&apos;ve founded, designed and built, from a growth studio to sandboxed code execution and
          event-driven realtime platforms.
        </p>
      </header>
      <section aria-label="All projects" className="relative">
        <Rule />
        <ProjectGrid />
      </section>
    </>
  );
}
