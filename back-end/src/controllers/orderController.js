const orderService = require("../services/orderService");

const { getSaleById } = require("../services/checkoutService");
const rescue = require("express-rescue");

const getAllOrdersByUserId = rescue(async (req, res) => {
  const { id:user_id } = req.user;

  const result = await orderService.getAllOrdersByUserId(user_id);
  return res.status(result.status).json(result.data);
});

const getAllOrdersBySellerId = rescue(async (req, res) => {
  const { id: seller_id } = req.user;
  const result = await orderService.getAllOrdersBySellerId(seller_id);
  return res.status(result.status).json(result.data);
});

const getOrderById = rescue(async (req, res) => {
  const { id } = req.params;
  const sale = await getSaleById(id);
  // falta receber os pedidos
  const { total_price, sale_date, status } = sale.data;
  return res
    .status(sale.status)
    .json({ data: { total_price, sale_date, status } });
});

module.exports = {
  getAllOrdersByUserId,
  getAllOrdersBySellerId,
  getOrderById,
};
