import { ArrowUpRight } from "lucide-react";
import { Rule } from "@/components/site/rule";
import { PROFILE } from "@/lib/data";

export function Cta() {
  return (
    <section aria-labelledby="cta-title" className="relative px-4 py-16 text-center sm:px-6">
      <Rule />
      <h2 id="cta-title" className="font-serif text-4xl leading-none tracking-tight sm:text-5xl">
        Let&apos;s build something.
      </h2>
      <p className="mx-auto mt-3 max-w-md text-[15px] leading-7 text-muted">
        Open to full-time roles and backend internships in software and systems engineering.
      </p>
      <a
        href={`mailto:${PROFILE.email}`}
        className="group mt-7 inline-flex h-11 items-center gap-2 rounded-full bg-fg px-6 text-sm font-medium text-bg transition-opacity hover:opacity-90"
      >
        Get in touch
        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </section>
  );
}
