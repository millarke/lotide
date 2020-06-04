const countOnly = require('../countOnly');
const assert = require('chai').assert;

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

describe("#countOnly", () => {
  it("Jason shows up once in test array", () => {
    assert.strictEqual(result1["Jason"], 1);
  });
  it('result1["Fang"], 2', () => {
    assert.strictEqual(result1["Fang"], 2);
  });
  it('value at karina should be undefined as karima didnt show up in test array', () => {
    assert.strictEqual(result1["Karima"], undefined);
  });
});