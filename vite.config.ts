// @lovable.dev/vite-tanstack-config already includes the required plugins.
// Do not add TanStack, React, Tailwind or Nitro plugins manually.

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isNetlify = process.env.NETLIFY === "true";

export default defineConfig({
  // Netlify receives its compatible build.
  // Lovable and local development retain Lovable's default configuration.
  nitro: isNetlify ? { preset: "netlify" } : true,

  tanstackStart: {
    server: { entry: "server" },
  },
});