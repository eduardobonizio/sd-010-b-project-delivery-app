const { User } = require('../database/models');

const getSeller = async (_req, res) => {
  const response = await User.findAll({ where: { role: 'seller' }, attributes: ['name', 'id'] });
  return res.status(200).json(response);
};

module.exports = { getSeller };