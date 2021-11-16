const Sale = require('../../services/salesServices');

const getPurchase = async (req, res) => {
  // body || params
  const { id } = req.body;
  const purchase = await Sale.getPurchase(id);

  if (!purchase) {
    return res.status(404).json({
      status: 404,
      error: 'Compra não encontrada',
    });
  }

  return res.json(purchase);
};

module.exports = {
  getPurchase,
};
