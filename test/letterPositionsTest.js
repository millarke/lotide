const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it('("hello").e returns [1], e appears one time in the word hello', () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
  it('("hello").l returns [2], l appears two times in the word hello', () => {
    assert.deepEqual(letterPositions("hello").l, [2, 3]);
  });
});