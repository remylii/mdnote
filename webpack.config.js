var path = require('path');

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.join(__dirname, 'public'),
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: [/node_modules/]
      }
    ]
  },
  resolve: {
    modules: [
      "src", "node_modules"
    ]
  },

  devServer: {
    contentBase: "public",
    compress: true,
    port: 9000
  }
};
