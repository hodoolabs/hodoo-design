import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src/**/*.{ts,tsx}"],
      exclude: ["src/**/*.stories.{ts,tsx}", "src/**/*.test.{ts,tsx}"],
      rollupTypes: true,
      outDir: "dist/types",
    }),
    libInjectCss(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      name: "HodooDesign",
      formats: ["es", "cjs"],
      fileName: (format) => `${format === "es" ? "esm" : format}/index.js`,
    },
    commonjsOptions: {
      transformMixedEsModules: true,
      include: [/node_modules/],
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "next-intl",
        "@heroicons/react",
        "@heroicons/react/24/outline",
        "tailwind-merge",
        "clsx",
        "class-variance-authority",
        "dayjs",
        "lodash",
        "react-tailwindcss-datepicker",
      ],
      output: [
        {
          format: "es",
          dir: "dist/esm",
          preserveModules: true,
          preserveModulesRoot: "src",
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
            "react/jsx-runtime": "jsxRuntime",
            "next-intl": "nextIntl",
          },
          assetFileNames: (assetInfo) => {
            if (assetInfo.name === "style.css") return "hodoo-design.css";
            return assetInfo.name;
          },
        },
        {
          format: "cjs",
          dir: "dist/cjs",
          preserveModules: true,
          preserveModulesRoot: "src",
          exports: "named",
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
            "react/jsx-runtime": "jsxRuntime",
            "next-intl": "nextIntl",
          },
          assetFileNames: (assetInfo) => {
            if (assetInfo.name === "style.css") return "hodoo-design.css";
            return assetInfo.name;
          },
        },
      ],
    },
    sourcemap: true,
    minify: false,
    cssMinify: true,
    target: "es2018",
    outDir: "dist",
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});
