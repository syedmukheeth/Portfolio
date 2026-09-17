import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import { ThemeProvider } from "@/components/site/theme-provider";
import { PROFILE, SITE_URL } from "@/lib/data";
import { buildJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${PROFILE.name} | ${PROFILE.role} · ${PROFILE.focus}`,
    template: `%s | ${PROFILE.name}`,
  },
  description: PROFILE.description,
  keywords: ["Syed Abdul Mukheeth Peer", "Syed Abdul Mukheeth", "Syed Mukheeth", "software engineer", "backend engineer", "distributed systems", "real-time systems", "SAM Compiler", "PeerNet", "Node.js", "TypeScript", "Redis", "Kafka", "Docker"],
  authors: [{ name: PROFILE.name, url: SITE_URL }],
  openGraph: {
    title: `${PROFILE.name} | ${PROFILE.role}`,
    description: PROFILE.description,
    url: SITE_URL,
    siteName: PROFILE.name,
    locale: "en_US",
    type: "profile",
    firstName: "Syed Abdul",
    lastName: "Mukheeth Peer",
    username: PROFILE.github,
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROFILE.name} | ${PROFILE.role}`,
    description: PROFILE.description,
    creator: PROFILE.twitter,
  },
  alternates: {
    canonical: SITE_URL,
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
  verification: {
    google: "12ecf9f26541f5c1",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0e0e" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn(inter.variable, instrumentSerif.variable, mono.variable)}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()) }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:bg-fg focus:px-3 focus:py-2 focus:text-sm focus:text-bg"
          >
            Skip to content
          </a>
          <Navbar />
          <div className="relative min-h-screen overflow-x-clip">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-1/2 z-10 w-full max-w-[50rem] -translate-x-1/2 border-x border-dashed border-line"
            />
            <div className="mx-auto flex min-h-screen max-w-[50rem] flex-col pt-12">
              <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
