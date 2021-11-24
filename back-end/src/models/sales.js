const { sales, salesProducts } = require('../database/models');

const userId = 'user_id';
const sellerId = 'seller_id';
const saleId = 'sale_id';
const productId = 'product_id';

const getAll = async () => {
   const allSales = await sales.findAll();
 
  return allSales;
};

const getById = async (id) => {
  const sale = await sales.findByPk(id);

  return sale;
};

const getByUserId = async (id) => {
  const sale = await sales.findAll({
    where: { [userId]: id },
  }); 

  return sale;
};

const getBySellerId = async (id) => {
  const sale = await sales.findAll({
    where: { [sellerId]: id },
  }); 

  return sale;
};

const createSales = async ({ cart, sale }) => {
  const createdSale = await sales.create(sale);

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
  getByUserId,
  getBySellerId,
};
