### testing tree-shaking with rollup and webpack2

Each folder contains a build.sh file whcih should be ran to compare output of rollup vs webpack2. I have included the `dist` files so that there is no need to download and run the commands to see the differences.

##### dependency-local-with-es2015
Demonstrates the the use of local dependencies on es2015 modules.
```js
import {cube} from './poor-math-skills';
```

**Results**
- *Rollup* pulls in only the functions required
- *Webpack* pulls in only the functions required

##### dependency-of-lodash
Demonstrates the the use of lodashes es2015 packaged modules and effiencies in how they expose methods.
```js
import {map} from 'lodash-es';
// vs
import map from 'lodash-es/map';
```

##### dependency-with-es2015-and-commonjs
Demonstrates the the use of NPM dependencies on packages containing both CommonJS and es2015 modules.
package.json -> "main" points to commonjs
package.json -> "jsnext:main" points to es2015 modules
```js
import {cube} from 'poor-math-skills';
```

**Results**
- *Rollup* pulls in only the functions required
- *Webpack* pulls in all functions and appears to only pull in the CommonJS module not the es2015 module.

##### dependency-with-only-es2015
Demonstrates the the use of NPM dependencies on packages containing only es2015 modules.
package.json -> "main" points to es2015 modules
```js
import {cube} from 'poor-math-skills';
```

**Results**
- *Rollup* pulls in only the functions required
- *Webpack* pulls in only the functions required
