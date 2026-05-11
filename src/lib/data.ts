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
    tagline: "Exploring Distributed Code Execution",
    role: "Systems Exploration",
    description: "An ambitious project built to understand the complexities of distributed compilation, featuring real-time collaboration and secure Docker-sandboxed execution environments.",
    architecture: {
      nodes: ["Frontend", "Gateway", "Execution Workers", "Docker Sandboxes"],
      flow: ["CRDT Sync", "Sandbox Execution", "Worker Orchestration"],
    },
    stats: [
      { label: "Execution", value: "Isolated" },
      { label: "Sync", value: "Real-time" },
      { label: "Security", value: "Sandboxed" },
    ],
    stack: ["Node.js", "Docker", "Socket.io", "Redis"],
    github: "https://github.com/syedmukheeth/SAM-Compiler",
    demo: "https://sam-compiler-web.vercel.app",
  },
  {
    id: "sam-index",
    title: "SAMIndex",
    tagline: "Building Repo Intelligence Pipelines",
    role: "Infrastructure Exploration",
    description: "I built SAMIndex to solve 'Keyword Blindness' in large repositories, bridging the Context Gap between raw code and developer intent through automated intelligence pipelines.",
    architecture: {
      nodes: ["ZIP Ingest", "Extraction", "Redis Queue", "AI Context Engine"],
      flow: ["Indexing Pipeline", "Repo Scanning", "Worker Orchestration"],
    },
    stats: [
      { label: "Pipeline", value: "Automated" },
      { label: "Processing", value: "Queue-based" },
      { label: "Output", value: "AI-Ready" },
    ],
    stack: ["Next.js", "BullMQ", "Redis", "OpenAI"],
    github: "https://github.com/syedmukheeth/SAMIndex",
    demo: "https://sam-index.vercel.app/",
  },
  {
    id: "peer-net",
    title: "PeerNet",
    tagline: "Deconstructing Real-time Event Meshes",
    role: "Backend Exploration",
    description: "A scalable networking platform designed to deconstruct high-throughput event meshes, leveraging Kafka and WebSockets for resilient real-time communication.",
    architecture: {
      nodes: ["Client", "Socket Layer", "Redis Adapter", "Kafka Events"],
      flow: ["Websocket Flows", "Event Propagation", "Social Graph Activity"],
    },
    stats: [
      { label: "Protocol", value: "WebSocket" },
      { label: "Stream", value: "Kafka-Native" },
      { label: "State", value: "Distributed" },
    ],
    stack: ["Kafka", "Express", "MongoDB", "Redis"],
    github: "https://github.com/syedmukheeth/PeerNet",
    demo: "https://peer-net-indol.vercel.app",
  },
  {
    id: "sjdc-modernization",
    title: "SJDC Modernization",
    tagline: "Modernizing Academic Workflows",
    role: "Product Engineering",
    description: "A product-focused transformation of legacy institutional infrastructure, prioritizing secure RBAC architectures and real-time collaboration for 20k+ users.",
    architecture: {
      nodes: ["Legacy System", "Migration Layer", "React SPA", "Realtime Academic Engine"],
      flow: ["Modernization Flow", "RBAC/RLS Security", "Migration Arch"],
    },
    stats: [
      { label: "Security", value: "RLS-Native" },
      { label: "Scale", value: "20k+ Users" },
      { label: "Type", value: "Institutional" },
    ],
    stack: ["Supabase", "React", "PostgreSQL", "Next.js"],
    github: "https://github.com/syedmukheeth/SJDC",
  },
];
