import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CopyEmailButton } from "@/components/site/copy-email";
import { Container } from "@/components/ui/container";
import { PORTRAIT, PROFILE } from "@/lib/data";

const step = (i: number) => ({ "--i": i }) as React.CSSProperties;

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="pt-10 pb-12 md:pt-16 md:pb-16">
      <Container className="grid items-center gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <p
            className="enter inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-sm text-muted"
            style={step(0)}
          >
            <span aria-hidden className="size-2 rounded-full bg-accent" />
            {PROFILE.availability}
          </p>

          <h1
            id="hero-title"
            className="enter mt-6 text-5xl leading-[1.02] font-semibold tracking-[-0.04em] text-balance sm:text-6xl"
            style={step(1)}
          >
            {PROFILE.name}
          </h1>

          <p className="enter mt-6 max-w-[34ch] text-lg leading-8 text-muted" style={step(2)}>
            {PROFILE.intro}
          </p>

          <div className="enter mt-9 flex flex-wrap items-center gap-3" style={step(3)}>
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
        </div>

        <figure className="enter mx-auto w-full max-w-sm md:col-span-5 md:max-w-none" style={step(2)}>
          <Image
            src={PORTRAIT.src}
            alt={PORTRAIT.alt}
            width={PORTRAIT.width}
            height={PORTRAIT.height}
            priority
            unoptimized
            className="aspect-[4/5] w-full rounded-xl border border-line object-cover"
          />
        </figure>
      </Container>
    </section>
  );
}
