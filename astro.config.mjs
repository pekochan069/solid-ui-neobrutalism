// @ts-check
import mdx from "@astrojs/mdx";
import solidJs from "@astrojs/solid-js";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import compressor from "astro-compressor";
import expressiveCode from "astro-expressive-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import lucidePreprocess from "vite-plugin-lucide-preprocess";

// https://astro.build/config
export default defineConfig({
  integrations: [expressiveCode(), mdx({}), solidJs(), compressor()],
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["group", "doc-anchor"],
          },
          content: {
            type: "element",
            tagName: "span",
            properties: {
              className: ["doc-anchor-icon"],
            },
            children: [
              {
                type: "text",
                value: "#",
              },
            ],
          },
        },
      ],
    ],
  },
  vite: {
    plugins: [tailwindcss(), lucidePreprocess()],
  },
  experimental: {
    contentIntellisense: true,
  },
});
