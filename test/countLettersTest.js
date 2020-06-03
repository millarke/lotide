const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it("LHL is equal to {L: 2, H: 1}", () => {
    // const arr = ["Hello", "Lighthouse", "Labs"];
    assert.deepEqual(countLetters('LHL'), { L: 2, H: 1 });
  });
  it("'dog dog doggy dog dog' is { d: 5, o: 5, g: 6, y: 1 }", () => {
    // const arr = ["Hello", "Lighthouse", "Labs"];
    assert.deepEqual(countLetters('dog dog doggy dog dog'), { d: 5, o: 5, g: 6, y: 1 });
  });
});


// assertEqual(countLetters('LHL'), { L: 2, H: 1 });
// assertEqual(countLetters('LHL LHL LHL'), { L: 6, H: 3 });
// assertEqual(countLetters('dog dog doggy dog dog'), { d: 5, o: 5, g: 6, y: 1 });

// console.log(countLetters('LHL'));
// console.log(countLetters('LHL LHL LHL'));
// console.log(countLetters('dog dog doggy dog dog'));
// console.log(countLetters("lighthouse in the house"));