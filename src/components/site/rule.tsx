import { cn } from "@/lib/utils";

/** Full-bleed dashed line that runs past the column rails to the viewport edges. */
export function Rule({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute left-1/2 top-0 w-screen -translate-x-1/2 border-t border-dashed border-line",
        className,
      )}
    />
  );
}
