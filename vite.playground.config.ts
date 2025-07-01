import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";

// Playground 전용 Vite 설정
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic",
    }),
  ],
  root: "playground",
  publicDir: "../public",
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "hodoo-design": path.resolve(__dirname, "src/index.tsx"),
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
    force: true,
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify("development"),
    global: "globalThis",
    "typeof require": '"function"',
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
