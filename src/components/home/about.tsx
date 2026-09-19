import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ReadMore } from "@/components/ui/read-more";
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
  { label: "Community", value: `${PROFILE.linkedinFollowers} followers on LinkedIn`, href: PROFILE.linkedin },
  { label: "Focus", value: "Backend and distributed systems" },
];

/** Each topic paired with the job it does for a product, in the order a product meets its audience. */
const MARKETING_TOPICS = [
  { topic: "SEO & content", role: "Getting found" },
  { topic: "Positioning & messaging", role: "Being understood" },
  { topic: "Personal branding", role: "Earning trust" },
  { topic: "Growth & distribution", role: "Reaching people" },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="reveal py-16 md:py-20">
      <Container>
        <SectionHeading id="about" title="About" />
        <div className="grid gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <div className="text-[17px] leading-8 text-muted">
              <p>
                I&apos;m {PROFILE.shortName}, a software engineer focused on <Strong>backend architecture</Strong> and{" "}
                <Strong>distributed systems</Strong>. I build infrastructure that makes complexity feel simple.
              </p>
              <ReadMore className="mt-5 space-y-5">
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
                  development, and I design <Strong>AI workflows and automations</Strong>{" "}
                  that take repetitive work off a team&apos;s plate.
                </p>
              </ReadMore>
            </div>

            <aside aria-labelledby="learning-title" className="mt-12 border-t border-line pt-10">
              <p className="font-mono text-xs tracking-[0.08em] text-muted uppercase">Learning in public</p>
              <h3 id="learning-title" className="mt-3 text-2xl font-semibold tracking-tight">
                Tech marketing
                <span
                  aria-hidden
                  className="caret ml-1.5 inline-block h-[0.85em] w-[0.42em] translate-y-[0.1em] rounded-[1px] bg-accent-text"
                />
              </h3>
              <p className="mt-3 max-w-[60ch] text-[15px] leading-7 text-muted">
                I&apos;m early in my tech marketing journey and all in on it. I&apos;m studying how technical products reach
                the right people, and I practice in public on LinkedIn, where{" "}
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link font-medium text-fg hover:text-accent-text"
                >
                  {PROFILE.linkedinFollowers} people
                </a>{" "}
                follow along. What I learn goes straight into the growth systems I build for founders.
              </p>
              <ol className="mt-8 border-b border-line">
                {MARKETING_TOPICS.map(({ topic, role }, i) => (
                  <li
                    key={topic}
                    className="grid grid-cols-[2.25rem_1fr] items-baseline gap-x-3 border-t border-line py-4 sm:grid-cols-[2.25rem_1fr_auto]"
                  >
                    <span className="font-mono text-xs text-faint tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[15px] font-medium">{topic}</span>
                    <span className="col-start-2 mt-0.5 text-sm text-muted sm:col-start-auto sm:mt-0">{role}</span>
                  </li>
                ))}
              </ol>
            </aside>
          </div>

          {/* Phones and small tablets: a swipeable strip of fact cards right under the heading, so the
              essentials come before the long read. md+: the sidebar beside the text. */}
          <dl className="no-scrollbar order-first -mx-5 flex snap-x snap-mandatory scroll-px-5 gap-3 overflow-x-auto overscroll-x-contain px-5 sm:-mx-8 sm:scroll-px-8 sm:px-8 md:order-none md:col-span-4 md:col-start-9 md:mx-0 md:grid md:grid-cols-1 md:content-start md:gap-6 md:overflow-visible md:border-l md:border-line md:px-0 md:pl-8">
            {FACTS.map(({ label, value, href }) => (
              <div
                key={label}
                className="shrink-0 snap-start rounded-lg border border-line bg-surface px-4 py-3 md:rounded-none md:border-0 md:bg-transparent md:p-0"
              >
                <dt className="text-sm text-muted">{label}</dt>
                <dd className="mt-1 text-[15px] font-medium whitespace-nowrap md:whitespace-normal">
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
