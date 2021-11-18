const saleService = require('../services/saleService');

const getSales = async (req, res) => {
  try {
    const sales = await saleService.getAll();
    res.status(200).json(sales);
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
  console.log(req.body);
  try {
    await saleService.postProductSale(req.body);
    res.status(201).json('newPostProductSale');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getSales,
  postSale,
  postProductSale,
};
