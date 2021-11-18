const httpStatus = require('http-status');

const { User } = require('../database/models');

const getAllSellers = async () => {
  const data = await User.findAll({ 
    where: { role: 'seller' },
    attributes: { exclude: ['password'] }, 
  });
  return ({ status: httpStatus.OK, data });
};

const getAllUsers = async () => {
  const data = await User.findAll({ attributes: { exclude: ['password'] } });
  return ({ status: httpStatus.OK, data });
};

const deleteUser = async ({ id }) => {
  const data = await User.destroy({ where: { id } });
  return ({ status: httpStatus.OK, data });
};

module.exports = { getAllSellers, getAllUsers, deleteUser };
