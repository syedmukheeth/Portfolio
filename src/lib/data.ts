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
  github?: string;
  demo?: string;
  clips?: string[];
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
    github: "https://github.com/syedmukheeth/SJDC",
    clips: ["https://res.cloudinary.com/dcqbcjrsp/video/upload/v1778519206/SJDC-1_gz4t3w.mp4", "https://res.cloudinary.com/dcqbcjrsp/video/upload/v1778519206/SJDC-2_hq7doz.mp4"]
  },
];
