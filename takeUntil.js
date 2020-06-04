const takeUntil = function(array, callback) {

  const newArray = [];

  for (const item of array) {
    if (callback(item)) {
      break;
    } else {
      newArray.push(item);
    }
  }
  return newArray;
};

module.exports = takeUntil;