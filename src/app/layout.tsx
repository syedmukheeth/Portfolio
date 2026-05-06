import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import TransitionOverlay from "@/components/layout/TransitionOverlay";
import { ModeProvider } from "@/context/ModeContext";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL("https://syedmukheeth.com"),
  title: "Syed Mukheeth -- Full Stack Systems Engineer",
  description: "Engineering scalable systems, distributed mesh networks, and intelligent infrastructure. Portfolio of Syed Mukheeth.",
  openGraph: {
    title: "Syed Mukheeth -- Full Stack Systems Engineer",
    description: "Engineering scalable systems, distributed mesh networks, and intelligent infrastructure.",
    url: "https://syedmukheeth.com",
    siteName: "Syed Mukheeth Portfolio",
    images: [
      {
        url: "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
        width: 1200,
        height: 630,
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
                "jobTitle": "Full Stack Systems Engineer",
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
