import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import TransitionOverlay from "@/components/layout/TransitionOverlay";
import { ModeProvider } from "@/context/ModeContext";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://syedmukheeth.is-a.dev"),
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
    url: "https://syedmukheeth.is-a.dev",
    siteName: "Syed Mukheeth",
    images: [
      {
        url: "https://res.cloudinary.com/dcqbcjrsp/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/avatar_kyjo2q.png",
        width: 1200,
        height: 630,
        alt: "Syed Mukheeth | Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syed Mukheeth | Software Engineer",
    description: "Engineering scalable systems, distributed mesh networks, and intelligent infrastructure.",
    images: ["https://res.cloudinary.com/dcqbcjrsp/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/avatar_kyjo2q.png"],
    creator: "@syed_mukheeth",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark", inter.variable, mono.variable)} suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="12ecf9f26541f5c1" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Syed Mukheeth",
              "jobTitle": "Software Engineer",
              "email": "syedmukheeth09@gmail.com",
              "url": "https://syedmukheeth.is-a.dev",
              "sameAs": [
                "https://github.com/syedmukheeth",
                "https://linkedin.com/in/syedmukheeth",
                "https://twitter.com/syed_mukheeth"
              ],
              "knowsAbout": [
                "Backend Architecture",
                "Distributed Systems",
                "WebSockets",
                "Redis",
                "Docker",
                "Real-time Infrastructure",
                "Product Engineering",
                "AI Tooling",
                "Secure Architectures"
              ]
            })
          }}
        />
      </head>
      <body className={cn(inter.variable, mono.variable, "antialiased selection:bg-accent selection:text-white bg-black")}>
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:px-6 focus:py-3 focus:bg-accent focus:text-white focus:rounded-full focus:font-bold focus:shadow-2xl transition-all"
        >
          Skip to content
        </a>
        <ModeProvider>
          <TransitionOverlay />
          <div className="relative min-h-screen">
            <main id="main-content" className="relative z-10 outline-none" tabIndex={-1}>
              {children}
            </main>
          </div>
        </ModeProvider>
      </body>
    </html>
  );
}
