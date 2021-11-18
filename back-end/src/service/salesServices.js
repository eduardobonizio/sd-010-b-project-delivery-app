const { Sale } = require('../database/models');

const getPurchase = async (userId) => {
  const purchases = await Sale.findAll({
    where: {
      userId,
    },
  });
  return purchases;
};

module.exports = {
  getPurchase,
};
