import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SAMIndex | AI Repository Intelligence",
  description: "An AI-powered repository intelligence platform that analyzes GitHub repositories using scalable indexing pipelines and architecture-aware retrieval.",
  openGraph: {
    title: "SAMIndex | AI Repository Intelligence",
    description: "Bridging the Context Gap in large scale software repositories with AI.",
    images: ["https://res.cloudinary.com/dcqbcjrsp/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/avatar_kyjo2q.png"],
  },
};

export default function SamIndexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
