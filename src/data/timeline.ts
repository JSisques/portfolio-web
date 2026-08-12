export interface TimelineEntry {
  period: string;
  role: string;
  place: string;
  description: string;
}

export const timeline: Record<'es' | 'en', TimelineEntry[]> = {
  es: [
    {
      period: 'Ago 2025 — Presente',
      role: 'Ingeniero de software',
      place: 'Next Digital',
      description:
        'Diseño y desarrollo de backend en TypeScript/NestJS con arquitecturas orientadas a eventos bajo CQRS y DDD, resolvers GraphQL y foco en escalabilidad.',
    },
    {
      period: 'Dic 2024 — Ago 2025',
      role: 'Full Stack Engineer',
      place: 'Enso',
      description:
        'Backend con NestJS e interfaces con Next.js/TypeScript. Una web generativa con IA que personaliza recomendaciones en tiempo real, con Prisma ORM y analítica de producto vía Mixpanel.',
    },
    {
      period: 'Oct 2024 — Dic 2024',
      role: 'Full Stack Team Leader',
      place: 'DIVAINteam SL',
      description:
        'Liderazgo del equipo de IT: definición de arquitectura, APIs con Node.js y Python, y adopción de Jira/Confluence para ordenar el flujo de trabajo.',
    },
    {
      period: 'Nov 2021 — Oct 2023',
      role: 'Programador Junior',
      place: 'Supply Nexus',
      description:
        'Interfaces con React, APIs y procedimientos con Node.js, C#, SQL y PL/SQL, y documentación técnica del proyecto. Dos años construyendo las bases del oficio.',
    },
    {
      period: '2020 — 2024',
      role: 'Ingeniería Informática',
      place: 'Universidad Europea',
      description:
        'El punto de partida de todo esto: de ahí en adelante, construir sistemas dejó de ser un ejercicio académico.',
    },
  ],
  en: [
    {
      period: 'Aug 2025 — Present',
      role: 'Software Engineer',
      place: 'Next Digital',
      description:
        'Backend design and development in TypeScript/NestJS with event-driven architectures under CQRS and DDD, GraphQL resolvers, and a focus on scalability.',
    },
    {
      period: 'Dec 2024 — Aug 2025',
      role: 'Full Stack Engineer',
      place: 'Enso',
      description:
        'NestJS backend and Next.js/TypeScript interfaces. A generative AI-powered site personalizing recommendations in real time, with Prisma ORM and product analytics via Mixpanel.',
    },
    {
      period: 'Oct 2024 — Dec 2024',
      role: 'Full Stack Team Leader',
      place: 'DIVAINteam SL',
      description:
        'Led the IT team: defined architecture, built APIs with Node.js and Python, and rolled out Jira/Confluence to bring order to the workflow.',
    },
    {
      period: 'Nov 2021 — Oct 2023',
      role: 'Junior Developer',
      place: 'Supply Nexus',
      description:
        'React interfaces, APIs and procedures with Node.js, C#, SQL and PL/SQL, and technical documentation. Two years building the fundamentals of the craft.',
    },
    {
      period: '2020 — 2024',
      role: 'BSc in Computer Engineering',
      place: 'Universidad Europea',
      description:
        "Where it all started — after that, building systems stopped being just an academic exercise.",
    },
  ],
};
