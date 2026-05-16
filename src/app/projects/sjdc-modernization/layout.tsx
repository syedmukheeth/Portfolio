import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SJDC Modernization | Institutional Scale Systems",
  description: "Modernizing legacy institutional systems into scalable, realtime, and secure academic platforms for 20k+ users.",
  openGraph: {
    title: "SJDC Modernization | Institutional Scale Systems",
    description: "Enterprise-grade modernization of academic infrastructure and secure RBAC systems.",
    images: ["https://res.cloudinary.com/dcqbcjrsp/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/avatar_kyjo2q.png"],
  },
};

export default function SJDCLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
