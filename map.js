// const eqArrays = function(firstArray, secondArray) {
//   if (firstArray.length !== secondArray.length) {
//     return false;
//   }

//   for (let i = 0; i < firstArray.length; i++) {
//     if (firstArray[i] !== secondArray[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertArraysEqual = function(firstArray, secondArray) {
//   const eqArraysResult = eqArrays(firstArray, secondArray);
//   if (eqArraysResult === true) {
//     console.log(`✅ Arrays are equal!`);
//   } else {
//     console.log(`🛑 Arrays are not equal! Expected value is ${secondArray}, and the result is ${firstArray}`);
//   }
// };

///////// Actual code for map.js

// const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// const results1 = map(words, word => word[0]);

// TESTS
// console.log(results1);

// assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
// assertArraysEqual(map(words, word => word[1]), ['r', 'o', 'o', 'a', 'o']);
// assertArraysEqual(map(words, word => word[0] + 'a'), ['ga', 'ca', 'ta', 'ma', 'ta']);