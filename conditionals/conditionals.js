"use strict";
let age = +prompt("how old are you?", 100);
//here's a conditional
if (age == 100) {
  alert("you're 100?!?!");
} else if (age < 100) {
  alert("you're so young.");
} else {
  alert("wow you're old");
}

//ternary operator
let allowAccess = (age >= 18) ? true : false;
//technically in this example, the ternary operator is unnecessary
allowAcces = age >= 18;
