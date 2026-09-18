# Syed Abdul Mukheeth Peer | Portfolio

A dark-first portfolio in Geist with a single lime accent. Built with Next.js 16 (App Router), React 19 and Tailwind CSS v4, with no animation or UI libraries.

## Structure

- `src/lib/data.ts`: all content (profile, experience, skills, projects and case-study copy)
- `src/app/page.tsx`: home (hero, about, experience, projects, stack, GitHub activity, contact)
- `src/app/projects/[slug]`: case-study pages, statically generated from `PROJECTS`
- `src/components/site`: nav with scroll-spy, command palette (⌘K / Ctrl K / `/`), copy-email, theme toggle, toaster
- `src/app/globals.css`: color tokens (light on `:root`, dark on `.dark`) and the motion system; `src/lib/motion.ts` mirrors the timing for JS
- `src/proxy.ts` + `src/app/api/ai-markdown`: markdown version of the profile for AI crawlers

Motion is CSS-first (scroll-driven reveals, view-transition theme crossfade) and every animation has a `prefers-reduced-motion` branch.

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
