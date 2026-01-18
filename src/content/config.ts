import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const postCollection = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),    
  schema: ({ image }) => 
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).optional(),
      draft: z.boolean().default(false),
      heroImage: image().optional(),
    }),
});

export const collections = {
  posts: postCollection,
};