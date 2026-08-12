# Projects content

Each project is a pair of Markdown files sharing the same filename/`slug`,
one per locale:

```
src/content/projects/es/<slug>.md
src/content/projects/en/<slug>.md
```

The frontmatter schema lives in `src/content.config.ts`. `slug` must match
between the two files of a pair — it's how the site links the Spanish and
English versions of the same project together. `order` controls the display
order on the projects grid (lower first); `featured: true` projects are
shown first regardless of status.

To add a new project, copy an existing pair (e.g. `gardenia.md`) and fill in
both languages.
