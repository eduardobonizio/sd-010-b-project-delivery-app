const rescue = require('express-rescue');
const { Sale } = require('../../database/models');

const sales = rescue(async (req, res) => {
  const result = await Sale.findAll();
  if (!result) { return res.status(404).json({ message: 'deu merda corre!' }); }
  return res.status(200).json(result);
});

module.exports = {
  sales,
};
