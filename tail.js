const tail = function(arrayToTail) {
  let newArray = [];
  for (let i = 1; i < arrayToTail.length; i++) {
    newArray.push(arrayToTail[i]);
  } return newArray;
};

module.exports = tail;