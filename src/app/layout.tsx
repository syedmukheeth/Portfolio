import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import TransitionOverlay from "@/components/layout/TransitionOverlay";
import { ModeProvider } from "@/context/ModeContext";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL("https://syedmukheeth.com"),
  title: "Syed Mukheeth | Software Engineer",
  description: "Engineering scalable systems, distributed mesh networks, and intelligent infrastructure. Focused on high-performance backend architecture.",
  icons: {
    icon: [
      { url: "https://res.cloudinary.com/dcqbcjrsp/image/upload/f_auto,q_auto,w_32/avatar_kyjo2q.png", type: "image/png" },
      { url: "https://res.cloudinary.com/dcqbcjrsp/image/upload/f_auto,q_auto,w_128/avatar_kyjo2q.png", type: "image/png", rel: "icon" },
    ],
    shortcut: "https://res.cloudinary.com/dcqbcjrsp/image/upload/f_auto,q_auto,w_192/avatar_kyjo2q.png",
    apple: "https://res.cloudinary.com/dcqbcjrsp/image/upload/f_auto,q_auto,w_180/avatar_kyjo2q.png",
  },
  openGraph: {
    title: "Syed Mukheeth | Portfolio",
    description: "Engineering scalable systems, distributed mesh networks, and intelligent infrastructure.",
    url: "https://syedmukheeth.com",
    siteName: "Syed Mukheeth",
    images: [
      {
        url: "https://res.cloudinary.com/dcqbcjrsp/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/avatar_kyjo2q.png",
        width: 1200,
        height: 630,
        alt: "Syed Mukheeth - Software Engineer"
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
      </head>
      <body className="antialiased selection:bg-accent selection:text-white">
        <ModeProvider>
          <TransitionOverlay />
          <div className="relative min-h-screen">
            <SmoothScroll>
              <main className="relative z-10">
                {children}
              </main>
            </SmoothScroll>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Syed Mukheeth",
                "jobTitle": "Software Engineer",
                "email": "syedmukheeth09@gmail.com",
                "url": "https://syedmukheeth.com",
                "sameAs": [
                  "https://github.com/syedmukheeth",
                  "https://linkedin.com/in/syedmukheeth",
                  "https://twitter.com/syed_mukheeth"
                ],
                "knowsAbout": [
                  "Distributed Systems",
                  "Real-time Infrastructure",
                  "Product Engineering",
                  "AI Tooling",
                  "Secure Architectures"
                ]
              })
            }}
          />
        </ModeProvider>
      </body>
    </html>
  );
}
