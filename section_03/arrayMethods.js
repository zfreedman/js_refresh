"use strict";
function refillArr() {
  arr = [];
  for (let i = 0; i < 5; ++i) {
    arr.push(i);
  }
}
// splice
// arr.splice(index[, deleteCount, e1, e2, ..., en])
// starting at index, it removes deleteCount elements
// and inserts e1, ..., en at their place.
// the deleted elements are returned
let arr = [];
console.log(arr);
refillArr();
console.log(arr);
// delete all elements at index 2 and beyond
arr.splice(2);
console.log(arr);
refillArr();
// delete only the element at index 2
arr.splice(2, 1);
console.log(arr);
refillArr();
// delete 2 contiguous elements, starting from index 1
arr.splice(1, 2);
console.log(arr);
refillArr();
// insert 4 elements between indices 3 and 4
// note how first argument is 4, and not 3 (thought it'd be 3)
arr.splice(4, 0, 3.25, 3.5, 3.75, 3.95);
console.log(arr);
refillArr();
// negative indices are allowed

// slice
// returns a new array on [start, end) (negative indices are allowed)
console.log(`=============slice================`);
console.log(arr.slice());
console.log(arr.slice() == arr);
console.log(arr.slice(-1));
console.log(arr.slice(1, -1));

// concat
// joins an array with other arrays or items
console.log(`============concat=============`);
let arr2 = [5, 6, 7];
let arr3 = [[8], []];
console.log(arr.concat(arr2, arr3, "fish"));

// searching
console.log(`********************searching*****************`);
console.log(`there's indexOf, includes, and find. go look it up.`);

// filter
let users = [
  {id: 1, name: "john"},
  {id: 2, name: "pete"},
  {id: 3, name: "mary"},
];
console.log(users.filter((item) => item.id < 3));

// map
console.log(`***********************map*************************`);
console.log(users.map((item) => {
  return `name: ${item.name}, id: ${item.id}`;
}));

// sorting
console.log(`\n****************sort******************\n`);
arr = [1, 5, 2, 4, 3, 0, 4, 12];
console.log(arr);
console.log(arr.sort());
// notice how 12 comes after 1 ... this is because items are sorted
// as strings by default
console.log(arr.sort((a, b) => b < a));

// reverse
console.log(`=============reverse=============`);
console.log(arr);
console.log(arr.reverse());

// split/join
console.log(`\n***********split/join********\n`);
let names = "abe, bill, charles, derrick, eric";
console.log(names.split(", "));
console.log(names.split(", ").join(" $ "));

// reduce
console.log("\n*****************reduce*************\n");
refillArr();
// calculate sum
console.log(arr.reduce((sum, item) => {
  return sum + item;
}, 0));

// forEach
console.log("\n         forEach         \n");
arr.forEach((item, index, arr) => {
  console.log(`${index}: ${item}`);
});

// figure out if an element is an array
console.log(Array.isArray([]));
console.log(Array.isArray({}));
