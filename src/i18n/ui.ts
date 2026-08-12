export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

export const ui = {
  es: {
    'meta.title': 'Javier Sisques — Ingeniero de software',
    'meta.description':
      'Portfolio de Javier Sisques, desarrollador de software especializado en construir sistemas: backend, infraestructura y automatización.',
    'nav.about': 'Sobre mí',
    'nav.stack': 'Stack',
    'nav.projects': 'Proyectos',
    'nav.timeline': 'Trayectoria',
    'nav.contact': 'Contacto',
    'hero.eyebrow': 'Backend Engineer',
    'hero.title.line1': 'Construyo',
    'hero.title.line2': 'sistemas',
    'hero.subtitle':
      'Backend engineer especializado en TypeScript y NestJS: arquitecturas DDD, CQRS y orientadas a eventos. Diseño software pensado para seguir funcionando bien dentro de dos años, y la infraestructura —mi propio homelab incluido— que lo sostiene.',
    'hero.cta.projects': 'Ver proyectos',
    'hero.cta.contact': 'Hablemos',
    'hero.scroll': 'Scroll',
    'now.title': 'Ahora mismo',
    'now.body':
      'Construyendo mi homelab como código —Proxmox, K3s, Argo CD— y preparando el despliegue de Gardenia, la primera aplicación pública que correrá sobre él.',
    'about.eyebrow': 'Sobre mí',
    'about.title': 'De la idea al sistema en producción',
    'about.body1':
      'Llevo más de 4 años construyendo el "motor" que no se ve: backends escalables y mantenibles en TypeScript y NestJS, con foco en Domain-Driven Design, CQRS y arquitecturas orientadas a eventos. Me interesa menos "que funcione" y más "que siga funcionando bien dentro de dos años".',
    'about.body2':
      'Cuando una idea me parece útil, no me quedo solo en pensarla: la construyo. Mi propio homelab es el mejor ejemplo fuera del trabajo — Proxmox, Kubernetes, Terraform, Ansible y Argo CD desplegando y monitorizando mis propios proyectos, punta a punta.',
    'stack.eyebrow': 'Herramientas',
    'stack.title': 'Con lo que trabajo',
    'stack.cat.languages': 'Lenguajes',
    'stack.cat.backend': 'Backend & datos',
    'stack.cat.frontend': 'Frontend',
    'stack.cat.infra': 'Infra & DevOps',
    'projects.eyebrow': 'Trabajo',
    'projects.title': 'Proyectos destacados',
    'projects.subtitle':
      'Una selección de sistemas que he diseñado y construido, de la idea al despliegue.',
    'projects.featured': 'Destacado',
    'projects.status.live': 'En producción',
    'projects.status.wip': 'En desarrollo',
    'projects.status.archived': 'Archivado',
    'projects.link.github': 'Código',
    'projects.link.live': 'Ver en vivo',
    'projects.empty': 'Muy pronto habrá proyectos aquí.',
    'timeline.eyebrow': 'Trayectoria',
    'timeline.title': 'El camino hasta aquí',
    'contact.eyebrow': 'Contacto',
    'contact.title': '¿Construimos algo juntos?',
    'contact.body':
      'Siempre abierto a hablar de proyectos, ideas o simplemente sobre sistemas bien diseñados.',
    'contact.cta': 'Escríbeme',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.built':
      'Diseñado y construido con Astro, Tailwind CSS y Three.js. Alojado en mi propio homelab.',
    'lang.switch': 'EN',
  },
  en: {
    'meta.title': 'Javier Sisques — Software Engineer',
    'meta.description':
      'Portfolio of Javier Sisques, a software developer who builds systems: backend, infrastructure and automation.',
    'nav.about': 'About',
    'nav.stack': 'Stack',
    'nav.projects': 'Projects',
    'nav.timeline': 'Timeline',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'Backend Engineer',
    'hero.title.line1': 'I build',
    'hero.title.line2': 'systems',
    'hero.subtitle':
      'Backend engineer specialized in TypeScript and NestJS: DDD, CQRS and event-driven architectures. I design software meant to still work well two years from now, and the infrastructure — my own homelab included — that keeps it running.',
    'hero.cta.projects': 'View projects',
    'hero.cta.contact': "Let's talk",
    'hero.scroll': 'Scroll',
    'now.title': 'Right now',
    'now.body':
      'Building my homelab as code —Proxmox, K3s, Argo CD— and getting ready to deploy Gardenia, the first public app that will run on top of it.',
    'about.eyebrow': 'About me',
    'about.title': 'From idea to system in production',
    'about.body1':
      'I\'ve spent 4+ years building the "engine" nobody sees: scalable, maintainable backends in TypeScript and NestJS, focused on Domain-Driven Design, CQRS and event-driven architectures. I care less about "does it work" and more about "will it still work well two years from now".',
    'about.body2':
      "When an idea seems worth building, I don't just think about it — I build it. My own homelab is the best example outside of work: Proxmox, Kubernetes, Terraform, Ansible and Argo CD deploying and monitoring my own projects, end to end.",
    'stack.eyebrow': 'Tools',
    'stack.title': 'What I work with',
    'stack.cat.languages': 'Languages',
    'stack.cat.backend': 'Backend & data',
    'stack.cat.frontend': 'Frontend',
    'stack.cat.infra': 'Infra & DevOps',
    'projects.eyebrow': 'Work',
    'projects.title': 'Featured projects',
    'projects.subtitle':
      "A selection of systems I've designed and built, from idea to deployment.",
    'projects.featured': 'Featured',
    'projects.status.live': 'Live',
    'projects.status.wip': 'In progress',
    'projects.status.archived': 'Archived',
    'projects.link.github': 'Code',
    'projects.link.live': 'View live',
    'projects.empty': 'Projects are coming soon.',
    'timeline.eyebrow': 'Timeline',
    'timeline.title': 'The road here',
    'contact.eyebrow': 'Contact',
    'contact.title': "Let's build something together?",
    'contact.body':
      "Always open to talk about projects, ideas, or just well-designed systems.",
    'contact.cta': 'Get in touch',
    'footer.rights': 'All rights reserved.',
    'footer.built':
      'Designed and built with Astro, Tailwind CSS and Three.js. Self-hosted on my own homelab.',
    'lang.switch': 'ES',
  },
} as const;

export type UiKey = keyof (typeof ui)['es'];
