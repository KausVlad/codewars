// https://www.codewars.com/kata/580751a40b5a777a200000a1
// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

'use strict';

// rev1
function vowelOne(s) {
  let tempArray = [];
  for (const iterator of s.toLowerCase()) {
    'aeiou'.includes(iterator) ? tempArray.push(1) : tempArray.push(0);
  }
  return tempArray.join('');
}

console.log(vowelOne('AidAswt5ooiwa'));
// rev2
function vowelOne1(s) {
  let result = '';
  for (const iterator of s.toLowerCase()) {
    'aeiou'.includes(iterator) ? (result += '1') : (result += '0');
  }
  return result;
}

console.log(vowelOne1('AidAswt5ooiwa'));
