const { Sale } = require('../../database/models');

const getUserOrders = async (userId) => {
  try {
    const userOrders = await Sale.findAll({ where: userId });
    return userOrders;
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getUserOrders,
};