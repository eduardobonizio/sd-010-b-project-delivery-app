const { User } = require('../database/models');
const { checkLogin } = require('../utils/validateUser');

const loginService = async ({ email, password }) => {
  
  checkLogin(email, password);
  
  const getToken = await User.findOne({ where: { email } });

  if (!getToken) return { status: 404, message: "User not found" };
  const { role, id } = getToken;
  const token = createJWT({ id, role });

  return { status: 200, message: token };
};

module.exports = { loginService };
