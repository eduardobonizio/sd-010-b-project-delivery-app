const { Sale } = require('../database/models');

const getAllOrdersByUserId = async (user_id) => {
  const getOrder = await Sale.findAll({ where: {  user_id } });
  if (!getOrder) return { status: 404, message: "Pedido não encontrado" };
  return { status: 200, data: getOrder };
};

module.exports = { getAllOrdersByUserId };
