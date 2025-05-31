import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// 기본 설정
export default defineConfig({
  plugins: [
    react({
      // React 내부 모듈 최적화
      jsxRuntime: "automatic",
    }),
    libInjectCss(),
    dts({
      include: ["src/**/*.ts", "src/**/*.tsx"],
      outDir: ["dist/esm", "dist/cjs"],
    }),
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
    sourcemap: process.env.NODE_ENV === "development",
    minify: true,
    outDir: "dist",
    lib: {
      entry: path.resolve(__dirname, "src/index.tsx"),
      name: "hodoo-design",
      formats: ["es", "cjs"],
      fileName: (format) =>
        format === "es" ? "esm/index.js" : "cjs/index.cjs",
    },
    rollupOptions: {
      // 외부 의존성 설정
      external: [
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
        "react-tailwindcss-datepicker",
      ],
      output: {
        // 전역 변수 매핑
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        // 번들 출력 설정
        preserveModules: false, // 단일 번들 파일로 출력하기 위해 false로 설정
        exports: "named",
        // format별 설정
        format: "es", // 이 옵션은 각 format 출력에 대해 자동으로 재정의됩니다
        esModule: true, // ESM 호환성 지원
        interop: "auto",
      },
    },
  },
  resolve: {
    dedupe: ["react", "react-dom"],
    conditions: ["import", "module", "browser", "default"],
  },
});
