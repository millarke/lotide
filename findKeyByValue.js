const findKeyByValue = function(object, valueLookingFor) {
  for (const key in object) {
    if (object[key] === valueLookingFor) {
      return key;
    }
  }
};

module.exports = findKeyByValue;