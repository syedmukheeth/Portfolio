import type { ComponentType } from "react";
import { Database, Layers } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import {
  SiApachekafka,
  SiCloudinary,
  SiDocker,
  SiExpress,
  SiFramer,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

type Icon = ComponentType<{ className?: string; "aria-hidden"?: boolean }>;

export const SITE_URL = "https://www.syedmukheeth.is-a.dev";

export const PROFILE = {
  name: "Syed Abdul Mukheeth Peer",
  shortName: "Syed Mukheeth",
  role: "Software Engineer",
  focus: "Backend & Distributed Systems",
  location: "Kurnool, India",
  timezone: "IST",
  availability: "Open to full-time roles",
  /** Hero line. Keep it under 20 words. */
  intro: "Software engineer building backend and realtime systems. Founder of SAMPeer Studio.",
  email: "syedmukheeth09@gmail.com",
  resume: "https://drive.google.com/file/d/1SMFd_ADTNeYjBQ-6IH7RHT_UzzAPrTBy/view?usp=sharing",
  avatar: "/images/avatar.jpg",
  github: "syedmukheeth",
  twitter: "@syed_mukheeth",
  description:
    "Software engineer building high-performance backend systems, distributed architecture, and real-time infrastructure. Founder of SAMPeer Studio and creator of SAM Compiler and PeerNet.",
};

export const PORTRAIT = {
  src: "/images/portrait.jpg",
  alt: "Syed Mukheeth looking up beside a stone archway",
  width: 1000,
  height: 1250,
};

export interface Social {
  label: string;
  href: string;
  icon: Icon;
}

export const SOCIALS: Social[] = [
  { label: "GitHub", href: "https://github.com/syedmukheeth", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/syedmukheeth/", icon: FaLinkedin },
  { label: "X", href: "https://x.com/syed_mukheeth", icon: FaXTwitter },
];

export interface ExperienceDocument {
  label: string;
  src: string;
  thumb: string;
  width: number;
  height: number;
}

export interface Experience {
  role: string;
  company: string;
  type: string;
  start: string;
  /** Omit for a current role. */
  end?: string;
  location: string;
  skills?: string[];
  links?: { label: string; href: string }[];
  documents?: ExperienceDocument[];
}

export const STUDIO = {
  name: "SAMPeer Studio",
  url: "https://sampeer-studio.vercel.app",
  instagram: "https://www.instagram.com/sampeer.studio/",
};

export const EXPERIENCE: Experience[] = [
  {
    role: "Founder & Full Stack Developer",
    company: STUDIO.name,
    type: "Self-employed",
    start: "Jul 2026",
    location: "Remote",
    skills: ["Storytelling Websites", "Growth Systems", "AI Automation", "Founder Branding"],
    links: [
      { label: "Website", href: STUDIO.url },
      { label: "Instagram", href: STUDIO.instagram },
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Freelance",
    type: "Self-employed",
    start: "May 2026",
    location: "Remote",
  },
  {
    role: "Web Content Writer",
    company: "Fleckor Tech",
    type: "Internship",
    start: "Aug 2025",
    end: "Sep 2025",
    location: "Hyderabad, India · Remote",
    skills: ["Search Engine Optimization (SEO)", "Web Content Writing"],
    documents: [
      {
        label: "Certificate of Internship",
        src: "/experience/fleckor-certificate.jpg",
        thumb: "/experience/fleckor-certificate-thumb.jpg",
        width: 1930,
        height: 1364,
      },
      {
        label: "Letter of Recommendation",
        src: "/experience/fleckor-recommendation.jpg",
        thumb: "/experience/fleckor-recommendation-thumb.jpg",
        width: 1364,
        height: 1930,
      },
    ],
  },
];

export const SKILL_CATEGORIES = ["Languages", "Frontend", "Backend", "Infra", "Database"] as const;
export type SkillCategory = (typeof SKILL_CATEGORIES)[number];

export interface Skill {
  name: string;
  category: SkillCategory;
  href: string;
  icon: Icon;
}

export const SKILLS: Skill[] = [
  { name: "TypeScript", category: "Languages", href: "https://www.typescriptlang.org", icon: SiTypescript },
  { name: "JavaScript", category: "Languages", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icon: SiJavascript },
  { name: "SQL", category: "Languages", href: "https://www.postgresql.org/docs/current/sql.html", icon: Database },
  { name: "React", category: "Frontend", href: "https://react.dev", icon: SiReact },
  { name: "Next.js", category: "Frontend", href: "https://nextjs.org", icon: SiNextdotjs },
  { name: "Tailwind CSS", category: "Frontend", href: "https://tailwindcss.com", icon: SiTailwindcss },
  { name: "Framer Motion", category: "Frontend", href: "https://motion.dev", icon: SiFramer },
  { name: "Node.js", category: "Backend", href: "https://nodejs.org", icon: SiNodedotjs },
  { name: "Express", category: "Backend", href: "https://expressjs.com", icon: SiExpress },
  { name: "Socket.IO", category: "Backend", href: "https://socket.io", icon: SiSocketdotio },
  { name: "BullMQ", category: "Backend", href: "https://docs.bullmq.io", icon: Layers },
  { name: "Redis", category: "Infra", href: "https://redis.io", icon: SiRedis },
  { name: "Kafka", category: "Infra", href: "https://kafka.apache.org", icon: SiApachekafka },
  { name: "Docker", category: "Infra", href: "https://www.docker.com", icon: SiDocker },
  { name: "Supabase", category: "Infra", href: "https://supabase.com", icon: SiSupabase },
  { name: "Cloudinary", category: "Infra", href: "https://cloudinary.com", icon: SiCloudinary },
  { name: "PostgreSQL", category: "Database", href: "https://www.postgresql.org", icon: SiPostgresql },
  { name: "MongoDB", category: "Database", href: "https://www.mongodb.com", icon: SiMongodb },
];

export interface CaseSection {
  title: string;
  body: string;
  points?: { title: string; body: string }[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  role: string;
  description: string;
  fullOverview: string;
  architecture: {
    nodes: string[];
    flow: string[];
  };
  stats: {
    label: string;
    value: string;
  }[];
  stack: string[];
  features: string[];
  challenges: string[];
  demonstrates: string[];
  sections: CaseSection[];
  /** Screenshot of the live site in /public, 1440×900. */
  thumbnail: string;
  category: string;
  keywords: string;
  github?: string;
  demo?: string;
  clips?: string[];
}

/** Still frame from a Cloudinary video clip. */
export function posterFor(project: Project, second = 3): string | undefined {
  const clip = project.clips?.[0];
  if (!clip) return undefined;
  return clip
    .replace("/video/upload/", `/video/upload/so_${second},w_1200,q_auto,f_auto/`)
    .replace(/\.mp4$/, ".jpg");
}

export const PROJECTS: Project[] = [
  {
    id: "sampeer-studio",
    title: "SAMPeer Studio",
    tagline: "Storytelling Websites, Growth Systems & AI Automation",
    role: "Founder & Full Stack Developer",
    description: "Founded a studio that helps startups and founders get noticed, with storytelling websites, AI-powered growth systems, founder branding and automation.",
    fullOverview: "SAMPeer Studio helps founders build companies people notice, remember and trust. It runs three systems that stand alone and compound together: a storytelling website that earns belief, a growth system that turns that belief into booked calls, and a founder brand that opens doors before the founder knocks.",
    architecture: {
      nodes: ["Storytelling Website", "Lead Capture", "AI Qualification", "CRM", "Follow-up", "Booked Call"],
      flow: ["Lead Capture", "Invoicing", "Cold Outreach", "Reporting"],
    },
    stats: [
      { label: "Live client sites", value: "6" },
      { label: "Automations", value: "16" },
      { label: "Founded", value: "Jul 2026" },
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Lenis", "AI Automation"],
    features: [
      "Storytelling brand websites",
      "Lead capture with AI qualification",
      "CRM sync and automated follow-up",
      "Automated invoicing and reconciliation",
      "Personalized cold outreach",
      "Live reporting dashboards"
    ],
    challenges: [
      "Turning a good product into the obvious choice",
      "Wiring capture, qualification and booking into one engine",
      "Replacing manual follow-up and month-end work with automation"
    ],
    demonstrates: [
      "Entrepreneurship",
      "Product Engineering",
      "Growth Automation",
      "AI Workflows"
    ],
    sections: [
      {
        title: "The problem",
        body: "Most startups don't fail, they go unnoticed. The product is good, but nobody has heard of it, nobody remembers it and nobody has a reason to trust it yet.",
      },
      {
        title: "The approach",
        body: "Three systems with one job: make a founder impossible to overlook. Each works alone; run together they compound.",
        points: [
          { title: "Storytelling Website", body: "Not a template. A site that carries the founder's vision and earns trust before the first call." },
          { title: "Growth System", body: "Capture, CRM, AI qualification, follow-up and booking wired into one engine." },
          { title: "Founder Brand", body: "Presence and authority that pull opportunities toward the founder." },
          { title: "Automation Lab", body: "Lead capture, invoicing, cold outreach and reporting workflows that run without someone remembering." },
        ],
      },
      {
        title: "Client work",
        body: "Six live client sites across construction, hospitality, fitness, law, healthcare and personal branding.",
        points: [
          { title: "ASRG Construction", body: "Construction & Civil, Kurnool. Brand site for a 46-year civil contracting firm." },
          { title: "Aurum Resorts", body: "Luxury Hospitality, Maldives. A private-island resort experience." },
          { title: "LIFT-X", body: "Fitness, Kurnool. A premium unisex gym site." },
          { title: "Vantara & Rao", body: "Corporate Law, Hyderabad. A law firm positioned as a strategic partner." },
          { title: "NovaCare Medical Center", body: "Healthcare, Hyderabad. A multi-specialty hospital site." },
          { title: "Uniquirk Solutions", body: "Personal Branding, B2B. LinkedIn authority engineering for CXOs." },
        ],
      },
    ],
    thumbnail: "/projects/sampeer-studio.webp",
    category: "BusinessApplication",
    keywords: "storytelling websites, growth systems, AI automation, founder branding, web studio",
    demo: STUDIO.url,
  },
  {
    id: "sam-compiler",
    title: "SAM Compiler",
    tagline: "Distributed Cloud IDE & Secure Code Execution",
    role: "Systems Architecture",
    description: "Built a production-style browser IDE capable of executing untrusted multi-language code inside isolated Docker sandboxes with realtime collaboration and scalable worker orchestration.",
    fullOverview: "I built SAM Compiler to explore the complexities of secure, distributed code execution. The system handles untrusted multi-language code by orchestrating Docker-sandboxed environments, ensuring isolation with memory and CPU limits while providing a terminal-native developer experience.",
    architecture: {
      nodes: ["Frontend", "Gateway API", "Execution Workers", "Docker Sandboxes"],
      flow: ["CRDT Synchronization", "Isolated Execution", "Queue Orchestration"],
    },
    stats: [
      { label: "Execution", value: "Isolated" },
      { label: "Sync", value: "Real-time" },
      { label: "Security", value: "Sandboxed" },
    ],
    stack: ["React", "TypeScript", "Node.js", "Docker", "Socket.IO", "BullMQ", "Redis"],
    features: [
      "Secure Docker sandbox execution",
      "Realtime collaborative editing using CRDTs",
      "Distributed worker architecture",
      "Multi-language code execution",
      "Queue-based orchestration",
      "Terminal-native experience"
    ],
    challenges: [
      "Prevented arbitrary code execution risks",
      "Built conflict-free collaborative editing",
      "Designed scalable execution architecture"
    ],
    demonstrates: [
      "Distributed Systems",
      "Security Engineering",
      "DevTools Architecture",
      "Realtime Infrastructure"
    ],
    sections: [
      {
        title: "The problem",
        body: "Running untrusted code for many users at once is dangerous. Most setups trade latency for isolation, or collaboration for simplicity. The goal was strong isolation without losing a realtime, multi-user editing experience.",
        points: [
          { title: "Code injection", body: "Untrusted input executed with high privileges." },
          { title: "Resource starvation", body: "Infinite loops or memory leaks taking down the engine." },
          { title: "Sync drift", body: "State inconsistencies between collaborators editing the same file." },
        ],
      },
      {
        title: "The approach",
        body: "Every execution request is decoupled from the API, queued through BullMQ, and dispatched to a pool of ephemeral Docker workers that exist only for the duration of the task.",
        points: [
          { title: "CRDT-based sync", body: "Yjs-style CRDTs keep every collaborator consistent without a central lock, so edits never conflict." },
          { title: "BullMQ worker pool", body: "A Redis-backed queue allows horizontal worker scaling, dead-letter handling and prioritized jobs." },
          { title: "Ephemeral sandboxes", body: "Each run gets a fresh container with strict CPU and memory limits, so abuse never reaches the control plane." },
          { title: "Fault isolation", body: "A failed container doesn't affect the IDE session; the orchestrator retries failed executions." },
        ],
      },
    ],
    thumbnail: "/projects/sam-compiler.webp",
    category: "DeveloperApplication",
    keywords: "cloud IDE, Docker sandboxing, real-time collaboration, CRDT, Yjs, BullMQ",
    github: "https://github.com/syedmukheeth/SAM-Compiler",
    demo: "https://sam-compiler-web.vercel.app",
    clips: ["https://res.cloudinary.com/dcqbcjrsp/video/upload/v1778519207/SamCompiler-1_dotu4m.mp4", "https://res.cloudinary.com/dcqbcjrsp/video/upload/v1778519210/SamCompiler-2_hdkgnc.mp4"]
  },
  {
    id: "peer-net",
    title: "PeerNet",
    tagline: "Realtime Scalable Social Networking Platform",
    role: "Backend & Distributed Systems",
    description: "Built a realtime social platform with event-driven backend architecture, scalable websocket infrastructure, and responsive product-focused user experience.",
    fullOverview: "PeerNet is a scalable networking platform designed to deconstruct high-throughput event meshes. It leverages Kafka for distributed event processing and Redis for websocket synchronization, ensuring resilient real-time communication for social interactions.",
    architecture: {
      nodes: ["Client", "Socket Layer", "Redis Adapter", "Kafka Events", "Consumers"],
      flow: ["Event Propagation", "Distributed Sync", "Async Notifications"],
    },
    stats: [
      { label: "Protocol", value: "WebSocket" },
      { label: "Stream", value: "Kafka-Native" },
      { label: "State", value: "Distributed" },
    ],
    stack: ["React", "TypeScript", "Node.js", "Socket.IO", "Kafka", "Redis", "MongoDB"],
    features: [
      "Realtime messaging infrastructure",
      "Kafka event-driven architecture",
      "Redis socket scaling",
      "Responsive social feed system",
      "Async notification processing",
      "Premium motion-based UI/UX"
    ],
    challenges: [
      "Scalable realtime synchronization",
      "Distributed event consistency",
      "Async message delivery architecture"
    ],
    demonstrates: [
      "Product Engineering",
      "Realtime Systems",
      "Event-Driven Architecture",
      "Backend Scalability"
    ],
    sections: [
      {
        title: "The problem",
        body: "Messages, likes and presence updates are high-frequency and have to reach every connected user quickly, even when those users are spread across different server instances.",
      },
      {
        title: "The approach",
        body: "Every interaction is an immutable event on Kafka. A Redis-backed Socket.IO adapter keeps connection state in sync across instances, so users on different nodes communicate as if they were on one.",
        points: [
          { title: "Kafka event sourcing", body: "Events are durable and replayable, so nothing is lost during traffic spikes." },
          { title: "Redis socket orchestration", body: "Redis Pub/Sub lets Socket.IO scale horizontally across server instances." },
          { title: "Async feed generation", body: "Consumers pre-compute feeds into Redis instead of running heavy join queries on read." },
          { title: "Guaranteed delivery", body: "The event backbone keeps message delivery eventual and reliable even when the database lags." },
        ],
      },
    ],
    thumbnail: "/projects/peer-net.webp",
    category: "SocialNetworkingApplication",
    keywords: "real-time social platform, Kafka, Redis, Socket.IO, event-driven architecture",
    github: "https://github.com/syedmukheeth/PeerNet",
    demo: "https://peer-net-indol.vercel.app",
    clips: ["https://res.cloudinary.com/dcqbcjrsp/video/upload/v1778519205/PeerNet-1_ysx8lh.mp4", "https://res.cloudinary.com/dcqbcjrsp/video/upload/v1778519207/PeerNet-2_pznwtj.mp4"]
  },
];

const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, "");

/** Projects whose stack includes a skill ("React" matches "React 19"). */
export function projectsUsing(skill: string): Project[] {
  const key = normalize(skill);
  return PROJECTS.filter((project) => project.stack.some((tech) => normalize(tech).startsWith(key)));
}
