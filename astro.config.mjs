// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://pink10000.github.io",
  output: "static",
  integrations: [tailwind()],
  vite: {
    server: {
      headers: {
        "Permissions-Policy": "interest-cohort=()",
      },
    },
  },
});
