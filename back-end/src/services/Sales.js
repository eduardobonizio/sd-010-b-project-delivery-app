const httpStatus = require('http-status');

const { User, Sale, SalesProduct, Product } = require('../database/models');
const validations = require('../utils/validations');

const createSale = async (payloadUser, { sale, cart }) => {
  validations.createSale(sale, cart);

  const { sellerId, totalPrice, deliveryAddress, deliveryNumber } = sale;

  const response = await Sale.create({
    userId: payloadUser.id, sellerId, totalPrice, deliveryAddress, deliveryNumber,
  });

  const promises = cart.map(async ({ productId, quantity }) =>
    SalesProduct.create({ saleId: response.id, productId, quantity }));
  
  await Promise.all(promises);

  return ({ status: httpStatus.CREATED, data: [{ saleId: response.id }] });
};

const getAll = async ({ id, role }) => {
  if (role === 'customer') {
    const data = await Sale.findAll({ where: { userId: id } });
    return ({ status: httpStatus.OK, data });
  }

  const data = await Sale.findAll();
  return ({ status: httpStatus.OK, data });
};

const getById = async ({ id }) => {
  const data = await Sale.findAll({
    where: { id },
    include: [
      { model: User, as: 'seller', attributes: ['name'] },
      { model: Product, as: 'products', through: { attributes: ['quantity'] } },
    ],
  });
  return ({ status: httpStatus.OK, data });
};

const updateStatus = async ({ id }, { status }) => {
  validations.updateSale(id, status);

  await Sale.update({ status }, { where: { id } });
  
  return ({ status: httpStatus.NO_CONTENT, data: [{ message: 'Atualizado' }] });
};

module.exports = { createSale, getAll, getById, updateStatus };
