const countLetters = function(letters) {
  const results = {};
  letters = letters.replace(/ /g, "");

  for (const letter of letters) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

module.exports = countLetters;
