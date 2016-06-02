'ues strict';

var webpack = require('webpack');

module.exports = {
  entry: './js/index.js',
  output: {
    path: './build/',
    filename: 'bundle.webpack.js'
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin()
  ],
  stats: {
    // Nice colored output
    colors: true
  }
};
