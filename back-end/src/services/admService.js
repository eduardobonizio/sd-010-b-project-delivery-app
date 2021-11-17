const { user } = require('../database/models');

const { encode } = require('../middlewares/middlewares');

const findUserName = async (name) => {
  const nameExists = await user.findOne({ where: { name } });
  if (nameExists !== null) {
    return { err: {
      status: 409,
      message: 'User already registered',
    } };
  }
  return false;
};

const findEmail = async (email) => {
  const emailExists = await user.findOne({ where: { email } });
  if (emailExists !== null) {
    return { err: {
      status: 409,
      message: 'Email already registered',
    } };
  }
  return false;
};

const create = async ({ name, email, password: userPassword, role }) => {
  const emailExists = await findEmail(email);
  if (emailExists.err) return emailExists;

  const nameExists = await findUserName(name);
  if (nameExists.err) return nameExists;
  
  const password = encode(userPassword);
  const newUser = user.create({ name, email, password, role });

  return newUser;
  
  // const token = generateToken({ id, name, email, role });
  // return token;
};

module.exports = { create };
