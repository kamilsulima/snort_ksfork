// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: {
    main: "./src/index.tsx",
    sw: {
      import: "./src/service-worker.ts",
      filename: "service-worker.js",
    },
    pow: {
      import: require.resolve("@snort/system/dist/pow-worker.js"),
      filename: "pow.js",
    },
  },
  target: "browserslist",
  mode: isProduction ? "production" : "development",
  devtool: isProduction ? "source-map" : "cheap-module-source-map",
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "build"),
    filename: isProduction ? "[name].[chunkhash].js" : "[name].js",
    clean: isProduction,
  },
  devServer: {
    open: true,
    host: "localhost",
    historyApiFallback: true,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "public/manifest.json" },
        { from: "public/robots.txt" },
        { from: "public/nostrich_512.png" },
        { from: "public/nostrich_256.png" },
        { from: "_headers" },
      ],
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: "public/favicon.ico",
      excludeChunks: ["sw", "pow"],
    }),
    new ESLintPlugin({
      extensions: ["js", "mjs", "jsx", "ts", "tsx"],
      eslintPath: require.resolve("eslint"),
      failOnError: !isProduction,
      cache: true,
    }),
    new MiniCssExtractPlugin({
      filename: isProduction ? "[name].[chunkhash].css" : "[name].css",
    }),
  ],
  module: {
    rules: [
      {
        enforce: "pre",
        exclude: /@babel(?:\/|\\{1,2})runtime/,
        test: /\.(js|mjs|jsx|ts|tsx|css)$/,
        loader: require.resolve("source-map-loader"),
      },
      {
        test: /\.tsx?$/i,
        use: [
          {
            loader: require.resolve("babel-loader"),
            options: {
              babelrc: false,
              configFile: false,
              presets: [
                "@babel/preset-env",
                ["@babel/preset-react", { runtime: "automatic" }],
                "@babel/preset-typescript",
              ],
              plugins: [
                [
                  "formatjs",
                  {
                    idInterpolationPattern: "[sha512:contenthash:base64:6]",
                    ast: true,
                  },
                ],
              ],
            },
          },
        ],
        exclude: ["/node_modules/"],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, require.resolve("css-loader")],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|webp)$/i,
        type: "asset",
      },
    ],
  },
  optimization: {
    usedExports: true,
    chunkIds: "deterministic",
    minimize: isProduction,
    minimizer: [
      "...",
      // same as https://github.com/facebook/create-react-app/blob/main/packages/react-scripts/config/webpack.config.js
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          keep_classnames: isProduction,
          keep_fnames: isProduction,
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
  },
  resolve: {
    aliasFields: ["browser"],
    extensions: ["...", ".tsx", ".ts", ".jsx", ".js"],
    modules: ["...", __dirname, path.resolve(__dirname, "src")],
  },
};

module.exports = () => config;
