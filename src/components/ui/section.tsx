import { Rule } from "@/components/site/rule";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  title: string;
  action?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, title, action, className, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn("relative scroll-mt-12 pt-6 pb-8", className)}>
      <Rule />
      <div className="flex min-h-10 flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 sm:px-6">
        <h2 id={`${id}-title`} className="font-serif text-3xl leading-none tracking-tight">
          {title}
        </h2>
        {action}
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}
