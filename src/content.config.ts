import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/blog` directory.
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/blog" }),
  // Define the schema for the frontmatter in the blog posts.
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

export const collections = { blog };
