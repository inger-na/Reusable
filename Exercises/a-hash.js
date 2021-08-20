'use strict';

const phonebook = {
  Marcus: '+38265987',
  Jora: '+3587415',
};

const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
