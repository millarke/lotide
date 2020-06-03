// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const countLetters = function(letters) {
  const results = {};
  letters = letters.replace(/ /g, "");

  for (const letter of letters) {
    if (results[letter]) {
      results[letter] += 1;
      // console.log(typeof results[letter])
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

module.exports = countLetters;
