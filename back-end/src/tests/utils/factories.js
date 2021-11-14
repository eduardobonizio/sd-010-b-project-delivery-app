const faker = require('faker');
const { factory } = require('factory-girl');
const { User } = require('../../database/models');

factory.define('User', User, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  role: 'user',
});

module.exports = factory;

// https://www.npmjs.com/package/faker
// https://www.npmjs.com/package/factory-girl