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
    // I had hoped this would work, but nope.
    packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main', 'jsnext:main']
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
