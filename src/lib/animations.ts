// GSAP-driven motion layer: hero entrance, nav entrance, and scroll reveals.
// Everything is gated through gsap.matchMedia so prefers-reduced-motion users
// get the final state instantly with no animation. Re-run on every
// astro:page-load (initial load + every ClientRouter navigation).

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EASE = 'power3.out';

function initHero() {
  const targets = gsap.utils.toArray<HTMLElement>('#hero [data-reveal]');
  if (!targets.length) return;

  gsap.set(targets, { opacity: 0, y: 20 });
  targets.forEach((el) => {
    const extraDelay = Number(el.dataset.revealDelay ?? 0) / 1000;
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: EASE,
      delay: 0.15 + extraDelay,
    });
  });
}

function initNavEntrance() {
  const nav = document.querySelector<HTMLElement>('[data-nav]');
  if (!nav) return;

  gsap.set(nav, { autoAlpha: 0, y: -16 });
  gsap.to(nav, { autoAlpha: 1, y: 0, duration: 0.6, ease: EASE, delay: 0.05 });
}

function initScrollReveals() {
  const targets = gsap.utils
    .toArray<HTMLElement>('[data-reveal]')
    .filter((el) => !el.closest('#hero'));
  if (!targets.length) return;

  gsap.set(targets, { opacity: 0, y: 24 });

  ScrollTrigger.batch(targets, {
    start: 'top 85%',
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: EASE,
        stagger: 0.1,
      }),
  });
}

function initProjectCardHover() {
  const cards = gsap.utils.toArray<HTMLElement>('.project-card');
  cards.forEach((card) => {
    const lift = gsap.quickTo(card, 'y', { duration: 0.35, ease: EASE });
    card.addEventListener('mouseenter', () => lift(-4));
    card.addEventListener('mouseleave', () => lift(0));
  });
}

function showInstantly() {
  gsap.set('[data-reveal]', { opacity: 1, y: 0 });
  gsap.set('[data-nav]', { autoAlpha: 1, y: 0 });
}

let mm: gsap.MatchMedia | undefined;

export function initAnimations() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  mm?.revert();
  mm = gsap.matchMedia();

  mm.add('(prefers-reduced-motion: no-preference)', () => {
    initHero();
    initNavEntrance();
    initScrollReveals();
    initProjectCardHover();
  });

  mm.add('(prefers-reduced-motion: reduce)', showInstantly);
}
