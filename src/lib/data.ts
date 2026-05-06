export interface Project {
  id: string;
  title: string;
  tagline: string;
  role: string;
  description: string;
  architecture: {
    nodes: string[];
    flow: string[];
  };
  stats: {
    label: string;
    value: string;
  }[];
  stack: string[];
  github?: string;
  demo?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "sam-compiler",
    title: "SAM Compiler",
    tagline: "Secure Distributed Cloud IDE",
    role: "Lead Systems Engineer",
    description: "A high-performance distributed compilation engine featuring realtime collaboration and sandboxed execution environments.",
    architecture: {
      nodes: ["Frontend", "Gateway", "Execution Workers", "Docker Sandboxes"],
      flow: ["CRDT Sync", "Sandbox Execution", "Distributed Orchestration"],
    },
    stats: [
      { label: "Latency", value: "< 50ms" },
      { label: "Throughput", value: "10k req/s" },
      { label: "Isolation", value: "Kernel-Level" },
    ],
    stack: ["Node.js", "Docker", "Socket.io", "Redis"],
    github: "https://github.com/syedmukheeth/SAM-Compiler",
    demo: "https://sam-compiler-web.vercel.app",
  },
  {
    id: "sam-index",
    title: "SAMIndex",
    tagline: "Repository Intelligence Engine",
    role: "Infrastructure Architect",
    description: "Automated indexing pipeline for codebases, transforming raw source code into AI-ready contextual data.",
    architecture: {
      nodes: ["ZIP Ingest", "Extraction", "Redis Queue", "AI Context Engine"],
      flow: ["Indexing Pipeline", "Repo Scanning", "Worker Orchestration"],
    },
    stats: [
      { label: "Index Speed", value: "500 files/s" },
      { label: "Context Accuracy", value: "99.2%" },
      { label: "Queue Size", value: "Unlimited" },
    ],
    stack: ["Next.js", "BullMQ", "Redis", "OpenAI"],
    github: "https://github.com/syedmukheeth/SAMIndex",
    demo: "https://sam-index.vercel.app/",
  },
  {
    id: "peer-net",
    title: "PeerNet",
    tagline: "Real-time Event Mesh",
    role: "Backend Engineer",
    description: "Highly scalable messaging infrastructure leveraging Kafka and WebSockets for global event propagation.",
    architecture: {
      nodes: ["Client", "Socket Layer", "Redis Adapter", "Kafka Events"],
      flow: ["Websocket Flows", "Event Propagation", "Social Graph Activity"],
    },
    stats: [
      { label: "Concurrent Peers", value: "100k+" },
      { label: "Message TTL", value: "Realtime" },
      { label: "Uptime", value: "99.99%" },
    ],
    stack: ["Kafka", "Express", "MongoDB", "Redis"],
    github: "https://github.com/syedmukheeth/PeerNet",
    demo: "https://peer-net-indol.vercel.app",
  },
  {
    id: "sjdc-modernization",
    title: "SJDC Modernization",
    tagline: "Legacy System Transformation",
    role: "Product Engineer",
    description: "Modernizing institutional infrastructure with a focus on RBAC security and real-time academic workflows.",
    architecture: {
      nodes: ["Legacy System", "Migration Layer", "React SPA", "Realtime Academic Engine"],
      flow: ["Modernization Flow", "RBAC/RLS Security", "Migration Arch"],
    },
    stats: [
      { label: "Security Layer", value: "RLS-Native" },
      { label: "Migration Data", value: "1TB+" },
      { label: "Users", value: "20k+" },
    ],
    stack: ["Supabase", "React", "PostgreSQL", "Next.js"],
    github: "https://github.com/syedmukheeth/SJDC",
  },
];
