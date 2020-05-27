// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arrayToTail) {
  let newArray = [];
  for (let i = 1; i < arrayToTail.length; i++) {
    newArray.push(arrayToTail[i]);
  } return newArray;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
assertEqual(result[0], "Labs"); // ensure first element is NOT "Labs"

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// More edge case tests
const arrayOfOne = tail(["Hello"]);
assertEqual(arrayOfOne.length, 0); // An array with only one element should yield an empty array for its tail

const arrayOfNone = tail([]);
assertEqual(arrayOfNone.length, 0); // An empty array should yield an empty array for its tail