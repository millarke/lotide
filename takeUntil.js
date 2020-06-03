const takeUntil = function(array, callback) {

  const newArray = [];

  for (const item of array) {
    if (callback(item)) {
      break;
    } else {
      newArray.push(item);
    }
  }
  // return false;
  return newArray;
};

module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0); // [ 1, 2, 5, 7, 2 ]
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ','); // [ 'I\'ve', 'been', 'to', 'Hollywood' ]
// console.log(results2);