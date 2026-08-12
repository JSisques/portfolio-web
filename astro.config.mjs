// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages serves this as a project page (jsisques.github.io/portfolio-web/),
// so it needs a base path — unlike the self-hosted homelab deployment, which
// serves from the domain root. The GH Pages workflow sets GH_PAGES=true at
// build time; every other build (Docker image, local dev) stays at "/".
const isGhPages = process.env.GH_PAGES === 'true';

export default defineConfig({
  site: isGhPages ? 'https://jsisques.github.io' : 'https://portfolio.jsisques.net',
  base: isGhPages ? '/portfolio-web' : '/',
  output: 'static',
  trailingSlash: 'never',
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
