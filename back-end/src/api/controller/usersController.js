const Sale = require('../../services/salesServices');

const getPurchase = async (req, res, next) => {
  try {
    const { userId } = req.body;
    const purchase = await Sale.getPurchase(userId);
    res.status(200).json(purchase);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getPurchase,
};
