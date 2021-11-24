const { sales, salesProducts } = require('../database/models');

const getAll = async () => {
   const allSales = await sales.findAll();
 
  return allSales;
};

const getById = async (id) => {
  const sale = await sales.findByPk(id);

  return sale;
};

const createSales = async ({ cart, sale }) => {
  const createdSale = await sales.create(sale);

  const saleId = 'sale_id';
  const productId = 'product_id';

  cart.forEach(({ product_id: prodId, quantity }) => {
    salesProducts.create({
      [saleId]: createdSale.toJSON().id, [productId]: prodId, quantity,
      });
  });

  return createdSale;
};

module.exports = {
  getAll,
  getById,
  createSales,
};
