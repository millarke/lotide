// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  //variable that holds a new empty object that we can push things to
  const results = {};

  for (const name of allItems) {
    // console.log("name:", name);
    for (const person in itemsToCount) {
      if (name === person && itemsToCount[person] === true) {
        if (results[person] !== undefined) {
          results[person] += 1;
        } else {
          results[person] = 1;
        }
      }
    }
  }
  return results;
};

module.exports = countOnly;