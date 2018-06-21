"use strict";
// < > can be used to figure out which string comes first alphabetically
console.log("b" < "a");
console.log("b" < "A");
console.log("b" < "c");
console.log("bb" < "b");
console.log("a" < "A");
console.log("A" < "a");

//comparing different types coerces the values to numerics
console.log("---------------");
console.log("DIFFERENT TYPES");
console.log("2" > 1);
console.log("2" < 1);
console.log("2" == 2);

//the strict eqaulity operator checks for equality without type conversion
console.log(0 == false);
console.log(0 === false);

//null and undefined equal each other for ==, but not for ===
//additionally...they do not == anything else other than each other
console.log("--------------");
console.log("NULL AND UNDEF");
console.log(null == undefined);
console.log(null === undefined);
console.log(null == false);
console.log(undefined == false);
//however, comparisons convert to numerics, so the below happens
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
//just want to see what happens here
console.log(+undefined);//NaN
