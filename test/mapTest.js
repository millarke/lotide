const assert = require('chai').assert;
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];

describe("#map", () => {
  it('grabbed the first letters of each array item, ["ground", "control", "to", "major", "tom"] returns ["g", "c", "t", "m", "t"]', () => {
    assert.deepEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
  });
  it('grabbed the first letters of each array item, ["ground", "control", "to", "major", "tom"] returns ["r", "o", "o", "a", "o"]', () => {
    assert.deepEqual(map(words, word => word[1]), ['r', 'o', 'o', 'a', 'o']);
  });
  it('["ground", "control", "to", "major", "tom"] returns ["ga", "ca", "ta", "ma", "ta"]', () => {
    assert.deepEqual(map(words, word => word[0] + 'a'), ['ga', 'ca', 'ta', 'ma', 'ta']);
  });
});