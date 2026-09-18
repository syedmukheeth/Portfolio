import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { EXPERIENCE } from "@/lib/data";
import { cn } from "@/lib/utils";
import { DocumentViewer } from "./document-viewer";

function Dates({ start, end, className }: { start: string; end?: string; className?: string }) {
  return (
    <p className={cn("font-mono text-sm text-muted tabular-nums", className)}>
      {start} - {end ? end : <span className="text-accent-text">Present</span>}
    </p>
  );
}

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="reveal py-16 md:py-20">
      <Container>
        <SectionHeading id="experience" title="Experience" />
        <ol>
          {EXPERIENCE.map((job) => {
            const current = !job.end;
            return (
              <li key={`${job.role}-${job.company}`} className="grid md:grid-cols-12 md:gap-8">
                <Dates start={job.start} end={job.end} className="hidden pt-0.5 md:col-span-3 md:block" />

                <div className="relative border-l border-line pb-12 pl-8 md:col-span-9">
                  <span
                    aria-hidden
                    className={cn(
                      "absolute top-1.5 -left-[5px] size-[9px] rounded-full border",
                      current ? "border-accent bg-accent ring-4 ring-accent/15" : "border-faint bg-bg",
                    )}
                  />
                  <Dates start={job.start} end={job.end} className="mb-2 md:hidden" />
                  <h3 className="text-lg font-semibold tracking-tight">{job.role}</h3>
                  <p className="mt-1 text-[15px] text-muted">
                    <span className="text-fg">{job.company}</span>, {job.type}
                  </p>
                  <p className="mt-0.5 text-sm text-muted">{job.location}</p>

                  {job.skills && (
                    <p className="mt-4 max-w-[60ch] text-sm leading-6 text-muted">{job.skills.join(", ")}</p>
                  )}

                  {job.links && (
                    <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                      {job.links.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link inline-flex items-center gap-0.5 text-sm font-medium text-fg hover:text-accent-text"
                          >
                            {link.label}
                            <ArrowUpRight className="size-3.5" aria-hidden />
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}

                  {job.documents && <DocumentViewer documents={job.documents} />}
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
