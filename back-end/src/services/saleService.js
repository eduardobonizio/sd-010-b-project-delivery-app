const { StatusCodes } = require('http-status-codes');
const { Sale, SalesProduct } = require('../database/models');
// const { userDataSchema } = require('./schemas');

const insertIntoSalesProduct = async (products, saleId) => {
  await products.forEach(async (product) => {
    await SalesProduct.create({
      saleId,
      productId: product.id,
      quantity: product.quantity,
    });
  });
};

const createNewSale = async (body) => {
  const { products, user, totalPrice, deliveryAddress, deliveryNumber, sellerId } = body;
  
  const newSale = await Sale.create({
    userId: user.id,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status: 'Pendente',
    sellerId,
  });

  await insertIntoSalesProduct(products, newSale.id);

  return newSale;
};

const getOrders = async (userId) => {
  try {
    const orders = await Sale.findAll({ where: { userId } });
    return orders;
  } catch (e) {
    console.log(e);
    return null;
  }
};

const getOrderByPk = async ({ userId, id }) => {
  try {
    // const { error } = userDataSchema.validate({ email, password });
    // if (error) { // error.isJoi indentifica se o erro foi tipo Joi
    //   const { message } = error.details[0];    
    //   return { code: StatusCodes.BAD_REQUEST, message };
    // }

    // const order = await Sale.findByPk(id, { where: { userId } });
    // const items = await SalesProduct.findAll({ where: { saleId: id } });
    // const seller = await User.findOne({ where: { id: order.sellerId } });

    const order = await Sale.findOne({
      where: { id, userId },
      include: ['user', 'seller', 'products'],
    });

    if (!order) {
      return { code: StatusCodes.NOT_FOUND, message: 'Order not found' };
    }

    // return { code: StatusCodes.OK, order, items, seller };
    return { code: StatusCodes.OK, order };
  } catch (e) {
    console.log(e);
    return null;
  }
};

module.exports = {
  createNewSale,
  getOrders,
  getOrderByPk,
};
