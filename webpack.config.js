const autoprefixer = require('autoprefixer-loader')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = {
  cache: true,
  debug: true,
  devtool: 'source-map',
  entry: ['./src/js/main.js'],
  output: {
    path: './dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    inline: true,
    contentBase: './dist'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx|es6)$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react'],
      }
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!less-loader")
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.less', '.css']
  },
  plugins: [
    new ExtractTextPlugin("index.css", {allChunks: false})
  ]
};
