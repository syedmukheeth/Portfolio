import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";
import { LOKHA, PROFILE, STUDIO } from "@/lib/data";

function Strong({ children }: { children: React.ReactNode }) {
  return <strong className="font-medium text-fg">{children}</strong>;
}

function InlineLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="link font-medium text-fg hover:text-accent-text">
      {children}
    </Link>
  );
}

const FACTS: { label: string; value: string; href?: string }[] = [
  { label: "Based in", value: `${PROFILE.location} (${PROFILE.timezone})` },
  { label: "Currently", value: `Tech Lead at ${LOKHA.name}` },
  { label: "Building", value: STUDIO.name },
  { label: "Community", value: `${PROFILE.linkedinFollowers} followers on LinkedIn`, href: PROFILE.linkedin },
  { label: "Focus", value: "Backend and distributed systems" },
];

const MARKETING_TOPICS = ["SEO & content", "Personal branding", "Positioning & messaging", "Growth & distribution"];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="reveal py-16 md:py-20">
      <Container>
        <SectionHeading id="about" title="About" />
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="space-y-5 text-[17px] leading-8 text-muted">
              <p>
                I&apos;m {PROFILE.shortName}, a software engineer focused on <Strong>backend architecture</Strong> and{" "}
                <Strong>distributed systems</Strong>. I build infrastructure that makes complexity feel simple.
              </p>
              <p>
                Most of my work runs on <Strong>TypeScript, Node.js, Redis, Kafka and Docker</Strong>, from queue-driven
                pipelines to realtime sync and sandboxed code execution.{" "}
                <InlineLink href="/projects/sam-compiler">SAM Compiler</InlineLink> and{" "}
                <InlineLink href="/projects/peer-net">PeerNet</InlineLink> are where I push on those ideas.
              </p>
              <p>
                I&apos;m <Strong>Tech Lead</Strong> at{" "}
                <a href={LOKHA.url} target="_blank" rel="noopener" className="link font-medium text-fg hover:text-accent-text">
                  {LOKHA.name}
                </a>
                , a startup incubator in {LOKHA.locality}, where I lead website development. I also founded{" "}
                <InlineLink href="/projects/sampeer-studio">{STUDIO.name}</InlineLink>, where I build storytelling
                websites, growth systems and AI automation that help founders get noticed.
              </p>
              <p>
                AI is part of how I build. I use <Strong>Claude Code, Codex and Antigravity</Strong> for AI-assisted
                development, and I design <Strong>AI workflows and automations</Strong> that take repetitive work off a
                team&apos;s plate.
              </p>
            </div>

            <aside aria-labelledby="learning-title" className="mt-10 rounded-xl border border-line bg-surface p-6 sm:p-8">
              <p className="inline-flex items-center gap-2 text-sm text-muted">
                <span aria-hidden className="size-2 rounded-full bg-accent ring-4 ring-accent/15" />
                Now learning
              </p>
              <h3 id="learning-title" className="mt-3 text-xl font-semibold tracking-tight">
                Tech marketing
              </h3>
              <p className="mt-2 max-w-[60ch] text-[15px] leading-7 text-muted">
                I&apos;m early in my tech marketing journey and all in on it. I&apos;m studying how technical products get
                found, understood and trusted. I practice in public on LinkedIn, where{" "}
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link font-medium text-fg hover:text-accent-text"
                >
                  {PROFILE.linkedinFollowers} people
                </a>{" "}
                follow along, and bring what I learn into the growth systems I build for founders.
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {MARKETING_TOPICS.map((topic) => (
                  <li key={topic}>
                    <Tag className="h-7 text-sm">{topic}</Tag>
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          <dl className="grid content-start gap-6 border-t border-line pt-8 md:col-span-4 md:col-start-9 md:border-t-0 md:border-l md:pt-0 md:pl-8">
            {FACTS.map(({ label, value, href }) => (
              <div key={label}>
                <dt className="text-sm text-muted">{label}</dt>
                <dd className="mt-1 text-[15px] font-medium">
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="link hover:text-accent-text">
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
