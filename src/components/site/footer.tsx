import { PROFILE } from "@/lib/data";
import { Rule } from "./rule";

export function Footer() {
  return (
    <footer className="relative flex flex-col items-center justify-between gap-1 px-4 py-6 font-mono text-xs text-muted sm:flex-row sm:px-6">
      <Rule />
      <span>Designed &amp; built by {PROFILE.shortName}</span>
      <span>
        © {new Date().getFullYear()} {PROFILE.name}
      </span>
    </footer>
  );
}
