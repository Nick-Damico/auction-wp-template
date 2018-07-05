const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ]
}

module.exports = config;
