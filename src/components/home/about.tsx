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

const FACTS = [
  { label: "Based in", value: `${PROFILE.location} (${PROFILE.timezone})` },
  { label: "Currently", value: `Tech Lead at ${LOKHA.name}` },
  { label: "Building", value: STUDIO.name },
  { label: "Looking for", value: "Full-time roles and internships" },
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
          </div>

          <dl className="grid content-start gap-6 border-t border-line pt-8 md:col-span-4 md:col-start-9 md:border-t-0 md:border-l md:pt-0 md:pl-8">
            {FACTS.map(({ label, value }) => (
              <div key={label}>
                <dt className="text-sm text-muted">{label}</dt>
                <dd className="mt-1 text-[15px] font-medium">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
