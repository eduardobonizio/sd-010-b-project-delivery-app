const registerService = require('../Services/registerService');

const registerUser = async (req, res) => {
  const { body } = req;

  const check = await registerService.checkUser(body);

  if (check) {
    return res.status(409).json('User already registered');
  }

  const register = await registerService.registerUser(body);

  if (!register) {
    return res.status(400).json('Invalid data');
  }

  return res.status(201).json(register);
};

module.exports = {
  registerUser,
};