// // https://www.codewars.com/kata/53af2b8861023f1d88000832
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
'use strict';

function areYouPlayingBanjo(name) {
  const nameFirstLetterLowerCase = name[0].toLowerCase();
  return nameFirstLetterLowerCase === 'r'
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}

console.log(areYouPlayingBanjo('Adam'));
console.log(areYouPlayingBanjo('Ringo'));
