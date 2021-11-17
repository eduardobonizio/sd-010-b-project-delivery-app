const httpStatus = require('http-status');

const { User } = require('../database/models');

const getAllSellers = async () => {
  const data = await User.findAll({ where: { role: 'seller' } });
  return ({ status: httpStatus.OK, data });
};

module.exports = { getAllSellers };