// https://www.codewars.com/kata/61c78b57ee4be50035d28d42
// This kata requires you to write a function which merges two strings together. It does so by merging the end of the first string with the start of the second string together when they are an exact match.
'use strict';

const x = 'abcdef';
const y = 'cdwqws';
console.log(x);
console.log(y);

//глекодsx яка не спрацювала нормально
function mergeStrings(x, y) {
  for (let i = y.length; i > 0; i--) {
    for (let j = 1; j < x.length; j++) {
      if (x.slice(j, j + i) === y.slice(0, i)) {
        return x + y.slice(i, y.length);
      }
    }
  }
  return x + y;
}
console.log(mergeStrings(x, y));

function mergeStrings1(str1, str2) {
  let overlap = '';
  for (let i = 1; i <= str1.length; i++) {
    if (str1.slice(-i) === str2.slice(0, i)) {
      overlap = str1.slice(-i);
    }
  }
  return str1 + str2.slice(overlap.length);
}

console.log(mergeStrings1(x, y));

function name(x, y) {
  let g = 3;
  return;
  // return x.slice(0, 2) + y + x.slice(2 + g, x.length);
}
// console.log(name('12888345', '88814'));
