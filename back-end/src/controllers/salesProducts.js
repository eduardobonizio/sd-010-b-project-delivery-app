const saleProductsService = require('../services/salesProducts');

const getSaleProduct = async (req, res, next) => {
  const { id } = req.params;

  const saleWithProducts = await saleProductsService.getSaleProduct(id);
  if (!saleWithProducts) {
    return next('saleNotFound');
  }
  res.status(200).json(saleWithProducts);
};

module.exports = {
  getSaleProduct,

};