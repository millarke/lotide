const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  //variable that holds a new empty object that we can push things to 
  const results = {};

  for (const name of allItems) {
    console.log("name:", name)
    for (const person in itemsToCount) {
      if (name === person && itemsToCount[person] === true) {
        if (results[person] !== undefined) {
          results[person] += 1
        } else {
          results[person] = 1
        }
        // console.log(results)
      }
    }
  }
  return results
}

//TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
console.log(result1)

assertEqual(result1["Jason"], 1);

assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], undefined);
assertEqual(result1["Fang"], 2);