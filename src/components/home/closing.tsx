import { ArrowUpRight, Globe } from "lucide-react";
import { CopyEmailLarge } from "@/components/site/copy-email";
import { Container } from "@/components/ui/container";
import { SOCIALS, STUDIO } from "@/lib/data";

const LINKS = [...SOCIALS, { label: STUDIO.name, href: STUDIO.url, icon: Globe }];

export function Closing() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="reveal pt-10 pb-24 md:pb-32">
      <Container>
        <div className="rounded-xl border border-line bg-surface p-5 min-[375px]:p-6 sm:p-12 md:p-16">
          <h2
            id="contact-title"
            tabIndex={-1}
            className="max-w-[18ch] text-4xl font-semibold tracking-tight text-balance outline-none sm:text-5xl"
          >
            Have an idea worth building?
          </h2>
          <p className="mt-4 max-w-[52ch] leading-7 text-muted">
            {STUDIO.name}{" "}
            partners with founders on products, systems and growth. And I&apos;m always up for a good conversation
            about engineering, AI or marketing.
          </p>

          <div className="mt-10">
            <CopyEmailLarge />
          </div>

          {/* Phones: a 2x2 grid of full tap targets. sm+: an inline row of links. */}
          <ul className="mt-8 grid grid-cols-2 gap-2 border-t border-line pt-6 sm:mt-10 sm:flex sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
            {LINKS.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group press grid h-full grid-cols-[1fr_auto] gap-y-2.5 rounded-lg border border-line bg-bg p-3 text-sm text-muted hover:text-fg sm:inline-flex sm:h-auto sm:items-center sm:gap-2 sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 sm:hit-area"
                >
                  {/* Phones: icon and arrow on top, label below, like an app tile. */}
                  <Icon className="size-4" aria-hidden />
                  <span className="col-span-2 font-medium text-fg sm:font-normal sm:text-inherit">
                    <span className="link">{label}</span>
                  </span>
                  <ArrowUpRight className="col-start-2 row-start-1 size-3.5 text-faint transition-transform duration-[var(--dur-micro)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg motion-reduce:transition-none" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
