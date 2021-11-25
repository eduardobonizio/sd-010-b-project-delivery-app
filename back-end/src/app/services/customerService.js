const { Sale, SalesProduct } = require('../../database/models');

const getAll = async () => {
  const findCustomer = await Sale.findAll();
  return findCustomer;
};
const getById = async (id) => {
  const findId = await Sale.findByPk(id);
  return findId;
};

const createSalles = async (sale) => {
  const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, products } = sale;
  const newSale = await Sale.create({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
  });

  products.forEach(async ({ id, quantity }) => {
    await SalesProduct.create({ saleId: newSale.id, productId: id, quantity });
  });

  return { data: [{ saleId: newSale.id }] };
};

module.exports = {
  getAll,
  getById,
  createSalles,
};
