const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const WebpackPwaManifest = require("webpack-pwa-manifest");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  entry: "./src/main/scripts/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
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
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sassOptions: {
                fiber: false,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name][hash][ext][query]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/main/index.html",
      favicon: "./src/main/assets/favicon.png",
      meta: {
        description:
            "Explore a collection of interactive widgets showcasing various functionalities from calculators to financial markets monitoring, task tracking, lottery analysis and more - all built with modern frontend and backend technologies.",
        keywords:
            "interactive widgets, calculator, task tracker, digital footprint, financial markets, lottery tracker, mongodb, express, node, javascript",
        author: "Aniqa",
        "og:type": "website",
        "og:title": "Interactive Widget Playground",
        "og:description":
            "Explore a collection of interactive widgets showcasing various functionalities from calculators to financial markets monitoring, task tracking, lottery analysis and more.",
        "og:url": "https://playground.aniqa.dev",
        "og:image": "",
        "twitter:title": "Interactive Widget Playground",
        "twitter:card": "summary_large_image",
        "twitter:image": "",
        "twitter:image:alt": "Screenshot of interactive widget collection",
        "twitter:site": "@aniqatc",
      },
    }),
    new MiniCssExtractPlugin({
      filename: "bundle.css",
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
            "process.env.MAPBOX_KEY": JSON.stringify(process.env.MAPBOX_KEY),
          }),
          new WebpackPwaManifest({
            name: "Interactive Widget Playground",
            short_name: "Playground",
            description: "Explore interactive widgets featuring calculators, task tracking, financial monitoring, lottery analysis and more.",
            theme_color: "#211e1f",
            background_color: "#d3d3d3",
            display: "standalone",
            start_url: "/",
            crossorigin: "use-credentials",
            icons: [
              {
                src: path.resolve(__dirname, "src/main/assets/favicon.png"),
                sizes: [96, 128, 192, 256, 384, 512],
                destination: path.join("icons"),
                filename: "icon-[size].png",
              },
            ],
          }),
        ]),
      ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
};
