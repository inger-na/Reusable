'use strict';

const rangeOdd = (start, end) => {
  const arr = [];
  for (let i = start; i <= end; i++) {
    (i % 2) === 0 ? 'undefined ' : arr.push(i);
  }
  return arr;
};

module.exports = { rangeOdd };
