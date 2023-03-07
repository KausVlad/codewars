// https://www.codewars.com/kata/61c78b57ee4be50035d28d42
// This kata requires you to write a function which merges two strings together. It does so by merging the end of the first string with the start of the second string together when they are an exact match.
'use strict';

//глекодsx яка не спрацювала нормально
function mergeStrings(x, y) {
  for (let i = y.length; i > 0; i--) {
    for (let j = 0; j < x.length; j++) {
      if (x.slice(j, j + i) === y.slice(0, i)) {
        return x.slice(0, j) + y + x.slice(j + i, x.length);
      }
    }
  }
  return x + y;
}
// console.log(mergeStrings('abaab', 'aabab'));

function mergeStrings1(str1, str2) {
  let overlap = '';
  for (let i = 1; i <= str1.length; i++) {
    let suffix = str1.slice(-i);
    let prefix = str2.slice(0, i);
    if (suffix === prefix) {
      overlap = suffix;
    }
  }
  return str1 + str2.slice(overlap.length);
}

console.log(mergeStrings1('abaab', 'aabab'));

function name(x, y) {
  let g = 3;
  return;
  // return x.slice(0, 2) + y + x.slice(2 + g, x.length);
}
// console.log(name('12888345', '88814'));
