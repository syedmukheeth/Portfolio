import { PROFILE, PROJECTS, SITE_URL, SKILLS, SOCIALS } from "./data";

const PERSON_ID = `${SITE_URL}/#person`;

export function buildJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: PROFILE.name,
        alternateName: ["Syed Abdul Mukheeth", "Syed Mukheeth", "Abdul Mukheeth"],
        url: SITE_URL,
        image: PROFILE.avatar,
        jobTitle: PROFILE.role,
        description: PROFILE.description,
        email: `mailto:${PROFILE.email}`,
        knowsAbout: ["Backend Architecture", "Distributed Systems", "Real-time Systems", ...SKILLS.map((s) => s.name)],
        sameAs: SOCIALS.map((s) => s.href),
        mainEntityOfPage: { "@type": "WebPage", "@id": SITE_URL },
      },
      ...PROJECTS.map((p) => ({
        "@type": "SoftwareApplication",
        name: p.title,
        description: p.description,
        url: p.demo ?? `${SITE_URL}/projects/${p.id}`,
        codeRepository: p.github,
        applicationCategory: p.category,
        author: { "@id": PERSON_ID },
        programmingLanguage: ["TypeScript", "JavaScript"],
        keywords: p.keywords,
      })),
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Who is Syed Mukheeth?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Syed Abdul Mukheeth Peer (also known as Syed Mukheeth) is a software engineering student and engineer focused on high-performance backend architecture, distributed systems, and real-time infrastructure. He has built projects including SAM Compiler (a distributed cloud IDE) and PeerNet (a real-time social networking platform). He is actively seeking full-time and internship roles in software engineering.",
            },
          },
          {
            "@type": "Question",
            name: "What has Syed Mukheeth built?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Syed Mukheeth has built SAM Compiler (a distributed cloud IDE with Docker sandboxing and real-time collaboration) and PeerNet (a Kafka-powered real-time social platform).",
            },
          },
          {
            "@type": "Question",
            name: "What technologies does Syed Mukheeth use?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Syed Mukheeth works primarily with TypeScript, Node.js, React, Docker, Redis, Kafka, BullMQ, MongoDB, PostgreSQL, Supabase, Socket.IO, WebSockets, and CRDT/Yjs.",
            },
          },
        ],
      },
    ],
  };
}
