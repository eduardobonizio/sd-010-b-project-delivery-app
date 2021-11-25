const { Sale, Product, SalesProducts } = require('../../database/models');

const getAllSalesProductsBySeleId = async (seleId) => {
  const result = SalesProducts.findAll({
    raw: true,
    where: { seleId },
  });
  const products = result.map(({ productId }) => productId);
  return products;
};

const getAll = async () => Sale.findAll({
  attributes: { exclude: ['urlImage'] },
  include: [{ model: Product, as: 'products' }],
});

const createSalesProducts = async (body) => {
  const { products, saleId } = body;
  Object.values(products).forEach(async ({ name, quant }) => {
    const { id: productId } = await Product.findOne({
      raw: true, // remove o dataValues.
      where: { name },
    });
   await SalesProducts.create({ saleId, productId, quantity: quant });
  });
  return true;
};

module.exports = {
  getAll,
  createSalesProducts,
  getAllSalesProductsBySeleId,
};