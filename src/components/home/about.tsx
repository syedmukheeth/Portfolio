import Link from "next/link";
import { Section } from "@/components/ui/section";

function Em({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold text-fg">{children}</strong>;
}

function ProjectLink({ slug, children }: { slug: string; children: React.ReactNode }) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="font-semibold text-fg underline decoration-faint underline-offset-4 transition-colors hover:decoration-fg"
    >
      {children}
    </Link>
  );
}

export function About() {
  const bullets = [
    <>
      I&apos;m a <Em>software engineer</Em> focused on <Em>backend architecture</Em> and{" "}
      <Em>distributed systems</Em>, building infrastructure that makes complexity feel simple.
    </>,
    <>
      I work mostly with <Em>TypeScript, Node.js, Redis, Kafka and Docker</Em>: queue-driven pipelines, realtime
      sync and sandboxed code execution.
    </>,
    <>
      Through <ProjectLink slug="sam-compiler">SAM Compiler</ProjectLink>,{" "}
      <ProjectLink slug="sam-index">SAMIndex</ProjectLink> and <ProjectLink slug="peer-net">PeerNet</ProjectLink> I
      explore high-performance systems, and I&apos;m looking for <Em>full-time or internship roles</Em> to apply them.
    </>,
  ];

  return (
    <Section id="about" title="About">
      <ul className="space-y-3 px-4 text-[15px] leading-7 text-muted sm:px-6">
        {bullets.map((content, i) => (
          <li key={i} className="flex gap-3">
            <span aria-hidden className="text-faint">
              •
            </span>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
