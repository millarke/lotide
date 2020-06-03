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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;