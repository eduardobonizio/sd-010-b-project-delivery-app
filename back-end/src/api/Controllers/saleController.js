const saleService = require('../Services/saleService');

const getAllSales = async (req, res) => {
  const { userId } = req;

  const allSales = await saleService.getAllSales(userId);

  if (allSales.message) {
    return res.status(404).json(allSales.message);
  }

  return res.status(201).json(allSales);
};

const getSalesById = async (req, res) => {
  const { id } = req.params;
    
  const sale = await saleService.getSalesById(id);

  return res.status(200).json(sale)
}

module.exports = {
  getAllSales,
  getSalesById,
};