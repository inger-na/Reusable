'use strict';

const range = (start, end) => {
  const len = end - start;
  if (len < 0) return [];
  const arr = new Array(len);
  let n = 0;
  for (let i = start; i <= end; i++) {
    arr[n++] = i;
  }
  return arr;
};

module.exports = { range };
