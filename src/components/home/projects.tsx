import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/ui/project-card";
import { Section } from "@/components/ui/section";
import { PROJECTS } from "@/lib/data";

export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      action={
        <Link
          href="/projects"
          className="group inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-fg"
        >
          View all
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      }
    >
      <div className="grid grid-cols-1 border-t border-dashed border-line md:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} priority={i < 2} />
        ))}
      </div>
    </Section>
  );
}
