# Systems-First Engineering Portfolio
### Senior Full-Stack & Infrastructure Engineer

A high-performance, OS-grade portfolio designed to showcase complex distributed systems, infrastructure pipelines, and modern product engineering. Built with a "Systems Thinker" philosophy, prioritizing low-level optimization and architectural integrity.

---

## 🏗️ Core Architecture & Engineering

This portfolio is not just a showcase—it's a demonstration of high-fidelity UX engineering and performance optimization.

### ⚡ Zero-Latency Playback System
Implemented a persistent, ref-based video management system to eliminate DOM-mounting lag. By maintaining inactive video elements in the background and utilizing imperative hardware-accelerated triggers, the interface achieves sub-millisecond response times for hover-to-play interactions.

### 🖥️ "Machine Mode" Engine
A custom global state management system that toggles the entire application's aesthetic and logic between **Human Mode** (Fluid, Cinematic) and **Machine Mode** (Terminal-grade, Raw Data, HUD-heavy). This deconstructs the UI to show the underlying system logic.

---

## 🚀 Projects Under Focus

### 1. PeerNet | Deconstructing Event Meshes
*   **Problem**: High-throughput social graph synchronization.
*   **Solution**: A Kafka-native event mesh leveraging WebSockets for resilient, real-time communication.
*   **Tech**: Kafka, Node.js, Redis, MongoDB, Socket.io.

### 2. SAM Compiler | Distributed Code Execution
*   **Problem**: Secure execution of untrusted code at scale.
*   **Solution**: An orchestration layer that dispatches execution requests to a pool of ephemeral, kernel-level Docker sandboxes.
*   **Tech**: Docker, BullMQ, Redis, Node.js.

### 3. SAMIndex | Intelligence Ingestion Pipelines
*   **Problem**: Keyword blindness in massive repositories.
*   **Solution**: A high-throughput bulk ingestion engine that streams ZIP archives into parallel processing workers for AI context enrichment.
*   **Tech**: Next.js, OpenAI, Redis, BullMQ.

### 4. SJDC Modernization | Legacy Infrastructure Refactoring
*   **Problem**: Institutional legacy system bottlenecks for 20k+ users.
*   **Solution**: Progressive migration using compatibility wrappers and Zero-Trust Row Level Security (RLS).
*   **Tech**: Supabase, React 19, PostgreSQL.

---

## 🛠️ Technical Stack

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript.
- **Motion**: Framer Motion (Complex Orchestration), GSAP.
- **Styling**: TailwindCSS, CSS Modules (for low-level control).
- **Backend/Infra**: Kafka, Redis, Docker, BullMQ, PostgreSQL.
- **Observability**: Custom HUD-based system metrics and trace logging.

---

## 🛠️ Development Setup

```bash
# Clone the architecture
git clone https://github.com/syedmukheeth/Portfolio.git

# Install dependencies
npm install

# Initialize local environment
cp .env.example .env

# Boot development server
npm run dev
```

---

## 📈 Performance Philosophy

- **GPU Utilization**: Leveraging `will-change` properties and hardware-accelerated transforms for 60fps animations.
- **Asset Pipeline**: Optimized video preloading (`preload="metadata"`) and lazy-loading for off-screen components.
- **Memory Management**: Imperative cleanup of persistent refs and event listeners to prevent memory leaks in a single-page environment.

---

**Built with Precision.** // [syedmukheeth.dev](https://syedmukheeth.dev)
