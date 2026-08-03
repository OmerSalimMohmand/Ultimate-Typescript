const { Circle } = require("./shapes"); // CommonJS syntax for compatibility with Node.js module system.

import { Circle, Square } from "./shapes"; // ES module syntax for compatibility with modern JavaScript module system.
import { Circle as MyCircle } from "./shapes";

import Store from "./Storage"; // Importing the default export from Storage.ts
import Store, { Format } from "./Storage"; // default export can also coexist with named exports.

import * as Shapes from "./shapes"; // Wildcard import

import { Circle, Square } from "./shapes/index";

import { Circle, Square } from "./shapes"; // This will work because of the index.ts file in the shapes folder.