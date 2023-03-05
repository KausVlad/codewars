'use strict';

// https://www.codewars.com/kata/577a98a6ae28071780000989/javascript
// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

const xArray = [4, 6, 2, 1, 9, 63, -134, 566];

function min(array) {
  let min = array[0];
  for (const iterator of array) {
    if (iterator < min) {
      min = iterator;
    }
  }
  return min;
}
function max(array) {
  let max = array[0];
  for (const iterator of array) {
    if (iterator > max) {
      max = iterator;
    }
  }
  return max;
}
console.log(min(xArray), max(xArray));
