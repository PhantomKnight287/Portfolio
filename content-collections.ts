import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import rehypeShiki from "@shikijs/rehype";

const englishWritings = defineCollection({
  name: "englishWritings",
  directory: "content/writings/en",
  include: "*.mdx",
  schema: (z) => ({
    title: z.string(),
    summary: z.string(),
    locale: z.literal("en").default("en"),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      rehypePlugins: [[rehypeShiki, { theme: "ayu-dark" }]],
    });
    return {
      ...document,
      mdx,
    };
  },
});

const germanWritings = defineCollection({
  name: "germanWritings",
  directory: "content/writings/de",
  include: "*.mdx",
  schema: (z) => ({
    title: z.string(),
    summary: z.string(),
    locale: z.literal("de").default("de"),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      rehypePlugins: [[rehypeShiki, { theme: "ayu-dark" }]],
    });
    return {
      ...document,
      mdx,
    };
  },
});

export default defineConfig({
  collections: [englishWritings, germanWritings],
});
