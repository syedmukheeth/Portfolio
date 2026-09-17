# Syed Abdul Mukheeth Peer | Portfolio

A minimal, document-style portfolio. Built with Next.js 16 (App Router), React 19 and Tailwind CSS v4.

## Structure

- `src/lib/data.ts`: all content (profile, socials, skills, projects and case-study copy)
- `src/app/page.tsx`: home (header, about, contact, projects, tech stack, GitHub activity)
- `src/app/projects/[slug]`: case-study pages, statically generated from `PROJECTS`
- `src/components/site`: navbar, footer, theme toggle, dashed rules
- `src/proxy.ts` + `src/app/api/ai-markdown`: markdown version of the profile for AI crawlers

To add a project, append an entry to `PROJECTS` in `src/lib/data.ts`. The home grid, `/projects`, the case-study page, sitemap and JSON-LD pick it up automatically.

## Development

```bash
npm install
npm run dev
```

```bash
npm run build
npm run lint
```

Project thumbnails in `public/projects` are 1440×900 screenshots of the live sites. Profile photos live in `public/images`; the favicon is `src/app/icon.png`.

GitHub contributions are fetched from `github-contributions-api.jogruber.de` and cached for 24 hours. If the request fails, the section is hidden.
