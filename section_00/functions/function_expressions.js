"use strict";
//function expression
let sayHi = function() {
  console.log("hi");
};
sayHi();

//showing a function's code
console.log(String(sayHi));
//note that for some reason, sayHi doesn't get coerced here
console.log(sayHi);

//callback functions
//these can be used as arguments to pass to other functions
function printSomething(something) {
  console.log(something);
}
function doSomething(callback, arg1) {
  callback(arg1);
}
doSomething(printSomething, "hey there");

//function expressions are only usable when execution reaches the
//assignment

//function declarations are available at any point in the script

//fat arrow functions
let sum = (a, b) => a + b;
console.log("fat arrow sum => " + sum(17, 14));
//1 argument fat arrows don't require the parentheses
let add2 = n => n + 2;
console.log("add2 => " + add2(100));
//0 arguments should use empty parens
let get2 = () => 2;
console.log("get2 => " + get2());
//multiline fat arrows are fine too
let multineFatArrow = (arg0, arg1) => {
  console.log("sup kid");
  console.log("here's your sum");
  console.log(sum(arg0, arg1));
};
multineFatArrow(15, 117);
