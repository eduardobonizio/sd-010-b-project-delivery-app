const { User } = require('../database/models');

const login = async ({ email, password }) => {
  const { dataValues } = await User
    .findOne({ where: { email, password }, attributes: { exclude: ['password'] } })
      .catch((e) => console.log(e));
  return dataValues;
};

module.exports = {
  login,
};