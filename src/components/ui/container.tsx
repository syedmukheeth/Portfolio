import { cn } from "@/lib/utils";

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("gutter mx-auto w-full max-w-[68rem]", className)}>{children}</div>;
}
