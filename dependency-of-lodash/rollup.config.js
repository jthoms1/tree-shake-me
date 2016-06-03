import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  format: 'es6',
  dest: './dist/bundle.rollup.js',
  entry: './src/index.js',
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true
    })
  ]
}
