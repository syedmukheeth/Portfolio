import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { projectsUsing, SKILL_CATEGORIES, SKILLS } from "@/lib/data";

const slug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export function Stack() {
  return (
    <section id="stack" aria-labelledby="stack-title" className="reveal py-16 md:py-20">
      <Container>
        <SectionHeading id="stack" title="Stack" />
        {/* Phones: one category per row, its tools as wrapping chips. sm+: a column per category. */}
        <div className="grid gap-5 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-6 lg:gap-x-6">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category}>
              <h3 className="mb-2.5 text-sm text-muted sm:mb-4">{category}</h3>
              <ul className="flex flex-wrap gap-1.5 sm:block sm:space-y-3">
                {SKILLS.filter((s) => s.category === category).map(({ name, href, icon: Icon }) => {
                  const usedIn = projectsUsing(name).map((p) => p.title);
                  const tipId = `skill-${slug(name)}`;
                  return (
                    <li key={name} className="group relative">
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-describedby={usedIn.length ? tipId : undefined}
                        className="press inline-flex h-8 items-center gap-1.5 rounded-full border border-line bg-surface px-3 text-[13px] text-fg sm:h-auto sm:gap-2.5 sm:rounded-none sm:border-0 sm:bg-transparent sm:px-0 sm:text-[15px] sm:hit-area"
                      >
                        <Icon
                          aria-hidden
                          className="size-3.5 shrink-0 text-muted transition-colors duration-[var(--dur-micro)] group-hover:text-accent-text group-focus-within:text-accent-text sm:size-4"
                        />
                        {name}
                      </a>
                      {usedIn.length > 0 && (
                        <span
                          id={tipId}
                          role="tooltip"
                          className="pointer-events-none absolute bottom-full left-0 z-10 mb-2 translate-y-1 pointer-coarse:hidden rounded-md border border-line bg-elevated px-2 py-1 text-xs whitespace-nowrap text-muted opacity-0 shadow-lg shadow-black/20 transition duration-[var(--dur-micro)] group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:translate-y-0"
                        >
                          Used in {usedIn.join(", ")}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
