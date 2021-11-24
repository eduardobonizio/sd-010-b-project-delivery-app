const crypto = require('crypto');
const { user } = require('../models');
const { createToken } = require('../middleware/tokenGeneration');

const attemptLogin = async ({ email, password }) => {
  const encryptedPassword = crypto.createHash('md5').update(password).digest('hex');

  const loggedUser = await user.findOne({ where: { email, password: encryptedPassword } });
  console.log(loggedUser.dataValues);

  if (!loggedUser) return { message: 'Invalid fields' };
  const token = createToken(loggedUser);
  const userWithToken = { ...loggedUser.dataValues, token };
  return userWithToken;
  // loggedUser.token = createToken(loggedUser);
  // return loggedUser;
};

module.exports = {
  attemptLogin,
};