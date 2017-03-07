const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const autoprefixer = require('autoprefixer');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './main.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'postcss-loader']
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'bundle.css'
    })
  ],

  resolve: {
    modules: [
      "src", "node_modules"
    ]
  },
  devServer: {
    contentBase: "./public",
    compress: true,
    port: 9000,
    inline: true,
    historyApiFallback: true
  },
  devtool: 'source-map'
};
