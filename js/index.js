/*
 * Uncomment to test in package module tree-shaking
 */
// import {cube} from './poor-math-skills';

/*
 * Uncomment to test NPM based module tree-shaking
 */
import {cube} from 'poor-math-skills';

console.log(cube(5));
