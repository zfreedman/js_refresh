"use strict";
//backtick strings are a thing now
//probably preferential to "" or ''
let backtickStr = `this
is
valid
${2 + 3}`;
console.log(backtickStr);

//positioning
let alphabet = `abcdefghijklmnopqrstuvwxyz`;
console.log(`first ${alphabet[0]}`);
console.log(`last ${alphabet[alphabet.length - 1]}`);

//searching for substrings
//this method returns first occurence's index
console.log(alphabet.indexOf(`cde`));
console.log(alphabet.indexOf(`xya`));
//this method returns true or false
console.log(alphabet.includes(`bcd`));

//getting substrings
//substring
console.log(alphabet.substring(2));
console.log(alphabet.substring(2, alphabet.length - 3));
//slice
console.log(alphabet.slice(0, 5));
console.log(alphabet.slice(1));
console.log(alphabet.slice(1, -1));
//substr
console.log(alphabet.substr(1, 10));
console.log(alphabet.substr(-5, 5));
