const commonPaths = require("./common-paths");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  mode: "development",
  entry: "./src",
  output: {
    filename: "bundle.js",
    path: commonPaths.outputPath
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: commonPaths.srcPath + "/template.html",
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      }
    })
  ]
};

module.exports = config;
