const SHA256 = require('crypto-js/sha256');
const { User } = require('../database/models');

const addNewUser = async (name, email, password, role) => {
const encript = SHA256(password).words.join('');
console.log(encript);

  try {
    const userAdded = await User.create({ name, email, password: encript, role });
    return userAdded;
  } catch (errors) {
    return errors[0];
  }
};
module.exports = {
  addNewUser,
};
