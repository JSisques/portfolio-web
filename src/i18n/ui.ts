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
    'hero.status': 'Backend Engineer — construyendo Gardenia ahora mismo',
    'hero.title.line1': 'Diseño sistemas que siguen en pie',
    'hero.title.line2': 'dos años después.',
    'hero.subtitle':
      'Backend engineer especializado en TypeScript y NestJS: arquitecturas orientadas a eventos, Domain-Driven Design y CQRS. Y la infraestructura, homelab propio incluido, que las sostiene.',
    'hero.cta.projects': 'Ver proyectos',
    'hero.cta.contact': 'Hablemos',
    'about.eyebrow': 'Sobre mí',
    'about.title': 'De la idea al sistema en producción',
    'about.body1':
      'Llevo más de cuatro años construyendo el motor que no se ve: backends escalables y mantenibles en TypeScript y NestJS, con foco en <strong>Domain-Driven Design</strong>, CQRS y arquitecturas orientadas a eventos. Me interesa menos <em>que funcione</em> y más que siga funcionando bien dentro de dos años.',
    'about.body2':
      'Cuando una idea me parece útil, no me quedo solo en pensarla: la construyo. Mi propio homelab es el mejor ejemplo fuera del trabajo — Proxmox, Kubernetes, Terraform, Ansible y Argo CD desplegando y monitorizando mis propios proyectos, punta a punta.',
    'stack.eyebrow': 'Herramientas',
    'stack.title': 'Con lo que trabajo',
    'stack.cat.languages': 'Lenguajes',
    'stack.cat.backend': 'Backend & datos',
    'stack.cat.frontend': 'Frontend',
    'stack.cat.infra': 'Infra & DevOps',
    'projects.eyebrow': 'Trabajo',
    'projects.title': 'Una selección de sistemas, de la idea al despliegue',
    'projects.status.live': 'En producción',
    'projects.status.wip': 'En desarrollo',
    'projects.status.archived': 'Archivado',
    'projects.link.github': 'Código',
    'projects.link.live': 'Ver en vivo',
    'projects.empty': 'Muy pronto habrá proyectos aquí.',
    'timeline.eyebrow': 'Trayectoria',
    'timeline.title': 'El camino hasta aquí',
    'contact.title': '¿Construimos el <em>próximo sistema</em> juntos?',
    'contact.body':
      'Siempre abierto a hablar de proyectos, ideas o simplemente sobre sistemas bien diseñados.',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.built': 'Diseñado y construido con Astro y Tailwind CSS. Alojado en mi propio homelab.',
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
    'hero.status': 'Backend Engineer — building Gardenia right now',
    'hero.title.line1': 'I design systems that still stand',
    'hero.title.line2': 'two years later.',
    'hero.subtitle':
      'Backend engineer specialized in TypeScript and NestJS: event-driven architectures, Domain-Driven Design and CQRS. And the infrastructure, my own homelab included, that keeps it all running.',
    'hero.cta.projects': 'View projects',
    'hero.cta.contact': "Let's talk",
    'about.eyebrow': 'About me',
    'about.title': 'From idea to system in production',
    'about.body1':
      'I\'ve spent more than four years building the engine nobody sees: scalable, maintainable backends in TypeScript and NestJS, focused on <strong>Domain-Driven Design</strong>, CQRS and event-driven architectures. I care less about <em>does it work</em> and more about whether it still works well two years from now.',
    'about.body2':
      "When an idea seems worth building, I don't just think about it — I build it. My own homelab is the best example outside of work: Proxmox, Kubernetes, Terraform, Ansible and Argo CD deploying and monitoring my own projects, end to end.",
    'stack.eyebrow': 'Tools',
    'stack.title': 'What I work with',
    'stack.cat.languages': 'Languages',
    'stack.cat.backend': 'Backend & data',
    'stack.cat.frontend': 'Frontend',
    'stack.cat.infra': 'Infra & DevOps',
    'projects.eyebrow': 'Work',
    'projects.title': "A selection of systems, from idea to deployment",
    'projects.status.live': 'Live',
    'projects.status.wip': 'In progress',
    'projects.status.archived': 'Archived',
    'projects.link.github': 'Code',
    'projects.link.live': 'View live',
    'projects.empty': 'Projects are coming soon.',
    'timeline.eyebrow': 'Timeline',
    'timeline.title': 'The road here',
    'contact.title': "Shall we build the <em>next system</em> together?",
    'contact.body':
      "Always open to talk about projects, ideas, or just well-designed systems.",
    'footer.rights': 'All rights reserved.',
    'footer.built': 'Designed and built with Astro and Tailwind CSS. Self-hosted on my own homelab.',
    'lang.switch': 'ES',
  },
} as const;

export type UiKey = keyof (typeof ui)['es'];
