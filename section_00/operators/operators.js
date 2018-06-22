"use strict";

//numeric conversion
//non-numerics can be converted to numerics using the + unary operator
//...this is actually the same functionality as Number(), but shorter
console.log(+true);
//however, this operator does nothing to numeric types
console.log(+-1);
//this can be used to easily sum string variables which represent
//numerics
let apples = "2";
let oranges = "3";
console.log(apples + oranges);
console.log(+apples + +oranges);

//the assignment operator returns the assigned value
let assigned = 23;
console.log(assigned);
console.log(assigned = 24);
console.log(assigned);

//exponents
console.log(`exponent 2^6: ${2**6}`);

//comma operator
//this operator is used to execute multiple statements, but only
//the last value is returned
let commaVal;
console.log(commaVal = (1 + 2, 3 + 4));
console.log(commaVal);
//however, the comma operator has very low precedence (lower than =),
//so when used in assignment without the parentheses, the above
//statement will assign commaVal a value of 3
console.log(commaVal = 1 + 2, 3 + 4);
console.log(commaVal);
