import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  format: 'es6',
  dest: 'build/bundle.rollup.js',
  entry: 'js/index.js',
  plugins: [
    nodeResolve({
      jsnext: true,
	  main: true
	})
  ]
}
