'ues strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist/',
    filename: 'bundle.webpack.js'
  },
  resolve: {
    // This is the magic line that allows webpack to resolve jsnext:main
    mainFields: ["jsnext:main", "main", "browser"]
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src'),
        ],
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
