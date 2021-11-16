const { expect } = require('chai');

const {
  sequelize,
  dataTypes,
  checkModelName,
  checkUniqueIndex,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const UserModel = require('../../../models/user');

describe('src/models/user', () => {
  const User = UserModel(sequelize, dataTypes);

  const user = new User();

  checkModelName(User)('user');

  describe('check properties', () => {
    ['name', 'email', 'password', 'role'].forEach(checkPropertyExists(user));
  });
});