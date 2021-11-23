const { Sale, User } = require('../database/models');
const jwt = require('jsonwebtoken');

const getSeller = async (_req, res) => {
  const response = await User.findAll({ where: { role: 'seller' }, attributes: ['name', 'id'] });
  return res.status(200).json(response);
};

const getOrders = async (req, res) => {
  const token = req.headers.authorization;
  const { email } = jwt.decode(token);
  const { id } = await User.findOne({ where: { email } });
  const result = await Sale.findAll({ where: { userId: id }});
  res.status(200).json(result);
}

module.exports = { getSeller, getOrders };