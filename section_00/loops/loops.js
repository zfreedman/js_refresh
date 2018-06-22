"use strict";
//while loop
let count = 0;
let countMax = 3;
while (count < countMax) {
  console.log(`count: ${count}`);
  count += 1;
}
console.log(`finished. count: ${count}`);
//the above can be abbreviated and obtain the same number of loops,
//but the output will be different
count = 0;
while (count++ < countMax)
  console.log(`count: ${count}`);
console.log(`finished. count: ${count}`);

//do while
//the do while loop can be used in place of the while loop when
//the body structure needs to be excuted AT LEAST once
console.log("=====================");
console.log("     DO while        ");
count = 0;
do {
  console.log(`count: ${count}`);
  count++;
} while (count < countMax);

//for loop
console.log("=======================");
console.log("       FOR LOOP        ")
for (let i = 0; i < countMax; ++i)
  console.log(i);

//breaking
count = 0;
while (count < countMax * 10) {
  console.log(count++);
  if (count > countMax * 9) {
    break;
  }
}

//continue (skip to next iteration)
for (let i = 0; i < 10; ++i) {
  if (i % 2 == 0) continue;
  console.log(`${i} is odd`);
}

//labels for break/continue
//breaking out of nested loops to a specific spot
label_outer: for (let i = 0; i < 5; ++i) {
  for (let j = 0; j < 5; ++j) {
    if (i * j == 12) break label_outer;
    console.log(`didn't break yet: ${i}*${j} = ${i * j}`);
  }
}
