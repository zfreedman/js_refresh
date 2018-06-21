"use strict"
//converting to string
let val = 2;
console.log(typeof val);
val = String(val);
console.log(typeof val);

//numeric conversion
//it happens in mathematical functions/expressions /, *, and - automatically
//...but not +
console.log("6" * "2");
console.log(typeof ("6" * "2"));
//this automatic stuff doesn't happen for +, which is used for
//string concatenation
//can also be done manually
val = "123";
console.log(typeof val);
val = Number(val);
console.log(typeof val);
//NaN will be the result if the non-numeric can't be coerced
console.log(Number("abc 2"));

//boolean conversion
//stuff like 0, null, undefined, NaN go to false
//all others should go to true
console.log(Boolean(null));
console.log(Boolean("hey there"));
//"0" is true
console.log(Boolean("0"));
