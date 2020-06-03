const assert = require('chai').assert;
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];


describe("#map", () => {
  it("", () => {
    assert.deepEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
  });
  it("", () => {
    assert.deepEqual(map(words, word => word[1]), ['r', 'o', 'o', 'a', 'o']);
  });
  it("", () => {
    assert.deepEqual(map(words, word => word[0] + 'a'), ['ga', 'ca', 'ta', 'ma', 'ta']);
  });

});




// assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
// assertArraysEqual(map(words, word => word[1]), ['r', 'o', 'o', 'a', 'o']);
// assertArraysEqual(map(words, word => word[0] + 'a'), ['ga', 'ca', 'ta', 'ma', 'ta']);