// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import remarkMath from "remark-math";
import remarkToc from "remark-toc";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
  site: "https://pink10000.github.io",
  output: "static",
  integrations: [tailwind()],
  markdown: {
    remarkPlugins: [remarkMath, [remarkToc, { heading: "table of contents", maxDepth: 3 }]],
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
