import { calculateGST, sayHello } from "./gst.js";
import { calculateTax } from "./tax.js";

console.log(calculateTax(100)); // calculateTax() wouldn't complain about missing arg without using JSDoc in our tax.js file as it wouldn't know the type of the argument. calculateTax() sent undefined arg to the function and returned NaN.
console.log(calculateGST(100));


import * as _ from 'lodash';

_.clone([1, 2, 3]);