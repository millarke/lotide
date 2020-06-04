// const eqObjects = function(object1, object2) {

//   if (Object.keys(object1).length !== Object.keys(object2).length) {
//     return false;
//   }

//   for (const key in object1) {
//     if (Array.isArray(object1[key]) === true || Array.isArray(object2[key]) === true) {
//       if (eqObjects(object1[key], object2[key]) !== true) {
//         return false;
//       }
//     } else if (object1[key] !== object2[key]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertObjectsEqual = function(firstObject, secondObject) {
//   const inspect = require('util').inspect;
//   // console.log(`Example label: ${inspect(firstObject)}`);
 
//   const eqObjectsResult = eqObjects(firstObject, secondObject);
//   if (eqObjectsResult === true) {
//     console.log(`✅✅✅ Objects are equal! ${inspect(firstObject)} === ${inspect(secondObject)}`);
//   } else {
//     console.log(`🛑🛑🛑 Objects are not equal! Expected value is ${inspect(secondObject)}, and the result is ${inspect(firstObject)}`);
//   }
// };

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// // assertObjectsEqual(eqObjects(ab, ba), true); // => true
// assertObjectsEqual((ab, ba), (ab, ba));

// const gh = { a: "1", b: "4" };
// const hg = { b: "2", a: "1" };
// assertObjectsEqual((gh, hg), (gh, hg));

// const ah = { a: "1", b: "4" };
// const ij = { b: "2", a: "1" };
// assertObjectsEqual((ah, ij), (ah, ah)); // => true

// const ah = { a: "1", b: "4", c: "9"};
// const ij = { b: "2", a: "1" };
// assertObjectsEqual((ah, ij), (ah, ah)); // => true

// const qw = { q: "q", w: "w" };
// const wq = { w: "w", q: "qq" };
// assertObjectsEqual((qw, wq), (qw, wq)); // => true

// const qw = { q: "q", w: "w" };
// const wq = { w: "w", q: "qq" };
// assertObjectsEqual((qw, wq), (wq, qw)); // => true