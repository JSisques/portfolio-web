// Small, dependency-free progressive-enhancement layer: custom cursor,
// scroll reveal, 3D tilt cards, hero parallax and nav scroll/active state.
// Every piece checks pointer/motion capabilities before doing anything, so
// touch devices and prefers-reduced-motion users get the static fallback.

const finePointer = () => window.matchMedia('(pointer: fine)').matches;
const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initCursor() {
  if (!finePointer() || reducedMotion()) return;

  const html = document.documentElement;
  html.classList.add('has-cursor');

  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  const ring = document.createElement('div');
  ring.className = 'cursor-ring';
  document.body.append(dot, ring);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener(
    'pointermove',
    (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      html.classList.remove('cursor-hidden');
    },
    { passive: true },
  );

  document.addEventListener('mouseleave', () => html.classList.add('cursor-hidden'));
  document.addEventListener('mouseenter', () => html.classList.remove('cursor-hidden'));

  function raf() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  const hoverTargets = 'a, button, [data-cursor-hover]';
  document.addEventListener('pointerover', (e) => {
    if ((e.target as Element)?.closest?.(hoverTargets)) html.classList.add('cursor-hover');
  });
  document.addEventListener('pointerout', (e) => {
    if ((e.target as Element)?.closest?.(hoverTargets)) html.classList.remove('cursor-hover');
  });
}

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

function initTilt() {
  const cards = document.querySelectorAll<HTMLElement>('[data-tilt]');
  if (!cards.length || !finePointer() || reducedMotion()) return;

  const MAX_DEG = 6;

  cards.forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;

      const rx = (0.5 - py) * MAX_DEG * 2;
      const ry = (px - 0.5) * MAX_DEG * 2;

      card.style.setProperty('--rx', `${rx.toFixed(2)}deg`);
      card.style.setProperty('--ry', `${ry.toFixed(2)}deg`);
      card.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`);
      card.style.setProperty('--my', `${(py * 100).toFixed(1)}%`);
    });

    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
    });
  });
}

function initParallax() {
  const targets = document.querySelectorAll<HTMLElement>('[data-parallax]');
  if (!targets.length || !finePointer() || reducedMotion()) return;

  let rafId = 0;
  let pointerX = 0;
  let pointerY = 0;

  window.addEventListener(
    'pointermove',
    (e) => {
      pointerX = e.clientX / window.innerWidth - 0.5;
      pointerY = e.clientY / window.innerHeight - 0.5;
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        targets.forEach((el) => {
          const strength = Number(el.dataset.parallax) || 12;
          el.style.transform = `translate3d(${pointerX * strength}px, ${pointerY * strength}px, 0)`;
        });
        rafId = 0;
      });
    },
    { passive: true },
  );
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
  initCursor();
  initReveal();
  initTilt();
  initParallax();
  initNavScroll();
}
