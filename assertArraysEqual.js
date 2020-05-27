const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }

  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};

const assertEqual = function(TEST) {
  if (TEST === true) {
    console.log("Array's are equal!");
  } else {
    console.log("Array's are not equal!");
  }
};

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3])); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
assertEqual(eqArrays([1, 2, 3], [3, 2, 1])); // => false