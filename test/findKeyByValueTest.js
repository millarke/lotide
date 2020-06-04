const assert = require('chai').assert;
const findKeyByValue   = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  it("with input key value \"the wire\" successfully returns key \"drama\"", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("with input key value \"70's show\" successfully returns \"undefined\" as it does exist in the object as a value", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};