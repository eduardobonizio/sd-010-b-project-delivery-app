const userService = require('../Services/loginService');

const loginUser = async (req, res) => {
  const { body } = req;
    const login = await userService.loginUser(body);
    if (login.message) {
      return res.status(404).json(login.message);
    }
    
    return res.status(200).json({ token: login });
  }

module.exports = {
  loginUser,
};
