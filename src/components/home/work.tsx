import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PROJECTS, type Project } from "@/lib/data";
import { WorkList } from "./work-list";

function Featured({ project }: { project: Project }) {
  const href = `/projects/${project.id}`;

  return (
    <article className="group grid gap-8 md:grid-cols-12 md:items-center md:gap-12">
      <Link href={href} tabIndex={-1} aria-hidden className="block overflow-hidden rounded-xl border border-line bg-surface md:col-span-7">
        <Image
          src={project.thumbnail}
          alt=""
          width={1440}
          height={900}
          unoptimized
          className="aspect-[16/10] w-full object-cover object-top transition-transform duration-[var(--dur-base)] ease-[var(--ease-out)] group-hover:scale-[1.02] motion-reduce:transition-none"
        />
      </Link>

      <div className="md:col-span-5">
        <p className="text-sm text-muted">{project.role}</p>
        <h3 className="mt-2 text-3xl font-semibold tracking-tight">
          <Link href={href} className="link hover:text-accent-text">
            {project.title}
          </Link>
        </h3>
        <p className="mt-3 leading-7 text-muted">{project.description}</p>

        <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-line pt-6">
          {project.stats.slice(0, 2).map(({ label, value }) => (
            <div key={label}>
              <dd className="text-3xl font-semibold tracking-tight tabular-nums">{value}</dd>
              <dt className="mt-1 text-sm text-muted">{label}</dt>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
          <Link href={href} className="link inline-flex items-center gap-1 hover:text-accent-text">
            Read case study
            <ArrowRight className="size-4" aria-hidden />
          </Link>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="link inline-flex items-center gap-0.5 text-muted hover:text-fg"
            >
              Visit site
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function Work({ heading = true }: { heading?: boolean }) {
  const [featured, ...rest] = PROJECTS;

  return (
    <section id="projects" aria-labelledby={heading ? "projects-title" : undefined} aria-label={heading ? undefined : "Projects"} className="reveal py-16 md:py-20">
      <Container>
        {heading && (
          <SectionHeading
            id="projects"
            title="Projects"
            action={
              <Link href="/projects" className="link text-sm text-muted hover:text-fg">
                All projects
              </Link>
            }
          />
        )}
        <Featured project={featured} />
        <div className="mt-16">
          <WorkList projects={rest} />
        </div>
      </Container>
    </section>
  );
}
