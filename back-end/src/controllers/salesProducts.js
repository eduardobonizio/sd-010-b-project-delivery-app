const saleProductsService = require('../services/salesProducts');

const getSaleProduct = async (req, res) => {
  const { id } = req.params;

  const SaleWithProducts = await saleProductsService.getSaleProduct(id);
  res.status(200).json(SaleWithProducts);
};

module.exports = {
  getSaleProduct,

};