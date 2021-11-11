const { User } = require('../database/models');

const { generateToken, encode } = require('../middlewares/middlewares');

const findUserName = async (name) => {
  const nameExists = await User.findOne({ where: { name } });
  if (nameExists !== null) {
    return { err: {
      status: 409,
      message: 'User already registered',
    } };
  }
  return false;
};

const findEmail = async (email) => {
  const emailExists = await User.findOne({ where: { email } });
  if (emailExists !== null) {
    return { err: {
      status: 409,
      message: 'User already registered',
    } };
  }
  return false;
};

const login = async (email, password) => {
  const encodePassword = encode(password);

  const userExistes = await User.findOne({ where: { email, encodePassword } });
   if (userExistes === null) {
    return { err: {
      status: 404,
      message: 'User Not Found',
    } };
  }
  const token = generateToken(userExistes);
  return token;
};

const create = async ({ name, email, password }) => {
  const emailExists = await findEmail(email);
  if (emailExists.err) return emailExists;

  const nameExists = await findUserName(name);
  if (nameExists.err) return nameExists;
  
  const encodePassword = encode(password);
  const role = 'customer';
  const user = await User.create({ name, email, encodePassword, role });

  const token = generateToken(user);
  return token;
};

module.exports = {
  findUserName,
  login,
  findEmail,
  create,
};
