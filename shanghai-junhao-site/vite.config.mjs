import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const base =
  process.env.GITHUB_ACTIONS && repoName && !repoName.endsWith(".github.io")
    ? `/${repoName}/`
    : "/";

export default defineConfig({
  base,
  optimizeDeps: {
    include: ["react", "react-dom/client"],
  },
  server: {
    warmup: {
      clientFiles: ["./src/main.jsx"],
    },
  },
  plugins: [react()],
});
