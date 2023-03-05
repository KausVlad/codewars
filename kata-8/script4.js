// https://www.codewars.com/kata/57a0885cbb9944e24c00008e
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
'use strict';

const str = 'Hello! World!';
// const str = [2, 5, 6, 7, 5];

// function removeExclamationMarks(s) {
//   return s.replace('!', '');
// }
const removeExclamationMarks = (s) => {
  for (let index = 0; index < s.length; index++) {
    s = s.replace('!', '');
  }
  return s;
};

console.log(removeExclamationMarks(str));
