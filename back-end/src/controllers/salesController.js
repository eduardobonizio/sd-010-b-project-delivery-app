const saleService = require('../services/saleService');

const getSales = async (req, res) => {
  try {
    const sales = await saleService.getAll();
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getSales,
};
