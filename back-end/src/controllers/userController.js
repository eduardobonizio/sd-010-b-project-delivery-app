const userService = require('../services/userService');

const login = async (req, res) => {
  try {
    const token = await userService.login(req.body);
    if (token.err) {
      return res.status(token.err.status).json({ message: token.err.message });
    } 
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const create = async (req, res) => {
  try {
    const token = await userService.createUser(req.body);
    if (token.err) {
      return res.status(token.err.status).json({ message: token.err.message });
    }
    res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  create,
  login,
};