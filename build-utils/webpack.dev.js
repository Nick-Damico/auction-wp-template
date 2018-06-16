const config = {
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  }
}

module.exports = config;
