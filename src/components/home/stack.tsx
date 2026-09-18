import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { projectsUsing, SKILL_CATEGORIES, SKILLS } from "@/lib/data";

const slug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export function Stack() {
  return (
    <section id="stack" aria-labelledby="stack-title" className="reveal py-16 md:py-20">
      <Container>
        <SectionHeading id="stack" title="Stack" />
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category}>
              <h3 className="mb-4 text-sm text-muted">{category}</h3>
              <ul className="space-y-3">
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
                        className="inline-flex items-center gap-2.5 text-[15px] text-fg"
                      >
                        <Icon
                          aria-hidden
                          className="size-4 shrink-0 text-muted transition-colors duration-[var(--dur-micro)] group-hover:text-accent-text group-focus-within:text-accent-text"
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
