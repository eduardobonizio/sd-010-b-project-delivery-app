/*
  Material consultado sobre teste unitário para models gerados pelo sequelize
  https://medium.com/craft-academy/unit-testing-express-api-c55cb709b3ac
*/
const { before } = require('mocha');
const chai = require('chai');

const { expect } = chai;
/*
  Material consultado sobre sinon-chai
  https://www.npmjs.com/package/sinon-chai
*/
chai.use(require('sinon-chai'));

const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const UserModel = require('../../../models/user');
const SaleModel = require('../../../models/sale');

describe('src/models/user', () => {
  const User = UserModel(sequelize, dataTypes);

  const user = new User();

  checkModelName(User)('user');

  describe('check properties', () => {
    ['name', 'email', 'password', 'role'].forEach(checkPropertyExists(user));
  });

  describe('check associations', () => {
    before(() => {
      User.hasMany(SaleModel, { foreignKey: 'user_id', as: 'orders' });
      User.hasMany(SaleModel, { foreignKey: 'seller_id', as: 'sales' });
    });

    it('defined hasMany associations with Sale', () => {
      expect(User.hasMany).to.have.been.calledWith(SaleModel, {
        foreignKey: 'user_id', as: 'orders' });
      expect(User.hasMany).to.have.been.calledWith(SaleModel, {
        foreignKey: 'seller_id', as: 'sales' });
    });
  });
});