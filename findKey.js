const findKey = function(object, valueLookingFor) {
  for (const key in object) {
    if (valueLookingFor(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;