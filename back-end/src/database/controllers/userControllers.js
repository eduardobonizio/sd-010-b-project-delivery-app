const { validateCreate } = require('../services/userServices');

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  await validateCreate({ name, email, password });
  return res.status(201).json();
};

module.exports = {
  createUser,
};