import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CommandPalette } from "@/components/site/command-palette";
import { Footer } from "@/components/site/footer";
import { Nav } from "@/components/site/nav";
import { ThemeProvider } from "@/components/site/theme-provider";
import { Toaster } from "@/components/site/toaster";
import { PROFILE, SITE_URL } from "@/lib/data";
import { buildJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

/** Both spellings people search for, exactly, in the first 60 characters. */
const HOME_TITLE = `${PROFILE.name} (${PROFILE.shortName}) | ${PROFILE.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: `%s | ${PROFILE.name}`,
  },
  description: PROFILE.description,
  keywords: ["Syed Abdul Mukheeth Peer", "Syed Abdul Mukheeth", "Syed Mukheeth", "Lokha Innovation", "Tech Lead", "Lokha Innovation Tech Lead", "SAMPeer Studio", "software engineer", "backend engineer", "distributed systems", "real-time systems", "SAM Compiler", "PeerNet", "Node.js", "TypeScript", "Redis", "Kafka", "Docker", "AI-assisted development", "Claude Code", "AI workflows", "AI automation"],
  authors: [{ name: PROFILE.name, url: SITE_URL }],
  openGraph: {
    title: HOME_TITLE,
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
    title: HOME_TITLE,
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
    { media: "(prefers-color-scheme: light)", color: "#f7f7f8" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0c" },
  ],
  width: "device-width",
  initialScale: 1,
  // Lets env(safe-area-inset-*) report real values: the phone dock clears the home indicator
  // and the page gutter clears the notch in landscape.
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn(geist.variable, geistMono.variable)}
      data-scroll-behavior="smooth"
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
          <div id="top" aria-hidden className="absolute top-0 h-px w-px" />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-accent-ink"
          >
            Skip to content
          </a>
          <Nav />
          <main id="main-content" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer />
          <CommandPalette />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
