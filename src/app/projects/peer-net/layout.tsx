import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PeerNet | Realtime Social Infrastructure",
  description: "A distributed event-driven communication ecosystem engineered to scale real-time social interactions through a robust Kafka-backed messaging backbone.",
  openGraph: {
    title: "PeerNet | Realtime Social Infrastructure",
    description: "Engineering scalable social systems with Kafka and WebSockets.",
    images: ["https://res.cloudinary.com/dcqbcjrsp/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/avatar_kyjo2q.png"],
  },
};

export default function PeerNetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
