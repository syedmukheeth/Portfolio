import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CopyEmailButton } from "@/components/site/copy-email";
import { LocalTime } from "@/components/site/local-time";
import { Container } from "@/components/ui/container";
import { LOKHA, PORTRAIT, PROFILE, SOCIALS } from "@/lib/data";
import { cn } from "@/lib/utils";

const step = (i: number) => ({ "--i": i }) as React.CSSProperties;

/** Browsers may wrap right after a hyphen ("AI-" / "powered"); keep hyphenated words whole. */
const keepHyphenatedWords = (text: string) =>
  text.split(/(\S+-\S+)/).map((part, i) =>
    i % 2 ? (
      <span key={i} className="whitespace-nowrap">
        {part}
      </span>
    ) : (
      part
    ),
  );

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="pt-10 pb-12 md:pt-16 md:pb-20">
      <Container>
        {/* Masthead: role on the left, place and live local time on the right, framing the name like a nameplate. */}
        <div
          className="enter flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 font-mono text-xs tracking-[0.08em] text-muted uppercase"
          style={step(0)}
        >
          <p>
            Tech Lead at{" "}
            <a
              href={LOKHA.url}
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-1 text-fg transition-colors duration-[var(--dur-micro)] hover:text-accent-text"
            >
              <span className="underline decoration-accent-text decoration-2 underline-offset-[5px]">{LOKHA.name}</span>
              <ArrowUpRight
                aria-hidden
                className="size-3 text-faint transition-transform duration-[var(--dur-micro)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-text motion-reduce:transition-none"
              />
            </a>
          </p>
          <p>
            {PROFILE.location}
            <span aria-hidden className="mx-2 text-faint">
              ·
            </span>
            <LocalTime />
          </p>
        </div>

        {/* md+: one line that fills the container. The name is ~11.94x its font size wide in Geist
            Semibold at -0.04em, so 0.081 x the container's inner width leaves ~3% to spare. */}
        <h1
          id="hero-title"
          className="enter mt-5 text-5xl leading-[1.02] font-semibold tracking-[-0.04em] text-balance sm:text-6xl md:text-[length:min(calc((100vw_-_4rem)*0.081),5.2rem)] md:whitespace-nowrap"
          style={step(1)}
        >
          {PROFILE.name}
        </h1>

        <div className="mt-10 grid gap-10 md:mt-12 md:grid-cols-12 md:items-center md:gap-12 md:border-t md:border-line md:pt-12">
          <div className="md:col-span-7">
            <p className="enter max-w-[40ch] text-lg leading-8 text-muted sm:text-xl sm:leading-9" style={step(2)}>
              {keepHyphenatedWords(PROFILE.intro)}
            </p>

            <div className="enter mt-8 flex flex-wrap items-center gap-3" style={step(3)}>
              <CopyEmailButton />
              <a
                href={PROFILE.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="press inline-flex h-11 items-center gap-1.5 rounded-full border border-line px-5 text-sm font-medium text-fg hover:border-faint hover:bg-surface"
              >
                Resume
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
              <ul className="flex items-center gap-1 sm:ml-1">
                {SOCIALS.map(({ label, href, icon: Icon }) => {
                  // Follower count rides along with the LinkedIn icon, like a star count on a repo button.
                  const count = label === "LinkedIn" ? PROFILE.linkedinFollowers : null;
                  return (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={count ? `${label}, ${count} followers` : label}
                        title={count ? `${count} followers on ${label}` : undefined}
                        className={cn(
                          "press inline-flex h-11 items-center justify-center gap-2 rounded-full text-muted hover:bg-surface hover:text-fg",
                          count ? "px-3" : "w-11",
                        )}
                      >
                        <Icon className="size-[18px]" aria-hidden />
                        {count && <span className="font-mono text-xs tabular-nums">{count}</span>}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <figure className="enter mx-auto w-full max-w-sm md:col-span-5 md:max-w-none" style={step(2)}>
            <Image
              src={PORTRAIT.src}
              alt={PORTRAIT.alt}
              width={PORTRAIT.width}
              height={PORTRAIT.height}
              priority
              unoptimized
              className="aspect-[4/5] w-full rounded-xl border border-line object-cover md:aspect-[4/3] md:object-[50%_25%]"
            />
          </figure>
        </div>
      </Container>
    </section>
  );
}
