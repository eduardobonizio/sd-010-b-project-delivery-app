const crypto = require('crypto');
const { user } = require('../models');

const attemptLogin = async ({ email, password }) => {
  const encryptedPassword = crypto.createHash('md5').update(password).digest('hex');

  const loggedUser = await user.findOne({ where: { email, password: encryptedPassword } });

  if (!loggedUser) return { message: 'Invalid fields' };

  return loggedUser;
};

module.exports = {
  attemptLogin,
};