const { Op } = require('sequelize');
const md5 = require('md5');
const { User } = require('../database/models');

const createUser = async (name, email, passwordWithouCrypto, role = 'customer') => {
  const password = md5(passwordWithouCrypto);
  const newUser = await User.create({ name, email, password, role });
  return newUser.id;
};

const userExists = async (email, name) => {
  const alreadyExists = await User.findAll({
    where: {
      [Op.or]: {
        name,
        email,
      },
    },
  });
  return alreadyExists.length > 0;
};

module.exports = {
  createUser,
  userExists,
};
