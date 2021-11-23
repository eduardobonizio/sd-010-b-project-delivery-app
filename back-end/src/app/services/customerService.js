const { Sale } = require('../../database/models');

const getAll = async () => {
  try {
  const findCustomer = await Sale.findAll();
  console.log(findCustomer);
  return findCustomer;
} catch (error) {
  console.log(error);
}
};
const getById = async (id) => {
  const findId = await Sale.findByPk(id);
  return findId;
};

const createSalles = async (sale) => {
  const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber } = sale;
  const newSalle = await Sale.create({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate: Date.now(),
    status: 'Pendente',
  });

  return newSalle;
};

module.exports = {
  getAll,
  getById,
  createSalles,
};
