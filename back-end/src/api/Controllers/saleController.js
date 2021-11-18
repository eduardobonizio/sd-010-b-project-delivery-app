const saleService = require('../Services/saleService');

const getAllSales = async (req, res) => {
  const { userId } = req;

  const allSales = await saleService.getAllSales(userId);

  if (allSales.message) {
    return res.status(404).json(allSales.message);
  }

  return res.status(201).json(allSales);
};

module.exports = {
  getAllSales,
};