const assertArraysEqual = function(firstArray, secondArray) {
  const eqArraysResult = eqArrays(firstArray, secondArray);
  if (eqArraysResult === true) {
    console.log(`✅ Arrays are equal!`);
  } else {
    console.log(`🛑 Arrays are not equal! Expected value is ${secondArray}, and the result is ${firstArray}`);
  }
};

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

const middle = function(arrayToMiddle) {
  let newArray = [];
  if (arrayToMiddle.length <= 2) {
    return newArray;
  } else if (arrayToMiddle.length % 2 === 0) {
      let middleIndex = arrayToMiddle.length / 2;
      const firstMiddleIndex = middleIndex - 1;
      const secondMiddleIndex = middleIndex
      newArray.push(arrayToMiddle[firstMiddleIndex]);
      newArray.push(arrayToMiddle[secondMiddleIndex]);
      // return newArray;
  } else {
      let middleIndex = Math.floor(arrayToMiddle.length / 2);
      newArray.push(arrayToMiddle[middleIndex]);
      // return newArray;
  }
  return newArray;
};

// TEST CODE
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 7, 4, 5, 6]), [3, 4]);

// // TEST CODE for middle()
// console.log(middle([1])) // => []
// console.log(middle([1, 2])) // => []

// console.log(middle([1, 2, 3])) // => [2]
// console.log(middle([1, 2, 3, 4, 5])) // => [3]

// console.log(middle([1, 2, 3, 4])) // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]