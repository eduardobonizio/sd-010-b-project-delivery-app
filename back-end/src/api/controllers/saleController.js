const { finishSaleService } = require('../services/saleService');

const finishSaleController = (req, _res) => {
  const newSale = req.body;
  finishSaleService(newSale);
  // res.status().json({});
};

module.exports = { finishSaleController };
