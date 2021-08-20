'use strict';

const phonebook = [
  { name: 'Marcus', phone: '+38695427' },
  { name: 'Jora',  phone: '+35824175' },
];

const findPhoneByName = name => {
  for (const human of phonebook) return human.name === name;
};

module.exports = { phonebook, findPhoneByName };
