"use strict";
//switch statements
let a = 2 + 2;
switch (a) {
  case 3:
    console.log("too small");
    break;
  case 4:
    console.log("just right");
    break;
  case 5:
    console.log("too big");
    break;
  default:
    console.log("what are you doing");
}
//if a match is found, the execution will continue for each consecutive
//case until a break or the end of the switch is reached
switch (a) {
  case 3:
    console.log("too small");
    break;
  case 4:
    console.log("just right");
  case 5:
    console.log("too big");
  default:
    console.log("what are you doing");
}
//any expresion is a valid switch/case argument
a = "1";
let b = 0;
switch (+a) {
  case b + 1:
    console.log("this works because +a and b + 1 are both 1");
    break;
  default:
    console.log("no work");
}

//case grouping
//cases which should run the same codeblock can be grouped as such
a = 3;
switch (a) {
  case 4:
    console.log("4");
    break;
  case 3:
  case 5:
    console.log("3 or 5");
    break;
  default:
    console.log("something else");
}

//the comparisons made are strict equals (===)
