"use strict";
//symbols are unique identifiers
let id = Symbol();
//can also provide a description
id = Symbol("id");

//guaranteed uniqueness, even if they have the same description
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 == id2);

//do not have implicit string conversion
console.log(id);//this works, but alert(id) supposedly doesn't
//should require doing
console.log(id.toString());

//symbols allow us to create hidden object properties
let user = {name: "John"};
id = Symbol("id");
user[id] = "ID Value";
console.log(user);
console.log(user[id]);

//in order to declare a symbol in an object literal, [] is required
user = {
  name: "John",
  [id]: 123,
};
console.log(user);

//symbols are skipped in for...in loops
for (let k in user) {
  console.log(`${k}: ${user[k]}`);
}

//however, object.assign copies both both string and symbol propertires
let clone = Object.assign({}, user);
console.log("clone:");
console.log(clone);

//global symbol registry
//allows same-named symbols to share a single value
id = Symbol.for("id");//if symbol doesn't exist, create it
//read it
let idAgain = Symbol.for("id");
console.log(id == idAgain);

//symbol.keyFor
let sym1 = Symbol.for("name");
let sym2 = Symbol.for("id");

//get name from symbol
console.log(Symbol.keyFor(sym1));
console.log(Symbol.keyFor(sym2));
