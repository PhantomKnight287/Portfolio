import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import rehypeShiki from "@shikijs/rehype";
// for more information on configuration, visit:
// https://www.content-collections.dev/docs/configuration

const writings = defineCollection({
  name: "writings",
  directory: "content/writings",
  include: "*.mdx",
  schema: (z) => ({
    title: z.string(),
    summary: z.string(),
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
  collections: [writings],
});
