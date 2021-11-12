const md5 = require('md5');
const { User } = require('../database/models');
const { Op } = require("sequelize");

const createUser = async (name, email, passwordWithouCrypto) => {
  const password = md5(passwordWithouCrypto);
  const newUser = await User.create({ name, email, password });
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
  return alreadyExists.length > 0 ? true : false;
};

module.exports = {
  createUser,
  userExists,
}
