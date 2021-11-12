const userService = require('../services/userService');

const login = async (req, res) => {
  try {
    const user = await userService.login(req.body);
    if (user.err) {
      return res.status(user.err.status).json({ message: user.err.message });
    }
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const create = async (req, res) => {
  try {
    const token = await userService.create(req.body);
    if (token.err) {
      return res.status(token.err.status).json({ message: token.err.message });
    }
    res.status(201).json(token.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  create,
  login,
};