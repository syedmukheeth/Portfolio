import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectGrid } from "@/components/ui/project-grid";
import { Section } from "@/components/ui/section";

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
      <div className="border-t border-dashed border-line">
        <ProjectGrid />
      </div>
    </Section>
  );
}
