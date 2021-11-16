const registerService = require('../Services/registerService');

const registerUser = async (req, res) => {
  const { body } = req;

  const register = await registerService.registerUser(body);
  if (!register) {
    return res.status(400).json('Invalid data or user already registered');
  }

  return res.status(200).json(register);
};

module.exports = {
  registerUser,
};