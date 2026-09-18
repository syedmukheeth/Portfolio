import { cn } from "@/lib/utils";

export function Tag({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex h-6 items-center rounded-md border border-line bg-surface px-2 text-xs text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
