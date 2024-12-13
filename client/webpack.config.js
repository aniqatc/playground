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
  entry: {
    main: "./src/main/scripts/index.js",
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].[contenthash].bundle.js",
    chunkFilename: "[name].[contenthash].chunk.js",
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
        description: "Explore a collection of interactive web tools including a graphing calculator, real-time financial dashboard, task manager, digital footprint analyzer, lottery data tool, GitHub visualizer, and community bookmarks platform.",
        keywords: "interactive widgets, graphing calculator, financial dashboard, task management, digital footprint, lottery analysis, github visualization, bookmark platform, mongodb, express, nodejs, webpack, tailwind, sass",
        author: "Aniqa",
        "og:type": "website",
        "og:title": "Interactive Widget Playground | Modern Web Development Showcase",
        "og:description": "Discover a collection of interactive web tools showcasing modern full-stack development: from data visualization to utility applications, built with Node.js, Express, MongoDB, and Webpack.",
        "og:url": "https://playground.aniqa.dev",
        "og:image": "",
        "twitter:title": "Interactive Widget Playground | Full-Stack Web Development",
        "twitter:card": "summary_large_image",
        "twitter:image": "",
        "twitter:image:alt": "Collection of interactive web widgets and tools",
        "twitter:site": "@aniqatc",
        "twitter:description": "Explore interactive web tools: graphing calculator, financial dashboard, task manager, digital footprint analyzer, lottery data tool, and more.",
        "robots": "index, follow",
        "googlebot": "index, follow",
      },
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
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
            description: "Collection of interactive web tools featuring a graphing calculator, financial dashboard, task manager, digital footprint analyzer, and more built with modern web technologies.",
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
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 20000,
      maxSize: 250000,
      cacheGroups: {
        // Splitting large packages into separate chunks
        mathjs: {
          test: /[\\/]node_modules[\\/]mathjs[\\/]/,
          name: 'vendor.mathjs',
          priority: 20,
          chunks: 'all',
        },
        chartjs: {
          test: /[\\/]node_modules[\\/]chart.js[\\/]/,
          name: 'vendor.chartjs',
          priority: 20,
          chunks: 'all',
        },
        functionPlot: {
          test: /[\\/]node_modules[\\/]function-plot[\\/]/,
          name: 'vendor.functionplot',
          priority: 20,
          chunks: 'all',
        },
        // group common vendor packages
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: 10,
          chunks: 'all',
        },
        // group common code between widgets
        common: {
          minChunks: 2,
          priority: 5,
          reuseExistingChunk: true,
          name: 'common'
        },
      }
    }
  },
};
