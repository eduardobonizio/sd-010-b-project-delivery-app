const jwt = require('jsonwebtoken');
const { Sale, User } = require('../database/models');

const getSeller = async (_req, res) => {
  const response = await User.findAll({ where: { role: 'seller' }, attributes: ['name', 'id'] });
  return res.status(200).json(response);
};

const getOrders = async (req, res) => {
  const token = req.headers.authorization;
  const { email, role } = jwt.decode(token);
  const { id } = await User.findOne({ where: { email } });

  if (role === 'customer') {
    const result = await Sale.findAll({ where: { userId: id } });
    return res.status(200).json(result);
  }

  const result = await Sale.findAll({ where: { sellerId: id } });
  return res.status(200).json(result);
};

const getUsers = async (_req, res) => {
  const resultDB = await User.findAll({ attributes: ['id', 'name', 'email', 'role'] });
  const results = resultDB.filter((users) => users.role !== 'administrator');
  return res.status(200).json(results);
};

const deleteUsers = async (req, res) => {
  const { id } = req.params;
  await User.destroy({ where: { id } });
  return res.status(200).json({ message: 'ok.' });
};

module.exports = { getSeller, getOrders, getUsers, deleteUsers };