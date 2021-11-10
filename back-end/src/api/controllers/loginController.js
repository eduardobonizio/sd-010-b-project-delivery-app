const loginService = require('../services/loginService');
const { generateToken } = require('../utils/generateToken');

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await loginService.login({ email, password });
    const token = generateToken(user);
    return res.status(200).json({ token });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  login,
};
