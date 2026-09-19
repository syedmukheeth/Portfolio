import { Container } from "@/components/ui/container";
import { PROFILE } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-3 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {PROFILE.name}
        </p>
        <p className="hidden items-center gap-1.5 sm:flex">
          Press
          <kbd className="rounded-md border border-line bg-elevated px-1.5 font-mono text-[11px] leading-5">/</kbd>
          to search
        </p>
        <a href="#top" className="link hit-area self-start sm:self-auto">
          Back to top
        </a>
      </Container>
    </footer>
  );
}
