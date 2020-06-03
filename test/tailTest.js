const assert = require('chai').assert;
const tail = require('../tail');
// const tail = require('../index').tail;
// const library = required('./index');

describe("#tail", () => {
  it("ensures we get back the correct number of elements", () => {
    const arr = ["Hello", "Lighthouse", "Labs"];
    assert.strictEqual(tail(arr).length, arr.length - 1);
  });
  it("ensures we get back two elements", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
  });
  it("ensures we get back Lighthouse and Labs as the last two elements of the array", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("returns Labs as it should be the value of index one of the new array", () => {
    const arr = ["Hello", "Lighthouse", "Labs"];
    assert.strictEqual(tail(arr)[1], "Labs");
  });
  it("An array of one element should be left empty", () => {
    const arr = ["hello"];
    assert.deepEqual(tail(arr), []);
  });
  it("An empty array should yield an empty array for its tail", () => {
    const arr = [];
    assert.deepEqual(tail(arr), []);
  });
});

// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!