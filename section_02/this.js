"use strict";
//object methods
let user = {
  name: "john",
  age: 30,
};
user.sayHi = function() {
  console.log("hello!");
};
user.sayHi();

//when declaring a method in an object literal, the "function"
//keyword can be omitted
user = {
  sayHi() {
    console.log("hey");
  },
};
user.sayHi();

//using "this" allows the object to reference itself
user = {
  name: "john",
  age: 30,
  sayHi() {
    console.log("sup. i'm " + this.name);
  },
};
user.sayHi();

//this isn't bound by default
//the same functions may reference different this values
user = {name: "john"};
let admin = {name: "admin"};
function sayHi() {
  console.log(this.name);
}
user.f = sayHi;
admin.f = sayHi;
user.f();
admin.f();

//fat arrows have no this binding
user = {
  name: "ilya",
  sayHi() {
    let arrow = () => console.log(this.name);
    arrow();
  },
};
user.sayHi();
