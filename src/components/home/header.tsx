import Image from "next/image";
import { Rule } from "@/components/site/rule";
import { PROFILE } from "@/lib/data";

function Banner() {
  return (
    <div className="relative h-32 overflow-hidden rounded-sm border border-line bg-surface sm:h-52">
      <div
        aria-hidden
        className="dot-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_70%_20%,black,transparent_75%)]"
      />
      <div
        aria-hidden
        className="absolute -top-24 right-[-10%] size-80 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--fg)_10%,transparent),transparent_70%)] blur-2xl"
      />
      <p className="absolute top-3 left-4 font-mono text-[11px] text-muted sm:top-4">~/{PROFILE.github}</p>
      <p className="absolute right-4 bottom-3 font-mono text-[11px] text-muted sm:bottom-4">
        {PROFILE.coordinates}
      </p>
      <p
        aria-hidden
        className="absolute bottom-2 left-4 font-serif text-5xl leading-none tracking-tight text-fg/[0.07] select-none sm:bottom-3 sm:text-8xl"
      >
        systems.
      </p>
    </div>
  );
}

export function Header() {
  return (
    <header className="motion-safe:animate-rise">
      <div className="px-2 pt-2 sm:px-3 sm:pt-3">
        <Banner />
      </div>

      <div className="relative mt-3 flex items-center gap-4 px-4 py-5 sm:gap-6 sm:px-6">
        <Rule />
        <div className="shrink-0 rounded-xl border border-line bg-surface p-1">
          <Image
            src={PROFILE.avatar}
            alt={PROFILE.name}
            width={112}
            height={112}
            priority
            unoptimized
            className="size-20 rounded-[9px] object-cover sm:size-28"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 text-xs text-muted">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full rounded-full bg-live opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-live" />
            </span>
            {PROFILE.availability}
          </div>
          <h1 className="mt-1.5 font-serif text-4xl leading-none tracking-tight sm:text-5xl">{PROFILE.name}</h1>
          <p className="mt-2 text-sm font-medium text-muted sm:text-base">
            {PROFILE.role} <span className="text-faint">·</span> {PROFILE.focus}
          </p>
          <p className="mt-1 font-mono text-[11px] text-muted">
            {PROFILE.location} · {PROFILE.timezone}
          </p>
        </div>
      </div>
    </header>
  );
}
