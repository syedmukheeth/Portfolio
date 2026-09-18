import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { CopyEmailButton } from "@/components/site/copy-email";
import { Container } from "@/components/ui/container";
import { LOKHA, PORTRAIT, PROFILE, SOCIALS } from "@/lib/data";

const step = (i: number) => ({ "--i": i }) as React.CSSProperties;

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="pt-10 pb-12 md:pt-16 md:pb-20">
      <Container>
        <a
          href={LOKHA.url}
          target="_blank"
          rel="noopener"
          className="enter group inline-flex items-center gap-2 rounded-full border border-line bg-surface py-1 pr-2.5 pl-3 text-sm text-muted transition-colors duration-[var(--dur-micro)] hover:border-faint hover:text-fg"
          style={step(0)}
        >
          <span aria-hidden className="size-2 rounded-full bg-accent ring-4 ring-accent/15" />
          {PROFILE.status}
          <ArrowUpRight
            aria-hidden
            className="size-3.5 text-faint transition-transform duration-[var(--dur-micro)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg motion-reduce:transition-none"
          />
        </a>

        {/* md+: one line that fills the container. The name is ~11.94x its font size wide in Geist
            Semibold at -0.04em, so 0.081 x the container's inner width leaves ~3% to spare. */}
        <h1
          id="hero-title"
          className="enter mt-6 text-5xl leading-[1.02] font-semibold tracking-[-0.04em] text-balance sm:text-6xl md:text-[length:min(calc((100vw_-_4rem)*0.081),5.2rem)] md:whitespace-nowrap"
          style={step(1)}
        >
          {PROFILE.name}
        </h1>

        <div className="mt-10 grid gap-10 md:mt-12 md:grid-cols-12 md:items-center md:gap-12 md:border-t md:border-line md:pt-12">
          <div className="md:col-span-7">
            <p className="enter max-w-[40ch] text-lg leading-8 text-muted sm:text-xl sm:leading-9" style={step(2)}>
              {PROFILE.intro}
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
                {SOCIALS.map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="press grid size-11 place-items-center rounded-full text-muted hover:bg-surface hover:text-fg"
                    >
                      <Icon className="size-[18px]" aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <p className="enter mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted" style={step(4)}>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-4" aria-hidden />
                {PROFILE.location}
              </span>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="link hover:text-fg">
                <span className="font-medium text-fg">{PROFILE.linkedinFollowers}</span> followers on LinkedIn
              </a>
            </p>
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
