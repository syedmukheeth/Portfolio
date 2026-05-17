import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
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
  title: "Syed Abdul Mukheeth | Software Engineer — Backend & Distributed Systems",
  description: "Syed Abdul Mukheeth (Syed Mukheeth) — software engineering student building high-performance backend systems, distributed architecture, and real-time infrastructure. Creator of SAM Compiler, SAMIndex, and PeerNet.",
  keywords: ["Syed Mukheeth", "Syed Abdul Mukheeth", "software engineer", "backend engineer", "distributed systems", "real-time systems", "SAM Compiler", "SAMIndex", "PeerNet", "Node.js", "TypeScript", "Redis", "Kafka", "Docker"],
  authors: [{ name: "Syed Abdul Mukheeth" }],
  icons: {
    icon: [
      { url: "https://res.cloudinary.com/dcqbcjrsp/image/upload/f_auto,q_auto,w_32/avatar_kyjo2q.png", type: "image/png" },
      { url: "https://res.cloudinary.com/dcqbcjrsp/image/upload/f_auto,q_auto,w_128/avatar_kyjo2q.png", type: "image/png", rel: "icon" },
    ],
    shortcut: "https://res.cloudinary.com/dcqbcjrsp/image/upload/f_auto,q_auto,w_192/avatar_kyjo2q.png",
    apple: "https://res.cloudinary.com/dcqbcjrsp/image/upload/f_auto,q_auto,w_180/avatar_kyjo2q.png",
  },
  openGraph: {
    title: "Syed Abdul Mukheeth | Software Engineer",
    description: "Building high-performance backend systems, distributed architecture, and real-time infrastructure. Creator of SAM Compiler, SAMIndex, and PeerNet.",
    url: "https://syedmukheeth.is-a.dev",
    siteName: "Syed Abdul Mukheeth",
    images: [
      {
        url: "https://res.cloudinary.com/dcqbcjrsp/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/avatar_kyjo2q.png",
        width: 1200,
        height: 630,
        alt: "Syed Abdul Mukheeth | Software Engineer",
      },
    ],
    locale: "en_US",
    type: "profile",
    firstName: "Syed Abdul",
    lastName: "Mukheeth",
    username: "syedmukheeth"
  },
  twitter: {
    card: "summary_large_image",
    title: "Syed Abdul Mukheeth | Software Engineer",
    description: "Building high-performance backend systems, distributed architecture, and real-time infrastructure.",
    images: ["https://res.cloudinary.com/dcqbcjrsp/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/avatar_kyjo2q.png"],
    creator: "@syed_mukheeth",
  },
  alternates: {
    canonical: "https://syedmukheeth.is-a.dev"
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
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://syedmukheeth.is-a.dev/#person",
                  "name": "Syed Abdul Mukheeth",
                  "alternateName": ["Syed Mukheeth", "Abdul Mukheeth"],
                  "url": "https://syedmukheeth.is-a.dev",
                  "image": "https://res.cloudinary.com/dcqbcjrsp/image/upload/f_auto,q_auto,w_800/avatar_kyjo2q.png",
                  "jobTitle": "Software Engineer",
                  "description": "Software engineering student and engineer specializing in high-performance backend architecture, distributed systems, and real-time infrastructure. Creator of SAM Compiler, SAMIndex, and PeerNet.",
                  "knowsAbout": [
                    "Backend Architecture",
                    "Distributed Systems",
                    "Real-time Systems",
                    "Node.js",
                    "TypeScript",
                    "Redis",
                    "Kafka",
                    "Docker",
                    "WebSockets",
                    "CRDT / Yjs",
                    "BullMQ",
                    "MongoDB",
                    "React",
                    "Supabase",
                    "PostgreSQL"
                  ],
                  "sameAs": [
                    "https://github.com/syedmukheeth",
                    "https://twitter.com/syed_mukheeth",
                    "https://linkedin.com/in/syedmukheeth"
                  ],
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://syedmukheeth.is-a.dev"
                  }
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "SAM Compiler",
                  "description": "A distributed cloud IDE with secure, isolated Docker sandbox execution. Supports real-time multi-user collaboration via CRDT/Yjs and WebSockets, with scalable worker orchestration using BullMQ and Redis.",
                  "url": "https://sam-compiler-web.vercel.app",
                  "codeRepository": "https://github.com/syedmukheeth/SAM-Compiler",
                  "applicationCategory": "DeveloperApplication",
                  "author": { "@id": "https://syedmukheeth.is-a.dev/#person" },
                  "programmingLanguage": ["TypeScript", "JavaScript"],
                  "keywords": "cloud IDE, Docker sandboxing, real-time collaboration, CRDT, Yjs, BullMQ"
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "SAMIndex",
                  "description": "An AI-powered repository intelligence platform. Analyzes GitHub codebases via ZIP ingestion pipelines, Redis queues, and OpenAI-backed architecture-aware retrieval for AI-assisted code analysis.",
                  "url": "https://sam-index.vercel.app",
                  "codeRepository": "https://github.com/syedmukheeth/SAMIndex",
                  "applicationCategory": "DeveloperApplication",
                  "author": { "@id": "https://syedmukheeth.is-a.dev/#person" },
                  "programmingLanguage": ["TypeScript", "JavaScript"],
                  "keywords": "AI code analysis, repository indexing, OpenAI, BullMQ, Redis, codebase intelligence"
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "PeerNet",
                  "description": "A real-time scalable social networking platform built with event-driven architecture using Kafka, Redis adapters, Socket.IO, and WebSocket infrastructure for low-latency social interactions.",
                  "url": "https://peer-net-indol.vercel.app",
                  "codeRepository": "https://github.com/syedmukheeth/PeerNet",
                  "applicationCategory": "SocialNetworkingApplication",
                  "author": { "@id": "https://syedmukheeth.is-a.dev/#person" },
                  "programmingLanguage": ["TypeScript", "JavaScript"],
                  "keywords": "real-time social platform, Kafka, Redis, Socket.IO, event-driven architecture"
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "SJDC Academic Platform Modernization",
                  "description": "Modernization of a legacy institutional system into a secure, real-time academic platform using React 19, Next.js, Supabase row-level security (RLS), and PostgreSQL for student, faculty, and admin workflows.",
                  "codeRepository": "https://github.com/syedmukheeth/SJDC",
                  "applicationCategory": "EducationalApplication",
                  "author": { "@id": "https://syedmukheeth.is-a.dev/#person" },
                  "programmingLanguage": ["TypeScript", "JavaScript"],
                  "keywords": "academic platform, legacy modernization, Next.js, Supabase, RLS, React 19"
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Who is Syed Mukheeth?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Syed Abdul Mukheeth (also known as Syed Mukheeth) is a software engineering student and engineer focused on high-performance backend architecture, distributed systems, and real-time infrastructure. He has built projects including SAM Compiler (a distributed cloud IDE), SAMIndex (an AI-powered repository intelligence platform), and PeerNet (a real-time social networking platform). He is actively seeking full-time and internship roles in software engineering."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What has Syed Mukheeth built?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Syed Mukheeth has built SAM Compiler (a distributed cloud IDE with Docker sandboxing and real-time collaboration), SAMIndex (an AI-powered GitHub repository analysis engine using OpenAI and Redis), PeerNet (a Kafka-powered real-time social platform), and the SJDC Academic Platform (a modernized institutional system using Next.js and Supabase)."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What technologies does Syed Mukheeth use?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Syed Mukheeth works primarily with TypeScript, Node.js, React, Docker, Redis, Kafka, BullMQ, MongoDB, PostgreSQL, Supabase, Socket.IO, WebSockets, CRDT/Yjs, and OpenAI APIs."
                      }
                    }
                  ]
                }
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
        <div className="relative min-h-screen">
          <main id="main-content" className="relative z-10 outline-none" tabIndex={-1}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
