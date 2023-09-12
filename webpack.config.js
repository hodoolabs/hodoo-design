const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
              outputPath: "images/",
              publicPath: "images/",
            },
          },
        ],
      },
      {
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /.jsx?$/,
        include: [path.resolve(__dirname, "src")],
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader",
      },
      {
        test: /.css?$/,
        exclude: [],
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
