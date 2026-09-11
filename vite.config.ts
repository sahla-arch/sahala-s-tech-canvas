import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  nitro: isGitHubPages ? false : undefined,

  vite: {
    base: isGitHubPages ? "/sahala-s-tech-canvas/" : "/",
  },

  tanstackStart: {
    server: { entry: "server" },

    spa: isGitHubPages
      ? {
          enabled: true,
          prerender: {
            outputPath: "/index.html",
          },
        }
      : undefined,
  },
});
