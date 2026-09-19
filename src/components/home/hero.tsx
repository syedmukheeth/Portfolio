import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CopyEmailButton } from "@/components/site/copy-email";
import { Container } from "@/components/ui/container";
import { PORTRAIT, PROFILE, SOCIALS } from "@/lib/data";
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
        {/* md+: one line that fills the container. The name is ~11.94x its font size wide in Geist
            Semibold at -0.04em, so 0.081 x the container's inner width leaves ~3% to spare. */}
        <h1
          id="hero-title"
          className="enter text-5xl leading-[1.02] font-semibold tracking-[-0.04em] text-balance sm:text-6xl md:text-[length:min(calc((100vw_-_4rem)*0.081),5.2rem)] md:whitespace-nowrap"
          style={step(0)}
        >
          {PROFILE.name}
        </h1>

        {/* Two columns only from lg: on tablets the photo would shrink to a thumbnail beside a narrow column. */}
        <div className="mt-10 grid gap-10 md:mt-12 md:border-t md:border-line md:pt-12 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-7">
            <p className="enter max-w-[40ch] text-lg leading-8 text-muted sm:text-xl sm:leading-9" style={step(1)}>
              {keepHyphenatedWords(PROFILE.intro)}
            </p>

            <div className="enter mt-8 flex flex-wrap items-center gap-3" style={step(2)}>
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
            </div>

            {/* Own row at every width, pulled left so the first glyph lines up with the text edge. */}
            <ul className="enter mt-4 -ml-3 flex items-center gap-1" style={step(3)}>
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

          {/* Phones: portrait crop, left-aligned with the text. sm+: landscape crop framed on the face; wider on tablets, where it spans the full column. */}
          <figure className="enter w-full max-w-sm sm:max-w-none lg:col-span-5" style={step(1)}>
            <Image
              src={PORTRAIT.src}
              alt={PORTRAIT.alt}
              width={PORTRAIT.width}
              height={PORTRAIT.height}
              priority
              unoptimized
              className="aspect-[4/5] w-full rounded-xl border border-line object-cover sm:aspect-[4/3] sm:object-[50%_25%] md:aspect-[16/9] lg:aspect-[4/3]"
            />
          </figure>
        </div>
      </Container>
    </section>
  );
}
