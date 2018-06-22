"use strict";
function showMessage(argString) {
  console.log("here's your message: " + argString);
}
showMessage("sup");

//functions get copies of variables, not references
let someArg = "fish";
function checkCopy(arg1) {
  arg1 = "pony";
  console.log(arg1);
}
checkCopy(someArg);
console.log(someArg);

//if values are not provided for arguments, their values are undefined
function checkUndefined(arg1) {
  console.log(arg1);
  console.log(typeof arg1);
}
checkUndefined();

//function arguments can have default values
function sumFunc(a = 2, b = 3) {
  return a + b;
}
console.log(sumFunc());
console.log(sumFunc(5, 6));

//functions with empty returns or without a return statement
//return undefined
function noReturn() {
}
function emptyReturn() {
  return;
}
console.log("Empty return is no return: " + (noReturn() === emptyReturn()))
