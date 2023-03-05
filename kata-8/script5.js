// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
'use strict';

const countSheep = function (num) {
  let output = '';
  for (let index = 1; index <= num; index++) {
    output += `${index} sheep...`;
  }
  return output;
};

console.log(countSheep(4));
