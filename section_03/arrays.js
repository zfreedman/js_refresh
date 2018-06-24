"use strict";
let arr = [];
console.log(arr.length);
arr[1] = `cat`;
console.log(arr);

// queue methods
arr = [];
// push
for (let i = 0; i < 5; ++i) {
  arr.push(i);
}
console.log(arr);
// shit
for (let i = 0; i < 5; ++i) {
  console.log(`shifted element: ${arr.shift()} | arr: ${arr}`);
}

// stack methods
// already saw push...
for (let i = 0; i < 5; ++i) {
  console.log(`pushed element: ${arr.push(i)} | arr: ${arr}`);
}
// pop
for (let i = 0; i < 5; ++i) {
  console.log(`popped element: ${arr.pop()} | arr: ${arr}`);
}

// adding to the beginning of an array
// note that unshift/push can be called with multiple elements
for (let i = 0; i < 5; ++i) {
  console.log(`unshifted element: ${arr.unshift(i)} | arr: ${arr}`);
}

// use for...of instead of for...in for arrays
console.log(`======for...of========`);
for (let val of arr) {
  console.log(val);
}

// safe way to clear an array
arr.length = 0;
// this method should work to clear the array, even if other objects
// are storing a reference. if multiple objects are storing a reference
// to what's stored in arr, then the remaining references should remain if
// we just did arr = []
