import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id: string;
  title: string;
  action?: React.ReactNode;
  className?: string;
}

/**
 * Section h2. `tabIndex={-1}` lets the command palette move keyboard focus here
 * after jumping, so screen reader and keyboard users land where they asked to go.
 */
export function SectionHeading({ id, title, action, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 flex items-end justify-between gap-6", className)}>
      <h2 id={`${id}-title`} tabIndex={-1} className="text-2xl font-semibold tracking-tight outline-none">
        {title}
      </h2>
      {action}
    </div>
  );
}
