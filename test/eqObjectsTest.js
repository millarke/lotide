const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it('returns true, the two objects, { a: "1", b: "2" }, and { b: "2", a: "1" }, are equal', () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.deepEqual(eqObjects(ab, ba), true);
  });
  it('returns true, the two objects, { c: "1", d: ["2", 3] }, and { d: ["2", 3], c: "1" }, are equal', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.deepEqual(eqObjects(cd, dc), true);
  });
  it('returns true, the two objects, { c: "1", d: ["2", 3] }, and { d: ["2", 3], c: "1" }, are equal', () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.deepEqual(eqObjects(cd, cd2), false);
  });
});