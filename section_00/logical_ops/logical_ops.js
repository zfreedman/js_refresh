"use strict";
//or operator
console.log(true || false);
console.log(false || false);
//non-boolean operands are converted to boolean, but the
//original value of the operand is returned
console.log(1 || false);
console.log(0 || false);
console.log(2 || false);

//and operator
console.log("=====================");
console.log("       AND           ");
console.log(true && false);
console.log(true && true);
console.log(2 && 0);
//notice here how the last truthy value is returned
console.log(17 && 4);

//boolean not
console.log(!true);
console.log(!false);
console.log(!0);
console.log(!17);
console.log(!"hey");
