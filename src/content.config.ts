import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '{es,en}/*.md', base: './src/content/projects' }),
  schema: z.object({
    // Shared id across the es/ and en/ pair, e.g. "gardenia" — used to
    // link the two translations of the same project to each other.
    // NOTE: intentionally not named "slug" — the glob loader treats a
    // frontmatter `slug` field as an id override, which collided between
    // the es/ and en/ files of the same project.
    groupId: z.string(),
    lang: z.enum(['es', 'en']),
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    role: z.string().optional(),
    year: z.string(),
    status: z.enum(['live', 'wip', 'archived']),
    tags: z.array(z.string()),
    stack: z.array(z.string()),
    links: z.object({
      github: z.string().url().optional(),
      live: z.string().url().optional(),
    }),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { projects };
