import { NextResponse } from 'next/server';
import { EXPERIENCE, PROJECTS } from '@/lib/data';

export async function GET() {
  const markdown = `
# SYED ABDUL MUKHEETH PEER | SOFTWARE ENGINEER
Engineering scalable systems, distributed mesh networks, and intelligent infrastructure.

## CORE_IDENTITY
- **Role**: Software Engineer
- **Focus**: Backend Architecture, Distributed Performance, Real-time Infrastructure
- **Location**: Kurnool, Andhra Pradesh
- **Mission**: Deconstruct complex systems to build intuitive, high-performance solutions.
- **Tech Lead**: Lokha Innovation, Website Development (https://lokha.net)
- **Founder**: SAMPeer Studio (https://sampeer-studio.vercel.app)

## EXPERIENCE
${EXPERIENCE.map(e => `- **${e.role}**, ${e.company} (${e.type}), ${e.start} - ${e.end ?? 'Present'}, ${e.location}`).join('\n')}

## SYSTEMS_PROJECTS
${PROJECTS.map(p => `
### ${p.title}
- **Tagline**: ${p.tagline}
- **Description**: ${p.description}
- **Stack**: ${p.stack.join(', ')}
- **Links**: ${p.github ? `[Source](${p.github})` : ''} ${p.demo ? `[Demo](${p.demo})` : ''}
`).join('\n')}

## TECHNICAL_STACK
- **Frontend**: React, Next.js, Framer Motion, Tailwind CSS
- **Backend**: Node.js, Express, BullMQ, TypeScript
- **Infrastructure**: Redis, Kafka, Docker, Supabase, Cloudinary
- **Database**: PostgreSQL, SQL
- **AI**: Claude Code, Codex, Antigravity, AI workflow automation

## CONNECT_NODES
- **GitHub**: https://github.com/syedmukheeth
- **LinkedIn**: https://linkedin.com/in/syedmukheeth
- **X / Twitter**: https://x.com/syed_mukheeth
- **Email**: syedmukheeth09@gmail.com

---
*Optimized for AI Agents (text/markdown)*
  `.trim();

  return new NextResponse(markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
}
