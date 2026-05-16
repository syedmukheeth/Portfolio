import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SAM Compiler | Distributed Cloud IDE",
  description: "A production-style browser IDE capable of executing untrusted multi-language code inside isolated Docker sandboxes with realtime collaboration.",
  openGraph: {
    title: "SAM Compiler | Distributed Cloud IDE",
    description: "Secure, distributed code execution and collaborative IDE architecture.",
    images: ["https://res.cloudinary.com/dcqbcjrsp/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/avatar_kyjo2q.png"],
  },
};

export default function SamCompilerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
