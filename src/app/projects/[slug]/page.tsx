import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Rule } from "@/components/site/rule";
import { Chip } from "@/components/ui/chip";
import { Section } from "@/components/ui/section";
import { posterFor, PROJECTS } from "@/lib/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.id }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.id === slug);
  if (!project) return {};
  return {
    title: `${project.title}: ${project.tagline}`,
    description: project.description,
    alternates: { canonical: `/projects/${project.id}` },
    openGraph: { title: project.title, description: project.description, type: "article" },
  };
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-x-8 gap-y-2 px-4 text-[15px] leading-7 text-muted sm:grid-cols-2 sm:px-6">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden className="text-faint">
            •
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = PROJECTS.findIndex((p) => p.id === slug);
  if (index === -1) notFound();

  const project = PROJECTS[index];
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  const clip = project.clips?.[0];

  return (
    <article>
      <header className="px-4 pt-6 pb-8 motion-safe:animate-rise sm:px-6">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-fg"
        >
          <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
          Projects
        </Link>
        <p className="mt-8 font-mono text-xs text-muted">{project.role}</p>
        <h1 className="mt-2 font-serif text-5xl leading-none tracking-tight sm:text-6xl">{project.title}</h1>
        <p className="mt-3 text-lg text-muted">{project.tagline}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center gap-1.5 rounded-full bg-fg px-4 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              Live demo
              <ArrowUpRight className="size-4" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center gap-2 rounded-full border border-line px-4 text-sm text-muted transition-colors hover:bg-fg/5 hover:text-fg"
            >
              <FaGithub className="size-4" />
              Source
            </a>
          )}
        </div>
      </header>

      <div className="relative">
        <Rule />
        <dl className="grid grid-cols-3 border-b border-dashed border-line">
          {project.stats.map(({ label, value }) => (
            <div key={label} className="border-r border-dashed border-line px-4 py-4 last:border-r-0 sm:px-6">
              <dt className="font-mono text-[11px] text-muted">{label}</dt>
              <dd className="mt-1 text-sm font-medium sm:text-base">{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {clip && (
        <figure className="px-2 py-3 sm:px-3">
          <video
            src={clip}
            poster={posterFor(project)}
            controls
            muted
            playsInline
            preload="none"
            className="aspect-video w-full rounded-sm border border-line bg-surface object-cover"
          />
        </figure>
      )}

      <Section id="overview" title="Overview">
        <p className="px-4 text-[15px] leading-7 text-muted sm:px-6">{project.fullOverview}</p>
      </Section>

      {project.sections.map((section, i) => (
        <Section key={section.title} id={`section-${i}`} title={section.title}>
          <p className="px-4 text-[15px] leading-7 text-muted sm:px-6">{section.body}</p>
          {section.points && (
            <dl className="mt-5 grid border-t border-dashed border-line sm:grid-cols-2">
              {section.points.map((point) => (
                <div
                  key={point.title}
                  className="border-b border-dashed border-line px-4 py-4 sm:px-6 sm:odd:border-r"
                >
                  <dt className="text-sm font-medium">{point.title}</dt>
                  <dd className="mt-1 text-sm leading-6 text-muted">{point.body}</dd>
                </div>
              ))}
            </dl>
          )}
        </Section>
      ))}

      <Section id="architecture" title="Architecture">
        <ol className="flex flex-wrap items-center gap-2 px-4 font-mono text-xs sm:px-6">
          {project.architecture.nodes.map((node, i) => (
            <li key={node} className="flex items-center gap-2">
              {i > 0 && <ArrowRight aria-hidden className="size-3.5 text-faint" />}
              <span className="rounded-sm border border-line bg-surface px-2.5 py-1.5">{node}</span>
            </li>
          ))}
        </ol>
        <ul className="mt-4 flex flex-wrap gap-1.5 px-4 sm:px-6">
          {project.architecture.flow.map((step) => (
            <li key={step}>
              <Chip>{step}</Chip>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="features" title="Features">
        <Bullets items={project.features} />
      </Section>

      <Section id="challenges" title="Challenges">
        <Bullets items={project.challenges} />
      </Section>

      <Section id="stack" title="Stack">
        <ul className="flex flex-wrap gap-1.5 px-4 sm:px-6">
          {project.stack.map((tech) => (
            <li key={tech}>
              <Chip className="h-7 text-sm">{tech}</Chip>
            </li>
          ))}
        </ul>
        <p className="mt-6 px-4 font-mono text-xs text-muted sm:px-6">Demonstrates</p>
        <ul className="mt-2 flex flex-wrap gap-1.5 px-4 sm:px-6">
          {project.demonstrates.map((skill) => (
            <li key={skill}>
              <Chip>{skill}</Chip>
            </li>
          ))}
        </ul>
      </Section>

      <nav aria-label="Next project" className="relative">
        <Rule />
        <Link
          href={`/projects/${next.id}`}
          className="group flex items-center justify-between gap-4 px-4 py-6 transition-colors hover:bg-fg/[0.03] sm:px-6"
        >
          <span>
            <span className="block font-mono text-xs text-muted">Next project</span>
            <span className="mt-1 block font-serif text-3xl leading-none tracking-tight">{next.title}</span>
          </span>
          <ArrowRight className="size-5 text-muted transition-transform group-hover:translate-x-1 group-hover:text-fg" />
        </Link>
      </nav>
    </article>
  );
}
