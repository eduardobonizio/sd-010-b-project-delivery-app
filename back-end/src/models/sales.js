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

  cart.forEach(({ product_id, quantity }) => {
    salesProducts.create({
      // eslint-disable-next-line camelcase
      sale_id: createdSale.toJSON().id, product_id, quantity,
      });
  });

  return createdSale;
};

module.exports = {
  getAll,
  getById,
  createSales,
};
