### testing tree-shaking with rollup and webpack2

Test tree shaking using webpack 2. Seems to work in package against modules with relative paths, but not outside from NPM.
```sh
npm run webpack
```

Test tree shaking using rollup.  Works with internal and external modules from NPM. Requires "jsnext:main" within the dependents
package.json to work.
```sh
npm run rollup
```
