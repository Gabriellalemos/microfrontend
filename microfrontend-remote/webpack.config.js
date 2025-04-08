const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    port: 3001,
    static: path.join(__dirname, "dist"),
  },
  output: {
    publicPath: "auto",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "remote",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/components/Button",
      },
      //   shared: {
      //     react: { singleton: true, eager: false },
      //     "react-dom": { singleton: true, eager: false },
      //   },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
