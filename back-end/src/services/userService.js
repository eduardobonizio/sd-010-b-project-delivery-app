const { user } = require('../database/models');

const { generateToken, encode } = require('../middlewares/middlewares');

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

const login = async ({email, password}) => {
  const encodePassword = encode(password);
  
  const userExistes = await user.findOne({ where: { email, encodePassword } });
   if (userExistes === null) {
    return { err: {
      status: 404,
      message: 'User Not Found',
    } };
  }
  const token = generateToken(userExistes);
  return token;
};

const create = async ({ name, email, password: userPassword }) => {
  const emailExists = await findEmail(email);
  if (emailExists.err) return emailExists;

  const nameExists = await findUserName(name);
  if (nameExists.err) return nameExists;
  
  const password = encode(userPassword);
  const role = 'customer';
  const { id } = await user.create({ name, email, password, role });
  
  const token = generateToken({ id, name, email, role });
  return token;
};

module.exports = {
  findUserName,
  login,
  findEmail,
  create,
};
