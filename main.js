"use strict";

const arr = [1, 2, 3, 4];

//old way:
let sum = 0;
for (let i; i < arr.length; i++) {
  //   sum += arr[i];
  //   sum += arr[i] + arr[i + 1];
}
console.log(sum);
console.log([1, 5, 10, 22]);
const test = [1, 5, 10, 22].reduce((acc, currVal) => {
  //   console.log(acc, currVal, "acc currVal");
  return acc + currVal;
});

const test2 = [1, 5, 10, 22].reduce((acc, currVal) => {
  //   console.log(acc, currVal, "acc currVal");
  return acc + currVal;
}, 11);

// console.log(test2);
// let newArr = []
const test3 = [1, 5, 10, 22].reduce((acc, currVal) => {
  //   console.log(acc, currVal, "acc currVal");
  //   acc.push(currVal % 2 === 0);
  if (currVal % 2 === 0) acc.push(currVal);
  return acc;
}, []);

console.log(test3, "test3");
//[false,false,true,true]

const numbers = [1, 2, 1, 3, 4, 5, 3, 2, 1];

const uniqueNumbers = numbers.reduce(
  (acc, curr) => {
    if (!acc.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  },
  [] // it's our initial acc
  // we could choose initial array with values, for example: [-1,0]
);

console.log(uniqueNumbers); // [1, 2, 3, 4, 5]
