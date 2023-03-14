//https://www.codewars.com/kata/6397b0d461067e0030d1315e
'use strict';

function toIndustrial(time) {
  if (typeof time === 'number') {
    return +(time / 60).toFixed(2);
  } else {
    return +(+time.split(':')[0] + +time.split(':')[1] / 60).toFixed(2);
  }
}

console.log(toIndustrial('2:45'));

function toIndustrial2(time) {
  return (+time.split(':')[0] + +time.split(':')[1] / 60).toFixed(2);
  const tempTime = time.split(':');
  const hours = tempTime[0];
  const minutes = tempTime[1];
  return (+hours + +minutes / 60).toFixed(2);
}

console.log('33:22'.split(':'));

function toNormal(time) {
  return `${Math.floor(time)}:${(Math.round((time % 1) * 60) + 100)
    .toString()
    .slice(1)}`;
}
console.log(toNormal(32.99));

console.log(Math.round((1.05 % 1) * 60));
console.log((1.33 % 1) * 60);
console.log(3.45451 % 1);
