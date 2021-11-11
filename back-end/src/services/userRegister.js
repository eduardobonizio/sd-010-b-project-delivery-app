const { User } = require('../database/models');

const addNewUser = async (name, email, password, role) => {
  try {
    const userAdded = await User.create({ name, email, password, role });
    return userAdded;
  } catch (errors) {
    return errors[0];
  }
};
module.exports = {
  addNewUser,
};
