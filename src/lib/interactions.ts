// Nav scroll state and active-section highlighting. Framework-free — plain
// class toggling, independent of prefers-reduced-motion. Re-run on every
// astro:page-load, so a previous run's listeners are aborted first.

let controller: AbortController | undefined;

export function initNavScroll() {
  controller?.abort();
  controller = new AbortController();
  const { signal } = controller;

  const nav = document.querySelector<HTMLElement>('[data-nav]');
  if (!nav) return;

  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true, signal });

  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]'));
  if (!links.length) return;

  const sections = links
    .map((link) => document.querySelector<HTMLElement>(link.hash))
    .filter((el): el is HTMLElement => !!el);
  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const id = `#${entry.target.id}`;
        links.forEach((link) => link.classList.toggle('is-active', link.hash === id));
      }
    },
    { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
  );

  sections.forEach((section) => observer.observe(section));
  signal.addEventListener('abort', () => observer.disconnect());
}
