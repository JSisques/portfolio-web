// Prefixes a root-relative path with Astro's configured `base` (e.g.
// "/portfolio-web" on GitHub Pages, "" for the self-hosted root deploy).
// import.meta.env.BASE_URL isn't guaranteed to have a trailing slash, so
// this normalizes both sides before joining rather than assuming one.
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const rel = path.startsWith('/') ? path : `/${path}`;
  return `${base}${rel}` || '/';
}
