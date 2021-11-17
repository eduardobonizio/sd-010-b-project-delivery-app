const userService = require('../services/userService');

const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await userService.register({ name, email, password });
    return res.status(201).json(newUser);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  register,
};
