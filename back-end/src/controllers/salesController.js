const saleService = require('../services/saleService');

const getSales = async (req, res) => {
  try {
    const sales = await saleService.getAll();
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSalesById = async (req, res) => {
  try {
    const sale = await saleService.getSale(req.params);
    res.status(200).json(sale);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postSale = async (req, res) => {
  try {
    const newSaleId = await saleService.postSale(req.body);
    res.status(201).json(newSaleId);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postProductSale = async (req, res) => {
  console.log('body:', req.body);
  try {
    const newSales = await saleService.postProductSale(req.body);
    res.status(201).json(newSales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getSales,
  getSalesById,
  postSale,
  postProductSale,
};
