import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="px-4 py-24 text-center sm:px-6">
      <p className="font-mono text-xs text-muted">404</p>
      <h1 className="mt-2 font-serif text-5xl leading-none tracking-tight">Page not found</h1>
      <p className="mt-3 text-[15px] text-muted">This page doesn&apos;t exist or has moved.</p>
      <Link
        href="/"
        className="group mt-8 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
      >
        <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
        Back home
      </Link>
    </div>
  );
}
