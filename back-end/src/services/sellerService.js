const { StatusCodes } = require('http-status-codes');
const { Sale } = require('../models');

const findAllSales = async (sellerId) => {
  const sales = await Sale.findAll({ where: { sellerId } });
  console.log(sales);
  return { code: StatusCodes.OK, sales };
};

const findOrderByPk = async ({ sellerId, id }) => {
  try {
    // const { error } = userDataSchema.validate({ email, password });
    // if (error) { // error.isJoi indentifica se o erro foi tipo Joi
    //   const { message } = error.details[0];    
    //   return { code: StatusCodes.BAD_REQUEST, message };
    // }

    const order = await Sale.findOne({
      where: { id, sellerId },
      include: 'products',
    });

    console.log(order);

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
  findAllSales,
  findOrderByPk,
};