const { createJWT } = require('../auth/JWToken');
const { User } = require('../database/models');
const { checkLogin } = require('../utils/validateUser');

const loginService = async ({ email, password }) => {
  checkLogin(email, password);
  
  const getToken = await User.findOne({ where: { email } });

  
  if (!getToken) return { status: 404, message: "User not found" };
  const { role, id } = getToken;
  console.log(getToken, role, id);
  const token = createJWT({ id, role });
  console.log(token,'<--------------');
  return { status: 200, message: token };
};

module.exports = { loginService };
