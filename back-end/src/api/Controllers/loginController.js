const userService = require('../Services/loginService');

const loginUser = async (req, res) => {
  const { body } = req;
  try {
    const login = await userService.loginUser(body);
    if (login.message) {
      return res.status(404).json(login.message);
    }
    return res.status(200).json({ token: login });
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  loginUser,
};
