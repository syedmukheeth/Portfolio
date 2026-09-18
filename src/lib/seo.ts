import { LOKHA, PORTRAIT, PROFILE, PROJECTS, SITE_URL, SKILLS, SOCIALS, STUDIO } from "./data";

const PERSON_ID = `${SITE_URL}/#person`;
const PROFILE_PAGE_ID = `${SITE_URL}/#profile`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const LOKHA_ID = `${SITE_URL}/#lokha-innovation`;

export function buildJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      // Site name shown in Google results, with the short form people type.
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: `${SITE_URL}/`,
        name: PROFILE.name,
        alternateName: [PROFILE.shortName, PROFILE.github],
        publisher: { "@id": PERSON_ID },
        inLanguage: "en",
      },
      // Google's profile-page markup: tells search this page is about one person.
      {
        "@type": "ProfilePage",
        "@id": PROFILE_PAGE_ID,
        url: SITE_URL,
        name: `${PROFILE.name} (${PROFILE.shortName})`,
        isPartOf: { "@id": WEBSITE_ID },
        dateModified: new Date().toISOString(),
        mainEntity: { "@id": PERSON_ID },
      },
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: PROFILE.name,
        alternateName: ["Syed Mukheeth", "Syed Abdul Mukheeth", "Abdul Mukheeth", "Mukheeth Peer", PROFILE.github],
        givenName: "Syed Abdul",
        familyName: "Mukheeth Peer",
        url: SITE_URL,
        image: {
          "@type": "ImageObject",
          url: `${SITE_URL}${PORTRAIT.src}`,
          width: PORTRAIT.width,
          height: PORTRAIT.height,
          caption: PROFILE.name,
        },
        homeLocation: {
          "@type": "Place",
          address: { "@type": "PostalAddress", addressLocality: "Kurnool", addressRegion: "Andhra Pradesh", addressCountry: "IN" },
        },
        jobTitle: [PROFILE.role, "Tech Lead"],
        description: PROFILE.description,
        email: `mailto:${PROFILE.email}`,
        worksFor: [
          { "@id": LOKHA_ID },
          {
            "@type": "Organization",
            name: STUDIO.name,
            url: STUDIO.url,
            sameAs: [STUDIO.instagram],
            founder: { "@id": PERSON_ID },
          },
        ],
        knowsAbout: ["Backend Architecture", "Distributed Systems", "Real-time Systems", "AI-Assisted Development", "AI Workflow Automation", "Tech Marketing", ...SKILLS.map((s) => s.name)],
        sameAs: SOCIALS.map((s) => s.href),
        mainEntityOfPage: { "@id": PROFILE_PAGE_ID },
      },
      {
        "@type": "Organization",
        "@id": LOKHA_ID,
        name: LOKHA.name,
        url: LOKHA.url,
        description: "Startup incubator helping founders build, launch and scale through mentorship, incubation and technical support.",
        sameAs: [LOKHA.linkedin, LOKHA.x, LOKHA.instagram],
        address: {
          "@type": "PostalAddress",
          addressLocality: LOKHA.locality,
          addressRegion: LOKHA.region,
          addressCountry: "IN",
        },
        employee: {
          "@type": "OrganizationRole",
          roleName: "Tech Lead, Website Development",
          startDate: "2026-05",
          employee: { "@id": PERSON_ID },
        },
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
              text: "Syed Abdul Mukheeth Peer (also known as Syed Mukheeth) is a software engineer focused on high-performance backend architecture, distributed systems, and real-time infrastructure. He is Tech Lead at Lokha Innovation, a startup incubator in Kurnool, and the founder of SAMPeer Studio, which builds storytelling websites, growth systems and AI automation for founders. He has built projects including SAM Compiler (a distributed cloud IDE) and PeerNet (a real-time social networking platform). He is actively seeking full-time and internship roles in software engineering.",
            },
          },
          {
            "@type": "Question",
            name: "Where does Syed Mukheeth work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Since May 2026, Syed Mukheeth has been Tech Lead for Website Development at Lokha Innovation (https://lokha.net), a startup incubator in Kurnool, Andhra Pradesh that helps founders build, launch and scale. He also runs SAMPeer Studio, his own growth studio for founders.",
            },
          },
          {
            "@type": "Question",
            name: "What has Syed Mukheeth built?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Syed Mukheeth founded SAMPeer Studio (storytelling websites, growth systems and AI automation) and has built SAM Compiler (a distributed cloud IDE with Docker sandboxing and real-time collaboration) and PeerNet (a Kafka-powered real-time social platform).",
            },
          },
          {
            "@type": "Question",
            name: "What technologies does Syed Mukheeth use?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Syed Mukheeth works primarily with TypeScript, Node.js, React, Docker, Redis, Kafka, BullMQ, MongoDB, PostgreSQL, Supabase, Socket.IO, WebSockets, and CRDT/Yjs. For AI-assisted development he uses Claude Code, Codex and Antigravity, and he designs AI workflows and automations.",
            },
          },
        ],
      },
    ],
  };
}
