'use strict';

const square = n => n * n;

const cube = n => n ** 3;

const average = (a, b) => (a + b) / 2;

const calculate = () => {
  const arr = [];
  for (let i = 0; i <= 9; i++) arr.push(average(square(i), cube(i)));
  return arr;
};

module.exports = { square, cube, average, calculate };
