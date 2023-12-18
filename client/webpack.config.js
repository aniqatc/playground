const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  entry: "./src/main/scripts/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "all.js",
    publicPath: "/",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/main/index.html",
      favicon: "./src/main/assets/favicon.png",
    }),
    new MiniCssExtractPlugin({
      filename: "all.css",
    }),
    ...(isDevelopment
      ? [
          new Dotenv({
            path: ".env.development",
          }),
        ]
      : [
          new webpack.DefinePlugin({
            "process.env.SERVER": JSON.stringify(process.env.SERVER),
          }),
        ]),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
};
