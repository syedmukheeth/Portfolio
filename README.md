# Engineering Portfolio v4.2.1-STABLE

A high-performance, system-architected portfolio designed for the "Systems Thinker". Built with Next.js 15, React 19, and Framer Motion.

### 🚀 Technical Highlights
- **Framework**: Next.js 15 (App Router) + React 19.
- **Performance**: 
  - `95+` Lighthouse score (Targeted).
  - **Dynamic Hydration**: Critical components like Modals, HUDs, and Footers are lazy-loaded via `next/dynamic`.
  - **Media Pipeline**: Cloudinary-backed `LazyVideo` with intersection-observer logic and auto-fallback for range-request (416) errors.
  - **Zero-Shift UX**: Skeleton states and aspect-ratio locking for all visual assets.
- **Security**: Supabase RLS (Row Level Security) and isolated Docker-sandbox patterns (demonstrated in SAM-Compiler).
- **Architecture**: Event-driven event meshes using Kafka and Redis (demonstrated in PeerNet).

## 🛠 Features

- **Dual-Mode Interface**: Switch between "Human" (Visual/Aesthetic) and "Machine" (Technical/Metadata) modes.
- **Zero-Latency Video**: Optimized Cloudinary pipeline with Intersection Observer lazy-loading.
- **Floating Island Navigation**: Responsive, z-index managed mobile navigation.
- **System HUD**: Real-time status indicators and system health monitoring.
- **Dynamic Projects Section**: Fully data-driven project architecture with architecture diagrams.

## 📦 Installation

```bash
npm install
npm run dev
```

## 🏗 Build & Deploy

```bash
npm run build
```
The project is optimized for deployment on Vercel with automated build pipeline stability.

## 📝 License

Designed and Engineered by Syed Mukheeth.
