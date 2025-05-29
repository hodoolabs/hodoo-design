import { tanstackViteConfig } from "@tanstack/vite-config";
import react from "@vitejs/plugin-react";
import fs from "fs";
import { defineConfig, mergeConfig } from "vite";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// 기본 설정
const config = defineConfig({
  plugins: [
    react({
      // React 내부 모듈 최적화
      jsxRuntime: "automatic",
    }),
    libInjectCss(),
    {
      name: "copy-css",
      closeBundle: async () => {
        try {
          // 디렉토리 존재 여부 확인 및 생성
          if (!fs.existsSync("dist")) {
            fs.mkdirSync("dist", { recursive: true });
          }

          // hodoo-style.css 파일 복사
          if (fs.existsSync("src/hodoo-style.css")) {
            fs.copyFileSync("src/hodoo-style.css", "dist/hodoo-style.css");
            console.log("hodoo-style.css 복사 완료");
          } else {
            console.warn("경고: src/hodoo-style.css 파일을 찾을 수 없습니다");
          }

          // tailwind.config.js 파일 복사
          if (fs.existsSync("tailwind.config.js")) {
            if (!fs.existsSync("dist/esm")) {
              fs.mkdirSync("dist/esm", { recursive: true });
            }

            if (!fs.existsSync("dist/cjs")) {
              fs.mkdirSync("dist/cjs", { recursive: true });
            }

            fs.copyFileSync(
              "tailwind.config.js",
              "dist/esm/tailwind.config.js"
            );
            fs.copyFileSync(
              "tailwind.config.js",
              "dist/cjs/tailwind.config.cjs"
            );
            console.log("tailwind.config.js 복사 완료");
          } else {
            console.warn("경고: tailwind.config.js 파일을 찾을 수 없습니다");
          }
        } catch (error) {
          console.error("파일 복사 중 오류 발생:", error);
        }
      },
    },
  ],
  build: {
    sourcemap: true,
    minify: false,
  },
  resolve: {
    dedupe: ["react", "react-dom"],
    conditions: ["import", "module", "browser", "default"],
  },
  ssr: {
    noExternal: ["react-tailwindcss-datepicker"],
  },

  optimizeDeps: {
    include: ["react-tailwindcss-datepicker"],
  },
});

// TanStack 설정과 병합
export default mergeConfig(
  config,
  tanstackViteConfig({
    entry: "./src/index.tsx",
    srcDir: "./src",
    externalDeps: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "next-intl",
      "@heroicons/react",
      "@heroicons/react/24/outline",
      "@heroicons/react/24/solid",
      "tailwind-merge",
      "clsx",
      "class-variance-authority",
      "dayjs",
      "lodash",
    ],
  })
);
