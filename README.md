# Portfolio Web

Personal developer portfolio, built with [Astro](https://astro.build). A
single-page, bilingual (`es`/`en`) site with a Three.js-driven hero
background, built to be self-hosted on [my homelab](https://github.com/JSisques/homelab)
at `portfolio.jsisques.net`.

## Stack

- **Astro** (static output) + **Tailwind CSS v4**
- **Three.js** for the hero's animated node-graph background
- Content collections for bilingual project data (`src/content/projects`)
- Self-hosted variable fonts (Space Grotesk, Inter, JetBrains Mono) — no
  external font/CDN requests

## Structure

```
src/
  pages/index.astro       Spanish (default locale, unprefixed)
  pages/en/index.astro    English
  components/             Nav, Hero, About, Stack, Projects, Timeline, Now, Contact...
  content/projects/es/    Project write-ups (Spanish)
  content/projects/en/    Project write-ups (English)
  content.config.ts       Project content collection schema
  i18n/ui.ts              UI string dictionary (es/en)
  data/timeline.ts         Experience timeline entries — currently placeholders, edit before publishing
  data/social.ts           Contact links
  lib/hero-scene.ts        Three.js scene for the hero canvas
```

Adding a project: see `src/content/projects/README.md`.

## Development

```bash
pnpm install
pnpm dev       # start the dev server
pnpm build     # type-check + build to dist/
pnpm preview   # preview the production build
```

## Deployment

`Dockerfile` builds the static site and serves it with nginx
(`nginx.conf`). CI (`.github/workflows/docker-publish.yml`) builds and
pushes `ghcr.io/jsisques/portfolio-web` on every push to `main`; the
[homelab repo](https://github.com/JSisques/homelab)'s
`services/portfolio-web/` pulls and runs that image via Docker Compose,
routed through Traefik (`portfolio-web.home.arpa`) and a Cloudflare Tunnel
(`portfolio.jsisques.net`).
