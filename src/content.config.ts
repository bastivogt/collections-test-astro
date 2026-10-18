// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';

// 4. Define a `loader` and `schema` for each collection
const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    featured: z.boolean().optional(),
  }),
});


// const members = defineCollection({
//   loader: file('./src/content/members/members.json' ),

// });

const members = defineCollection({
  loader: file('./src/content/members/members.json' ),
  schema: z.object({
    id: z.int(),
    name: z.string(),
    birthday: z.coerce.date(),
  }),
});


// 5. Export a single `collections` object to register your collection(s)
export const collections = { posts, members };