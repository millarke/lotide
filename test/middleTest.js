const assertArraysEqual = require('../assertArraysEqual');
// const eqArrays = require('./eqArrays');
const middle = require('../middle');


// TEST CODE
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
// assertArraysEqual(middle([1, 2, 3, 7, 4, 5, 6]), [3, 4]);

// // TEST CODE for middle()
// console.log(middle([1])) // => []
// console.log(middle([1, 2])) // => []

// console.log(middle([1, 2, 3])) // => [2]
// console.log(middle([1, 2, 3, 4, 5])) // => [3]

// console.log(middle([1, 2, 3, 4])) // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]