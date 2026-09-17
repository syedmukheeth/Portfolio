import { ArrowUpRight, FileText, Mail } from "lucide-react";
import { Section } from "@/components/ui/section";
import { PROFILE, SOCIALS } from "@/lib/data";

const LINKS = [
  ...SOCIALS,
  { label: "Mail", href: `mailto:${PROFILE.email}`, icon: Mail },
  { label: "Resume", href: PROFILE.resume, icon: FileText },
];

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <ul className="grid grid-cols-5 border-y border-dashed border-line">
        {LINKS.map(({ label, href, icon: Icon }) => {
          const external = href.startsWith("http");
          return (
            <li key={label} className="border-r border-dashed border-line last:border-r-0">
              <a
                href={href}
                aria-label={label}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex h-14 items-center justify-center gap-2 text-sm text-muted transition-colors hover:bg-fg/[0.03] hover:text-fg sm:justify-start sm:px-4"
              >
                <Icon className="size-4 shrink-0" />
                <span className="hidden sm:inline">{label}</span>
                <ArrowUpRight className="ml-auto hidden size-3.5 text-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg md:block" />
              </a>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
