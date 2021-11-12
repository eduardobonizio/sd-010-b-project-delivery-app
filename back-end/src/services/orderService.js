const { Sale } = require("../database/models");

const getAllOrdersByUserId = async (user_id) => {
  const getOrderUser = await Sale.findAll({ where: { user_id } });
  if (!getOrderUser) return { status: 404, data: "Nenhum pedido encontrado" };
  return { status: 200, data: getOrderUser };
};

const getAllOrdersBySellerId = async (seller_id) => {
  console.log(seller_id);
  const getOrderSeller = await Sale.findAll({ where: { seller_id } });
  if (!getOrderSeller) return { status: 404, data: "Nenhum pedido encontrado" };
  return { status: 200, data: getOrderSeller };
};

module.exports = { getAllOrdersByUserId, getAllOrdersBySellerId };
