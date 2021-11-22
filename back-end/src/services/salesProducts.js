const { Sale, Product, User } = require('../database/models');

const getSaleProduct = async (id) => {
  const saleWithProduct = await Sale.findAll({
    where: { id },
    include: [
      {
        model: Product,
        as: 'products',
        through: {
          attributes: ['quantity'],
        },
      },
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: User, as: 'seller', attributes: { exclude: ['password'] } },
    ],
  }).catch((e) => console.log(e));

  if (saleWithProduct.length === 0) {
    return null;
  }
  return saleWithProduct;
};

module.exports = {
  getSaleProduct,
};
