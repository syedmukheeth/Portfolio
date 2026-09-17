import type { Metadata } from "next";
import { Rule } from "@/components/site/rule";
import { ProjectCard } from "@/components/ui/project-card";
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
          Systems I&apos;ve designed and built, from sandboxed code execution to event-driven realtime platforms.
        </p>
      </header>
      <section aria-label="All projects" className="relative">
        <Rule />
        <div className="grid grid-cols-1 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} priority={i < 2} />
          ))}
        </div>
      </section>
    </>
  );
}
