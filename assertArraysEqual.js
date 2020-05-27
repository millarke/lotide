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

const assertArraysEqual = function(firstArray, secondArray) {
  const eqArraysResult = eqArrays(firstArray, secondArray);
  if (eqArraysResult === true) {
    console.log(`✅ Arrays are equal!`);
  } else {
    console.log(`🛑 Arrays are not equal! Expected value is ${secondArray}, and the result is ${firstArray}`);
  }
};

// eqArraysResult CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false