import { defineConfig } from "vite";
import marko from "@marko/vite";

export default defineConfig({
  plugins: [marko()],
  base: '/in-a-giphy/',
  build: {
    sourcemap: true, // Generate sourcemaps for all builds.
    emptyOutDir: false, // Avoid server & client deleting files from each other.
  },
});
