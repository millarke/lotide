const middle = function(arrayToMiddle) {
  let newArray = [];
  if (arrayToMiddle.length <= 2) {
    return newArray;
  } else if (arrayToMiddle.length % 2 === 0) {
    let middleIndex = arrayToMiddle.length / 2;
    const firstMiddleIndex = middleIndex - 1;
    const secondMiddleIndex = middleIndex;
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

module.exports = middle;