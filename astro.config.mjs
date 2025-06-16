// @ts-check
import mdx from "@astrojs/mdx";
import solidJs from "@astrojs/solid-js";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import expressiveCode from "astro-expressive-code";
import Icons from "unplugin-icons/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), expressiveCode(), mdx()],

  vite: {
    plugins: [
      tailwindcss(),
      Icons({
        autoInstall: true,
        compiler: "solid",
      }),
    ],
  },
});
