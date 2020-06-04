const assert = require('chai').assert;
const findKey   = require('../findKey');

const testObj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

describe("#findKey", () => {
  it("the first key to come back is noma, first key recieved is noma", () => {
    assert.strictEqual(findKey(testObj, x => x.stars === 2), "noma");
  });
  it("the first key to come back is noma, first key recieved is noma", () => {
    assert.strictEqual(findKey(testObj, x => x.stars === 3), "Akaleri");
  });
});