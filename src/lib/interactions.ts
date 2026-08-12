// Small, dependency-free progressive-enhancement layer: scroll reveal and
// nav scroll/active state. Everything respects prefers-reduced-motion.

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initReveal() {
  const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (!targets.length) return;

  document.documentElement.classList.add('reveal-ready');

  targets.forEach((el) => {
    const delay = el.dataset.revealDelay;
    if (delay) el.style.setProperty('--reveal-delay', `${delay}ms`);
  });

  if (reducedMotion()) {
    targets.forEach((el) => el.classList.add('is-in'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
  );

  targets.forEach((el) => observer.observe(el));
}

function initNavScroll() {
  const nav = document.querySelector<HTMLElement>('[data-nav]');
  if (!nav) return;

  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

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
}

export function initInteractions() {
  initReveal();
  initNavScroll();
}
