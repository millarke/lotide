// const assertArraysEqual = function(firstArray, secondArray) {
//   const eqArraysResult = eqArrays(firstArray, secondArray);
//   if (eqArraysResult === true) {
//     console.log(`✅ Arrays are equal!`);
//   } else {
//     console.log(`🛑 Arrays are not equal! Expected value is ${secondArray}, and the result is ${firstArray}`);
//   }
// };

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

const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (true !== source.includes(itemsToRemove[i])) {
      newArray.push(source[i]);
    }
  }
  return newArray;
};

module.exports = without;

// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);