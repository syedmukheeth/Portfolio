import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container className="py-32">
      <p className="font-mono text-sm text-muted">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">This page doesn&apos;t exist.</h1>
      <p className="mt-4 flex flex-wrap items-center gap-1.5 text-muted">
        It may have moved. Press
        <kbd className="rounded-md border border-line bg-elevated px-1.5 font-mono text-xs leading-5">/</kbd>
        to search, or head back home.
      </p>
      <Link
        href="/"
        className="press mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-medium text-accent-ink hover:opacity-90"
      >
        <ArrowLeft className="size-4" aria-hidden />
        Back home
      </Link>
    </Container>
  );
}
