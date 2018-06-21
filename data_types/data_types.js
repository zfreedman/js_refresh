"use strict"
//number
let num = 33.4;

//string
let str1 = "hi1";
let str2 = 'hi2';
let str3 = `hi${num}`;
console.log(str3);

//boolean
let trueVal = true;
let falseVal = false;

//null (used to express nothing/emptiness)
let nothing = null;

//undefined...when a variable hasn't been assigned a value
let undefVal;
console.log(`undefVal: ${undefVal}`);

/*
objects and symbols are also data types, but they're note
primitive types. they'll be discussed later
*/

//typeof operator
console.log(typeof(2));

//typeof null returns object, but this is incorrect. however,
//at this point it's kept for compatibility
console.log(typeof(null));

//typeof alert will return function, and there isn't really a function
//type. however, typeof treats them differently, outputting "function"
//instead of object
