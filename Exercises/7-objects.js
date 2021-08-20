'use strict';

const fn = () => {
  const obj1 = { name: null };
  let obj2 = { name: null };
  obj1.name = 'Valera';
  obj2.name = 'Vadim';
  obj2 = { mame: 'opa' };
  return obj2;
};

module.exports = { fn };
