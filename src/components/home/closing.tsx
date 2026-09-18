import { ArrowUpRight, Globe } from "lucide-react";
import { CopyEmailLarge } from "@/components/site/copy-email";
import { Container } from "@/components/ui/container";
import { SOCIALS, STUDIO } from "@/lib/data";

const LINKS = [...SOCIALS, { label: STUDIO.name, href: STUDIO.url, icon: Globe }];

export function Closing() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="reveal pt-10 pb-24 md:pb-32">
      <Container>
        <div className="rounded-xl border border-line bg-surface p-6 min-[375px]:p-8 sm:p-12 md:p-16">
          <h2
            id="contact-title"
            tabIndex={-1}
            className="max-w-[18ch] text-4xl font-semibold tracking-tight text-balance outline-none sm:text-5xl"
          >
            Have a role or a project in mind?
          </h2>
          <p className="mt-4 max-w-[52ch] leading-7 text-muted">
            I&apos;m open to full-time roles and internships, and {STUDIO.name} takes on founder projects.
          </p>

          <div className="mt-10">
            <CopyEmailLarge />
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-6">
            {LINKS.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
                >
                  <Icon className="size-4" aria-hidden />
                  <span className="link">{label}</span>
                  <ArrowUpRight className="size-3.5 text-faint transition-transform duration-[var(--dur-micro)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg motion-reduce:transition-none" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
