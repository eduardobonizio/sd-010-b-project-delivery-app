const orderService = require("../services/orderService");
const rescue = require("express-rescue");

const getAllOrdersByUserId = rescue(async (req, res) => {
  const { id: user_id } = req.params;
  const result = await orderService.getAllOrdersByUserId(user_id);
  return res.status(result.status).json(result.data);
});

module.exports = {
  getAllOrdersByUserId,
};
