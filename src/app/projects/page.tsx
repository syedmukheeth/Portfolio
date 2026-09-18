import type { Metadata } from "next";
import { Work } from "@/components/home/work";
import { Container } from "@/components/ui/container";
import { STUDIO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description: `${STUDIO.name}, SAM Compiler and PeerNet: a growth studio, a distributed cloud IDE and a realtime social platform by Syed Abdul Mukheeth Peer.`,
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <Container className="pt-10 md:pt-16">
        <h1 className="enter text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Projects</h1>
        <p className="enter mt-4 max-w-[52ch] text-lg leading-8 text-muted" style={{ "--i": 1 } as React.CSSProperties}>
          Things I&apos;ve founded, designed and built, from a growth studio to sandboxed code execution and
          event-driven realtime platforms.
        </p>
      </Container>
      <Work heading={false} />
    </>
  );
}
