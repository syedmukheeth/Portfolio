import { ProjectCard } from "@/components/ui/project-card";
import { PROJECTS } from "@/lib/data";

/** First project full width, the rest in a two-column grid. */
export function ProjectGrid() {
  const [featured, ...rest] = PROJECTS;

  return (
    <>
      <ProjectCard project={featured} featured priority />
      <div className="grid grid-cols-1 md:grid-cols-2">
        {rest.map((project) => (
          <ProjectCard key={project.id} project={project} className="md:odd:border-r" />
        ))}
      </div>
    </>
  );
}
