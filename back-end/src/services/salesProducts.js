const { Sale, Product, User } = require('../database/models');

const getSaleProduct = async (id) => {
  const saleWithProduct = await Sale.findAll({
    where: { id },
    include: [{ model: Product,
    as: 'products',
    through: {
      attributes: ['quantity'],
    } },
    // { model: User, ?Perguntar
    // as: 'customer' }
  ] }).catch((e) => console.log(e));

    if (saleWithProduct.length === 0) {
      return null;
    }

    const idSeller = saleWithProduct[0].seller_id;
    const findSeller = await User.findOne({
      where: { id: idSeller, role: 'seller' },
      attributes: { exclude: ['password'] } });
    const result = [...saleWithProduct, findSeller];
    return result;
};

module.exports = {
  getSaleProduct,
};