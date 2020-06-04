const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  it('without(["1", "2", "3"], [1, 2, "3"]), returns ["1", "2"]', () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
  it('without(["1", "2", "3"], [1, 2, "3"]), returns ["1", "2"]', () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
});