import { resolve as _resolve } from "path";

export const entry = "./src/index.js";

export const output = {
  filename: "main.js",
  path: _resolve(__dirname, "dist"),
};

export const module = {
  rules: [
    {
      use: "ts-loader",
      exclude: /node_modules/,
    },
    {
      test: /.jsx?$/,
      include: [_resolve(__dirname, "src")],
      exclude: [_resolve(__dirname, "node_modules")],
      loader: "babel-loader",
    },
    {
      test: /.css?$/,
      exclude: [],
      use: ["style-loader", "css-loader", "postcss-loader"],
    },
  ],
};
export const resolve = {
  extensions: [".tsx", ".ts", ".js"],
};
