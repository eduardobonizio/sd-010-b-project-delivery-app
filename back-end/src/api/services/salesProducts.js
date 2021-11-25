const { Sale, Product, SalesProducts } = require('../../database/models');

const getAll = async () => Sale.findAll({
  attributes: { exclude: ['urlImage'] },
  include: [{ model: Product, as: 'products' }],
});

const getAllByUserId = async ({ id }) => Sale.findAll({
  where: { userId: id },
    include: [{ model: Product, as: 'products', through: { attributes: [] } }] });

const createSalesProducts = async (body) => {
  const { products, saleId } = body;
  Object.values(products).forEach(async ({ name, quant }) => {
    const { id: productId } = await Product.findOne({
      raw: true,
      where: { name },
    });
   await SalesProducts.create({ saleId, productId, quantity: quant });
  });
  return true;
};

module.exports = {
  getAll,
  getAllByUserId,
  createSalesProducts,
};