import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
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
  { label: "Learning", value: "Tech marketing" },
  { label: "Community", value: `${PROFILE.linkedinFollowers} followers on LinkedIn`, href: PROFILE.linkedin },
  { label: "Focus", value: "Backend and distributed systems" },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="reveal py-16 md:py-20">
      <Container>
        <SectionHeading id="about" title="About" />
        <div className="grid gap-12 md:grid-cols-12">
          <div className="space-y-5 text-[17px] leading-8 text-muted md:col-span-7">
            <p>
              I&apos;m {PROFILE.shortName}, a software engineer focused on <Strong>backend architecture</Strong> and{" "}
              <Strong>distributed systems</Strong>, building infrastructure that makes complexity feel simple.
            </p>
            <p>
              I work mostly with <Strong>TypeScript, Node.js, Redis, Kafka and Docker</Strong>: queue-driven pipelines,
              realtime sync and sandboxed code execution. <InlineLink href="/projects/sam-compiler">SAM Compiler</InlineLink>{" "}
              and <InlineLink href="/projects/peer-net">PeerNet</InlineLink> are where I push on those ideas.
            </p>
            <p>
              AI is part of how I build. I use <Strong>Claude Code, Codex and Antigravity</Strong> for AI-assisted
              development across my projects, and I design <Strong>AI workflows and automations</Strong> that take
              repetitive work off a team&apos;s plate.
            </p>
            <p>
              I&apos;m <Strong>Tech Lead</Strong> at{" "}
              <a href={LOKHA.url} target="_blank" rel="noopener" className="link font-medium text-fg hover:text-accent-text">
                {LOKHA.name}
              </a>
              , a startup incubator in {LOKHA.locality}, where I lead website development.
            </p>
            <p>
              I also founded <InlineLink href="/projects/sampeer-studio">{STUDIO.name}</InlineLink>, where I build
              storytelling websites, growth systems and AI automation that help founders get noticed.
            </p>
            <p>
              I&apos;m a constant learner and always curious. Lately that curiosity has turned to{" "}
              <Strong>tech marketing</Strong>: how good products find their audience. The best way I know to learn
              something is to ship something real with it.
            </p>
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
