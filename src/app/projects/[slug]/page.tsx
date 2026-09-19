import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Toc, type TocItem } from "@/components/project/toc";
import { Container } from "@/components/ui/container";
import { Tag } from "@/components/ui/tag";
import { posterFor, PROJECTS, type Project } from "@/lib/data";

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

const step = (i: number) => ({ "--i": i }) as React.CSSProperties;
const slug = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
/** "The problem" -> "Problem" for the compact table of contents. */
const tocLabel = (title: string) => {
  const label = title.replace(/^The /, "");
  return label.charAt(0).toUpperCase() + label.slice(1);
};

function Block({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="reveal scroll-mt-24">
      <h2 id={`${id}-title`} tabIndex={-1} className="mb-5 text-xl font-semibold tracking-tight outline-none">
        {title}
      </h2>
      {children}
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-x-10 gap-y-3 text-[15px] leading-7 text-muted sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden className="mt-3 size-1 shrink-0 rounded-full bg-faint" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Media({ project }: { project: Project }) {
  const clip = project.clips?.[0];
  const frame = "w-full rounded-xl border border-line bg-surface";

  if (clip) {
    return (
      <video
        src={clip}
        poster={posterFor(project)}
        controls
        muted
        playsInline
        preload="none"
        className={`${frame} aspect-video object-cover`}
      />
    );
  }
  return (
    <Image
      src={project.thumbnail}
      alt={`${project.title} website`}
      width={1440}
      height={900}
      priority
      unoptimized
      className={`${frame} aspect-[16/10] object-cover object-top`}
    />
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug: projectId } = await params;
  const index = PROJECTS.findIndex((p) => p.id === projectId);
  if (index === -1) notFound();

  const project = PROJECTS[index];
  const next = PROJECTS[(index + 1) % PROJECTS.length];

  const toc: TocItem[] = [
    { id: "overview", label: "Overview" },
    ...project.sections.map((s) => ({ id: slug(s.title), label: tocLabel(s.title) })),
    { id: "architecture", label: "Architecture" },
    { id: "features", label: "Features" },
    { id: "challenges", label: "Challenges" },
    { id: "stack", label: "Stack" },
  ];

  return (
    <article>
      <div aria-hidden className="reading-progress fixed inset-x-0 top-0 z-50 h-0.5 bg-accent-text" />

      <Container className="pt-10 md:pt-14">
        <Link href="/projects" className="link hit-area inline-flex items-center gap-1.5 text-sm text-muted hover:text-fg">
          <ArrowLeft className="size-4" aria-hidden />
          All projects
        </Link>

        <header className="mt-10 grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="enter text-sm text-muted" style={step(0)}>
              {project.role}
            </p>
            <h1 className="enter mt-3 text-4xl font-semibold tracking-[-0.03em] text-balance sm:text-5xl" style={step(1)}>
              {project.title}
            </h1>
            <p className="enter mt-4 max-w-[46ch] text-lg leading-8 text-muted" style={step(2)}>
              {project.tagline}
            </p>
            <div className="enter mt-8 flex flex-wrap gap-3" style={step(3)}>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="press inline-flex h-11 items-center gap-1.5 rounded-full bg-accent px-5 text-sm font-medium text-accent-ink hover:opacity-90"
                >
                  Visit site
                  <ArrowUpRight className="size-4" aria-hidden />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="press inline-flex h-11 items-center gap-2 rounded-full border border-line px-5 text-sm font-medium hover:border-faint hover:bg-surface"
                >
                  <FaGithub className="size-4" aria-hidden />
                  Source
                </a>
              )}
            </div>
          </div>

          <dl
            className="enter grid gap-3 border-t border-line pt-6 sm:grid-cols-3 sm:gap-4 md:col-span-4 md:grid-cols-1 md:gap-5 md:border-t-0 md:border-l md:pt-0 md:pl-8"
            style={step(2)}
          >
            {/* Phones: one "label ... value" row per stat, since three columns can't fit "Kafka-Native". */}
            {project.stats.map(({ label, value }) => (
              <div key={label} className="flex flex-row-reverse items-baseline justify-between gap-4 sm:block">
                <dd className="text-lg font-semibold tracking-tight tabular-nums sm:text-2xl">{value}</dd>
                <dt className="text-sm text-muted sm:mt-0.5">{label}</dt>
              </div>
            ))}
          </dl>
        </header>

        <figure className="enter mt-12" style={step(3)}>
          <Media project={project} />
        </figure>
      </Container>

      <Container className="grid gap-12 py-20 lg:grid-cols-12">
        <aside className="hidden lg:col-span-3 lg:block">
          <Toc items={toc} />
        </aside>

        <div className="space-y-16 lg:col-span-9">
          <Block id="overview" title="Overview">
            <p className="max-w-[65ch] text-[17px] leading-8 text-muted">{project.fullOverview}</p>
          </Block>

          {project.sections.map((section) => (
            <Block key={section.title} id={slug(section.title)} title={section.title}>
              <p className="max-w-[65ch] text-[17px] leading-8 text-muted">{section.body}</p>
              {section.points && (
                <dl className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2">
                  {section.points.map((point) => (
                    <div key={point.title} className="border-t border-line pt-4">
                      <dt className="font-medium">{point.title}</dt>
                      <dd className="mt-1.5 text-sm leading-6 text-muted">{point.body}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </Block>
          ))}

          <Block id="architecture" title="Architecture">
            <ol className="flex flex-wrap items-center gap-2">
              {project.architecture.nodes.map((node, i) => (
                <li key={node} className="flex items-center gap-2">
                  {i > 0 && <ArrowRight className="size-3.5 text-faint" aria-hidden />}
                  <span className="rounded-md border border-line bg-surface px-2.5 py-1.5 font-mono text-xs">{node}</span>
                </li>
              ))}
            </ol>
            <ul className="mt-5 flex flex-wrap gap-2">
              {project.architecture.flow.map((flow) => (
                <li key={flow}>
                  <Tag>{flow}</Tag>
                </li>
              ))}
            </ul>
          </Block>

          <Block id="features" title="Features">
            <List items={project.features} />
          </Block>

          <Block id="challenges" title="Challenges">
            <List items={project.challenges} />
          </Block>

          <Block id="stack" title="Stack">
            <ul className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li key={tech}>
                  <Tag className="h-7 text-sm text-fg">{tech}</Tag>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-muted">Demonstrates</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.demonstrates.map((skill) => (
                <li key={skill}>
                  <Tag>{skill}</Tag>
                </li>
              ))}
            </ul>
          </Block>
        </div>
      </Container>

      <nav aria-label="Next project" className="border-t border-line">
        <Container>
          <Link href={`/projects/${next.id}`} className="group flex items-center gap-6 py-10">
            <Image
              src={next.thumbnail}
              alt=""
              width={1440}
              height={900}
              unoptimized
              className="hidden aspect-[16/10] w-40 rounded-lg border border-line object-cover object-top sm:block"
            />
            <span className="flex-1">
              <span className="block text-sm text-muted">Next project</span>
              <span className="mt-1 block text-2xl font-semibold tracking-tight transition-colors duration-[var(--dur-micro)] group-hover:text-accent-text">
                {next.title}
              </span>
            </span>
            <ArrowRight
              aria-hidden
              className="size-6 text-faint transition-transform duration-[var(--dur-micro)] group-hover:translate-x-1 group-hover:text-fg motion-reduce:transition-none"
            />
          </Link>
        </Container>
      </nav>
    </article>
  );
}
