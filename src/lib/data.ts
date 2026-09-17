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

type Icon = ComponentType<{ className?: string }>;

export const SITE_URL = "https://www.syedmukheeth.is-a.dev";

export const PROFILE = {
  name: "Syed Abdul Mukheeth",
  shortName: "Syed",
  role: "Software Engineer",
  focus: "Backend & Distributed Systems",
  location: "Kurnool, India",
  coordinates: "15.83°N 78.04°E",
  timezone: "IST",
  availability: "Open to work",
  email: "syedmukheeth09@gmail.com",
  resume: "https://drive.google.com/file/d/1SMFd_ADTNeYjBQ-6IH7RHT_UzzAPrTBy/view?usp=sharing",
  avatar: "https://res.cloudinary.com/dcqbcjrsp/image/upload/f_auto,q_auto,w_320/avatar_kyjo2q.png",
  github: "syedmukheeth",
  twitter: "@syed_mukheeth",
  description:
    "Software engineering student building high-performance backend systems, distributed architecture, and real-time infrastructure. Creator of SAM Compiler, SAMIndex, and PeerNet.",
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
  /** Two colors for the card preview gradient. */
  tint: [string, string];
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
    tint: ["#34D399", "#0F766E"],
    category: "DeveloperApplication",
    keywords: "cloud IDE, Docker sandboxing, real-time collaboration, CRDT, Yjs, BullMQ",
    github: "https://github.com/syedmukheeth/SAM-Compiler",
    demo: "https://sam-compiler-web.vercel.app",
    clips: ["https://res.cloudinary.com/dcqbcjrsp/video/upload/v1778519207/SamCompiler-1_dotu4m.mp4", "https://res.cloudinary.com/dcqbcjrsp/video/upload/v1778519210/SamCompiler-2_hdkgnc.mp4"]
  },
  {
    id: "sam-index",
    title: "SAMIndex",
    tagline: "AI Repository Intelligence & Analysis Engine",
    role: "Infrastructure Engineering",
    description: "Developed an AI-powered repository intelligence platform that analyzes GitHub repositories using scalable indexing pipelines, async processing, and architecture-aware retrieval systems.",
    fullOverview: "SAMIndex solves 'Keyword Blindness' in large repositories by bridging the Context Gap between raw code and developer intent. It features a ZIP-based ingestion pipeline that reduced API overhead and implemented a provider-independent AI architecture for high-throughput indexing.",
    architecture: {
      nodes: ["ZIP Ingestion", "Extraction", "Redis Queue", "AI Context Engine"],
      flow: ["Async Indexing", "Architecture Mapping", "Context Retrieval"],
    },
    stats: [
      { label: "Pipeline", value: "Automated" },
      { label: "Processing", value: "Queue-based" },
      { label: "AI Layer", value: "Provider-Agnostic" },
    ],
    stack: ["React", "TypeScript", "Node.js", "Express", "BullMQ", "Redis", "MongoDB", "OpenAI"],
    features: [
      "ZIP-based repository ingestion",
      "Async indexing architecture",
      "AI-powered repo analysis",
      "Redis-backed orchestration",
      "Scalable bulk processing",
      "Architecture-aware search"
    ],
    challenges: [
      "Efficient large-repo processing",
      "High-throughput indexing optimization",
      "Scalable async architecture design"
    ],
    demonstrates: [
      "AI Tooling Engineering",
      "Backend Systems Design",
      "Infrastructure Thinking",
      "Queue Architecture"
    ],
    sections: [
      {
        title: "The problem",
        body: "Indexing tools that crawl repositories file by file run into API rate limits and slow down on large codebases, and plain keyword search misses what a developer is actually looking for.",
      },
      {
        title: "The approach",
        body: "SAMIndex downloads the whole repository as a ZIP archive, extracts it locally and processes files in parallel. Every indexed repository is prepared for LLM context with semantic chunking, metadata enrichment and filtering of non-essential files.",
        points: [
          { title: "ZIP streaming engine", body: "Stream-to-disk extraction processes files as they unzip, so large repositories don't exhaust server memory." },
          { title: "Multi-stage queue", body: "BullMQ separates IO-heavy extraction from CPU-heavy AI processing, so each worker pool scales independently." },
          { title: "Fault tolerance", body: "Jobs are tracked in Redis; if a worker fails, the job is re-enqueued with its progress." },
          { title: "AI-native storage", body: "Files are stored with metadata about their place in the project, ready for retrieval-augmented generation." },
        ],
      },
    ],
    tint: ["#A78BFA", "#4338CA"],
    category: "DeveloperApplication",
    keywords: "AI code analysis, repository indexing, OpenAI, BullMQ, Redis, codebase intelligence",
    github: "https://github.com/syedmukheeth/SAMIndex",
    demo: "https://sam-index.vercel.app/",
    clips: ["https://res.cloudinary.com/dcqbcjrsp/video/upload/v1778519207/SamIndex-1_srrmp2.mp4", "https://res.cloudinary.com/dcqbcjrsp/video/upload/v1778519207/SamIndex-2_rz4747.mp4"]
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
    tint: ["#38BDF8", "#1D4ED8"],
    category: "SocialNetworkingApplication",
    keywords: "real-time social platform, Kafka, Redis, Socket.IO, event-driven architecture",
    github: "https://github.com/syedmukheeth/PeerNet",
    demo: "https://peer-net-indol.vercel.app",
    clips: ["https://res.cloudinary.com/dcqbcjrsp/video/upload/v1778519205/PeerNet-1_ysx8lh.mp4", "https://res.cloudinary.com/dcqbcjrsp/video/upload/v1778519207/PeerNet-2_pznwtj.mp4"]
  },
  {
    id: "sjdc-modernization",
    title: "SJDC Modernization",
    tagline: "Modern Academic Infrastructure Platform",
    role: "Product Engineering",
    description: "Modernized a legacy institutional system into a scalable, realtime, and secure academic platform focused on improving student, faculty, and administrative workflows.",
    fullOverview: "A product-focused transformation of legacy institutional infrastructure for 20k+ users. Prioritized secure RBAC architectures and implemented database-level authorization using Supabase RLS while maintaining operational continuity during migration.",
    architecture: {
      nodes: ["Legacy Infrastructure", "Migration Layer", "React SPA", "Realtime Engine"],
      flow: ["Modernization Pipeline", "RBAC/RLS Security", "Realtime Subscriptions"],
    },
    stats: [
      { label: "Security", value: "RLS-Native" },
      { label: "Scale", value: "20k+ Users" },
      { label: "Frontend", value: "React 19" },
    ],
    stack: ["React 19", "TypeScript", "Next.js", "Supabase", "PostgreSQL", "Framer Motion"],
    features: [
      "Legacy to Modern migration",
      "Realtime attendance system",
      "Dynamic headless CMS",
      "AI institutional assistant",
      "Secure RBAC architecture",
      "Responsive SPA architecture"
    ],
    challenges: [
      "Legacy infrastructure migration",
      "Secure academic data handling",
      "Maintaining operational continuity"
    ],
    demonstrates: [
      "Enterprise Modernization",
      "Frontend Architecture",
      "Security Engineering",
      "Realtime Systems"
    ],
    sections: [
      {
        title: "The problem",
        body: "The platform was in daily use by students, faculty and administrators. It had to be modernized without interrupting any of those workflows.",
      },
      {
        title: "The approach",
        body: "A progressive migration: legacy endpoints were wrapped in a unified API layer so the new React frontend could ship while the backend was still being refactored and data moved over in parallel.",
        points: [
          { title: "Row Level Security", body: "Authorization lives in the database via Supabase RLS, so grades and records are filtered at the source for each session." },
          { title: "Realtime workflows", body: "Postgres change subscriptions push notifications and status updates across campus without page refreshes." },
          { title: "AI-powered retrieval", body: "Faculty can query institutional documentation through semantic search." },
        ],
      },
    ],
    tint: ["#FBBF24", "#EA580C"],
    category: "EducationalApplication",
    keywords: "academic platform, legacy modernization, Next.js, Supabase, RLS, React 19",
    github: "https://github.com/syedmukheeth/SJDC",
    clips: ["https://res.cloudinary.com/dcqbcjrsp/video/upload/v1778519206/SJDC-1_gz4t3w.mp4", "https://res.cloudinary.com/dcqbcjrsp/video/upload/v1778519206/SJDC-2_hq7doz.mp4"]
  },
];
