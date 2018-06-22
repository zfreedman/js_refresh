"use strict";
//2 conventions
//named with capital letter first
//executed only with "new"
function User(name) {
  this.name = name;
  this.isAdmin = false;
  this.sayHi = function() {
    console.log("my name is: " + this.name);
  };
};

let user = new User("jack");
console.log(user.name);
console.log(user.isAdmin)
user.sayHi();
