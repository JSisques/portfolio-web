// Placeholder milestones — replace with your real experience before
// publishing. Keep the es/en arrays the same length and in the same order.
export interface TimelineEntry {
  period: string;
  role: string;
  place: string;
  description: string;
}

export const timeline: Record<'es' | 'en', TimelineEntry[]> = {
  es: [
    {
      period: '20XX — Presente',
      role: 'Tu puesto actual',
      place: 'Nombre de la empresa',
      description: 'Sustituye esta entrada con tu experiencia real: qué construiste, con qué stack, y qué impacto tuvo.',
    },
    {
      period: '20XX — 20XX',
      role: 'Puesto anterior',
      place: 'Nombre de la empresa',
      description: 'Otra entrada de ejemplo lista para editar con tu trayectoria real.',
    },
    {
      period: '20XX',
      role: 'Formación / inicio',
      place: 'Universidad o hito inicial',
      description: 'Punto de partida de tu trayectoria como desarrollador.',
    },
  ],
  en: [
    {
      period: '20XX — Present',
      role: 'Your current role',
      place: 'Company name',
      description: 'Replace this entry with your real experience: what you built, with what stack, and what impact it had.',
    },
    {
      period: '20XX — 20XX',
      role: 'Previous role',
      place: 'Company name',
      description: 'Another example entry ready to edit with your real background.',
    },
    {
      period: '20XX',
      role: 'Education / starting point',
      place: 'University or starting milestone',
      description: 'The starting point of your journey as a developer.',
    },
  ],
};
