const MD5 = require('md5');
const { User } = require('../database/models');

const addNewUser = async (name, email, password, role) => {
  const encript = MD5(password);
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
