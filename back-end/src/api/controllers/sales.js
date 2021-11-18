const rescue = require('express-rescue');
const { Sale, User } = require('../../database/models');

const sales = rescue(async (req, res) => {
  const { id } = req.user;
  const result = await Sale.findAll({ where: { user_id: id } });
  if (!result) { return res.status(404).json({ message: 'deu merda corre!' }); }
  return res.status(200).json(result);
});

module.exports = {
  sales,
};
