const { user } = require('../database/models/users');
const crypto = require('crypto');

// crypto.createHash('md5').update(data).digest("hex");

const attempLogin = async ({ email, password }) => {
  const encryptedPassword = crypto.createHash('md5');
  console.log(encryptedPassword);
  console.log('1c37466c159755ce1fa181bd247cb925');

  const loggedUser = await user.findOne({ where: { email, password } });
  // console.log(loggedUser);

  if (!loggedUser) return { message: 'Invalid fields' };
  
  return loggedUser;
};

module.exports = {
  attempLogin,
};