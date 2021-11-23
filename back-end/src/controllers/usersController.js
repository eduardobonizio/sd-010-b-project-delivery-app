const jwt = require('jsonwebtoken');
const { Sale, User } = require('../database/models');

const getSeller = async (_req, res) => {
  const response = await User.findAll({ where: { role: 'seller' }, attributes: ['name', 'id'] });
  return res.status(200).json(response);
};

const getOrders = async (req, res) => {
  const token = req.headers.authorization;
  const { email } = jwt.decode(token);
  const { id } = await User.findOne({ where: { email } });
  const result = await Sale.findAll({ where: { userId: id } });
  res.status(200).json(result);
};

const getUsers = async (_req, res) => {
  const resultDB = await User.findAll({ attributes: ['name', 'email', 'role'] });
  const results = resultDB.filter((users) => users.role !== 'administrator');
  res.status(200).json(results);
};

const deleteUsers = async (req, res) => {
  const { email } = req.body;
  await User.destroy({ where: { email } });
  res.status(204).send();
};

module.exports = { getSeller, getOrders, getUsers, deleteUsers };