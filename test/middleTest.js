const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [] for [1] because no middle", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns [] for [1, 2] because no middle", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns [2] for [1, 2, 3] because odd number array length", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [3] for [1, 2, 3, 4, 5] because odd number array length", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("returns [2, 3] for [1, 2, 3, 4] because array length even, middle is shared", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});