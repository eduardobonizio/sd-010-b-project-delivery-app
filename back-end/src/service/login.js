const { Op } = require('sequelize');
const md5 = require('md5');
const { User } = require('../database/models');

const logged = async (email, passwordWithouCrypto) => {
  const password = md5(passwordWithouCrypto);
  const user = await User.findAll({
    where: {
      [Op.and]: {
        email,
        password,
      },
    },
  });
  return user.length > 0 ? user[0] : false;
};

module.exports = { logged };
