import { ArrowUpRight } from "lucide-react";
import { Chip } from "@/components/ui/chip";
import { Section } from "@/components/ui/section";
import { EXPERIENCE } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="border-t border-dashed border-line">
        {EXPERIENCE.map(({ role, company, type, start, end, location, icon: Icon, skills, links, documents }) => (
          <li key={`${role}-${company}`} className="flex gap-4 border-b border-dashed border-line px-4 py-5 sm:px-6">
            <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-line bg-surface text-muted">
              <Icon className="size-4" />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                <h3 className="font-semibold tracking-tight">{role}</h3>
                <p className="inline-flex items-center gap-1.5 font-mono text-xs text-muted">
                  {!end && <span aria-hidden className="size-1.5 rounded-full bg-live" />}
                  {start} - {end ?? "Present"}
                </p>
              </div>
              <p className="text-sm text-muted">
                {company} · {type}
              </p>
              <p className="mt-0.5 text-xs text-muted">{location}</p>

              {skills && (
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {skills.map((skill) => (
                    <li key={skill}>
                      <Chip>{skill}</Chip>
                    </li>
                  ))}
                </ul>
              )}

              {links && (
                <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                  {links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-0.5 text-sm text-muted transition-colors hover:text-fg"
                      >
                        {link.label}
                        <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </li>
                  ))}
                </ul>
              )}

              {documents && (
                <ul className="mt-4 flex flex-wrap gap-3">
                  {documents.map((doc) => (
                    <li key={doc.src}>
                      <a href={doc.src} target="_blank" rel="noopener noreferrer" className="group block w-36 sm:w-44">
                        <div className="h-24 overflow-hidden rounded-md border border-line bg-surface">
                          {/* eslint-disable-next-line @next/next/no-img-element -- pre-sized static thumbnail */}
                          <img
                            src={doc.thumb}
                            alt={doc.label}
                            loading="lazy"
                            className="size-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                          />
                        </div>
                        <span className="mt-1.5 flex items-center gap-1 text-xs text-muted transition-colors group-hover:text-fg">
                          {doc.label}
                          <ArrowUpRight className="size-3 shrink-0" />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
