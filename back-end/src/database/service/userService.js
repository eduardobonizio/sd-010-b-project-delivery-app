const { user } = require('../models');
const { Op } = require("sequelize");

const checkUserLogin = async (email, password) => {
    const check = await user.findOne({ where:  { email, password } });
    return check;
};

const checkUserExists = async (name, email) => {
  const check = await user.findOne({ where: { [Op.or]: [{ name }, { email }] } });
  return check;
};

const getUsers = async () => {
  const users = await user.findAll();
  return users;
};

const getUserById = async (id) => {
  const userId = await user.findByPk(id);
  return userId;
}

module.exports = { checkUserLogin, checkUserExists, getUsers, getUserById };
