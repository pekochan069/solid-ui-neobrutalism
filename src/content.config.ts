import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const docs = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/docs" }),
  schema: z.object({
    title: z.string().min(1),
    slug: z.string(),
    description: z.string(),
    prev: z.string().optional(),
    prevLabel: z.string().optional(),
    next: z.string().optional(),
    nextLabel: z.string().optional(),
  }),
});

export const collections = {
  docs,
};
