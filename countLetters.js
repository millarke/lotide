const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

assertEqual(countLetters('LHL'), { L: 2, H: 1 });
assertEqual(countLetters('LHL LHL LHL'), { L: 6, H: 3 });
assertEqual(countLetters('dog dog doggy dog dog'), { d: 5, o: 5, g: 6, y: 1 });


console.log(countLetters('LHL'));
console.log(countLetters('LHL LHL LHL'));
console.log(countLetters('dog dog doggy dog dog'));
console.log(countLetters("lighthouse in the house"));