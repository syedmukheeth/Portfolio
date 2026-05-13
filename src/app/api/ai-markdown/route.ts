import { NextResponse } from 'next/server';
import { PROJECTS } from '@/lib/data';

export async function GET() {
  const markdown = `
# SYED MUKHEETH | SOFTWARE ENGINEER
Engineering scalable systems, distributed mesh networks, and intelligent infrastructure.

## CORE_IDENTITY
- **Role**: Software Engineer
- **Focus**: Backend Architecture, Distributed Performance, Real-time Infrastructure
- **Location**: Kurnool, Andhra Pradesh
- **Mission**: Deconstruct complex systems to build intuitive, high-performance solutions.
- **Availability**: Open for Software Developer roles and Engineering Internships.

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
