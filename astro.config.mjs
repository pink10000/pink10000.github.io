// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
  site: "https://pink10000.github.io",
  output: "static",
  integrations: [tailwind()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  vite: {
    server: {
      headers: {
        "Permissions-Policy": "interest-cohort=()",
      },
    },
  },
});
