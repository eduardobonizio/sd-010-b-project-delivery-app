const httpStatus = require('http-status');

const { Product } = require('../database/models');

const getAll = async () => {
  const data = await Product.findAll();
  return ({ status: httpStatus.OK, data });
};

module.exports = { getAll };
