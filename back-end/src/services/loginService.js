const verifyLogin = require("./utils/userVerify");

const loginService = async ({ email, password }) => {
  const checkLogin = verifyLogin(email, password);
  if (checkLogin.error)
    return { message: checkLogin.error.message, status: 400 };
  const getToken = await User.findOne({ where: { email } });
  if (!getToken) return { status: 404, message: "User not found" };
  const { role, id } = getToken;
  const token = createJWT({ id, role });
  return { status: 200, message: token };
};

module.exports = { loginService };
