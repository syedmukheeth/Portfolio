import { cn } from "@/lib/utils";

export function Chip({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex h-6 items-center gap-1.5 rounded-sm border border-dotted border-line bg-fg/[0.02] px-2 text-xs text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
