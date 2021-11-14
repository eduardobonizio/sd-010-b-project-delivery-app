const faker = require('faker');

const fakeUser = {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  role: 'user',
};

module.exports = {fakeUser};

// https://www.npmjs.com/package/faker
// https://www.npmjs.com/package/factory-girl