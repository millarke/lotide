const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (true !== source.includes(itemsToRemove[i])) {
      newArray.push(source[i]);
    }
  }
  return newArray;
};

module.exports = without;