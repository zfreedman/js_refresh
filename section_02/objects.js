"use strict";
//objects
let user = new Object();//object consturctor syntax
user = {};//object literal syntax

//immediately fill with properties
user = {
  name: "user5",
  age: 10,
};
console.log(user);

//accessing properties
console.log("username: " + user.name);
console.log("username[]: " + user["name"]);

//deleting properties
delete user.age;
console.log(user);

//computed properties
let fruit = "apple";
let bag = {
  [fruit]: 5,
};
console.log("my bag: ");
console.log(bag);

//using variable names for object values
/**
@example
//returns {name: "harry", age: 12,}
makeUserObj("harry", 12)
@param {string} name
@param {number} age
@return {object} an object with the specified KVPs
*/
function makeUserObj(name, age) {
  return {
    name,
    age,
  };
}
console.log(makeUserObj("harry", 12));

//accessing properties that don't exist return undefined
console.log("this should output undefined:");
console.log(user.dog);

//you can use in to check if an object has a key
console.log("abc" in {"abc": 2});
console.log("abc" in {"abd": 2});

//iterate over keys in an object
let tmpObj = {
  a: 0,
  b: 1,
  c: 2,
};
for (let key in tmpObj) {
  console.log(`${key}: ${tmpObj[key]}`);
}

//when iterating, integers keys are sorted in ASC order
//...then keys are shown in creation order

//objects are stored/copied by reference

//== and === are identical for objects

//const objects can be changed, just not reassigned
const cObj = {
  someKey: 2,
};
//ok
cObj.someKey = 3;
//not ok
//cObj = {};

//cloning objects
//just iterate over the keys and assign the same values
//...can also be done using Object.assign(dest, src1, src2, ...)
let dest = {};
let src1 = {1: 2};
let src2 = {3: 4};
Object.assign(dest, src1, src2);
console.log(dest);
