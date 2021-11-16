const md5 = require('md5');
const { User } = require('../../database/models');
const { validUser } = require('../../middlewares/userValidations');
const { jwtLogin } = require('../../middlewares/auth/tokenJWT');

const messageError = (status, message) => ({
  status,
  message,
});

const findAll = async () => {
  const findAllUsers = await User.scope('withoutPassword').findAll();

  return findAllUsers;
};

const findById = async (id) => {
  const findIdUser = await User.findByPk(id);

  if (!findIdUser) throw messageError(404, '404 - non-existent user');

  return findIdUser;
};

const addUser = async (bodyCategory) => {
  const { error } = validUser.validate(bodyCategory);
  if (error) throw messageError(409, '409 - Conflict');
  const { name, email, password, role } = bodyCategory;

  const passwordHash = md5(password);

  const payload = { email };
  const token = jwtLogin(payload);

  await User.create({ name, email, password: passwordHash, role });

  return { token };
};

module.exports = {
  findAll,
  findById,
  addUser,
};

// Agradecimentos a >> https://stackoverflow.com/questions/27972271/sequelize-dont-return-password