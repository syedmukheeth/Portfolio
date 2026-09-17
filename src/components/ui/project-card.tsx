import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Chip } from "@/components/ui/chip";
import type { Project } from "@/lib/data";

const MAX_CHIPS = 3;

function Status({ live }: { live: boolean }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 pt-1 text-xs text-muted">
      <span className={live ? "size-1.5 rounded-full bg-live" : "size-1.5 rounded-full bg-faint"} />
      {live ? "Live" : "Source"}
    </span>
  );
}

function IconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid size-7 place-items-center rounded-md text-muted transition-colors hover:bg-fg/5 hover:text-fg"
    >
      {children}
    </a>
  );
}

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  const href = `/projects/${project.id}`;
  const extra = project.stack.length - MAX_CHIPS;

  return (
    <article className="group flex flex-col border-b border-dashed border-line p-3 sm:p-4 md:odd:border-r">
      <Link
        href={href}
        tabIndex={-1}
        aria-hidden
        className="relative block h-48 overflow-hidden rounded-md sm:h-56"
        style={{ backgroundImage: `linear-gradient(135deg, ${project.tint[0]}, ${project.tint[1]})` }}
      >
        <div aria-hidden className="dot-grid absolute inset-0 opacity-40 mix-blend-overlay" />
        <Image
          src={project.thumbnail}
          alt=""
          width={1440}
          height={900}
          priority={priority}
          unoptimized
          className="absolute top-10 left-10 w-[92%] max-w-none rounded-lg border-4 border-white/25 shadow-2xl shadow-black/40 transition-transform duration-300 ease-out group-hover:-translate-x-1.5 group-hover:-translate-y-1.5"
        />
      </Link>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-lg font-semibold tracking-tight">
            <Link href={href} className="hover:underline hover:decoration-faint hover:underline-offset-4">
              {project.title}
            </Link>
          </h3>
          <p className="text-sm text-muted">{project.tagline}</p>
        </div>
        <Status live={Boolean(project.demo)} />
      </div>

      <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted">{project.description}</p>

      <div className="mt-auto flex items-center justify-between gap-3 pt-4">
        <ul className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, MAX_CHIPS).map((tech) => (
            <li key={tech}>
              <Chip>{tech}</Chip>
            </li>
          ))}
          {extra > 0 && (
            <li>
              <Chip className="text-faint">+{extra}</Chip>
            </li>
          )}
        </ul>
        <div className="flex shrink-0 items-center">
          {project.demo && (
            <IconLink href={project.demo} label={`${project.title} live demo`}>
              <Globe className="size-4" />
            </IconLink>
          )}
          {project.github && (
            <IconLink href={project.github} label={`${project.title} source on GitHub`}>
              <FaGithub className="size-4" />
            </IconLink>
          )}
        </div>
      </div>
    </article>
  );
}
