const { Sale, SalesProduct, Product } = require('../../database/models');

const getUserOrders = async (userId, role) => {
  try {
    let userOrders = [];
    if (role === 'seller') { userOrders = await Sale.findAll({ where: { sellerId: userId } }); } else userOrders = await Sale.findAll({ where: { userId } });
    return userOrders;
  } catch (e) {
    console.log(e);
  }
};

const getSaleInfo = async (saleId) => {
  const saleInfo = await Sale.findByPk(saleId);
  return saleInfo;
};

const create = async (body) => {
  const { cart } = body;

  const sale = await Sale.create({
    userId: body.userId,
    deliveryAddress: body.deliveryAddress,
    deliveryNumber: body.deliveryNumber,
    sellerId: body.sellerId,
    totalPrice: body.totalPrice,
    status: 'Pendente',
  });

  cart.forEach(async (el) => {
    await SalesProduct.create({
      saleId: sale.id,
      productId: el.id,
      quantity: el.qty,
    });
  });

  return sale;
};

const getProductsOfSale = async (saleId) => {
  const productsInfo = await Sale.findOne({
    where: { id: saleId },
    include: [
      { model: Product, as: 'products', through: { attributes: ['quantity'] } },
    ],
  });
  const seller = await productsInfo.getSeller();
  return { productsInfo, seller };
};

const updateSaleStatus = async (id, status) => {
  const sale = await Sale.update({ status }, { where: { id } });
  return sale;
};

module.exports = {
  getUserOrders,
  getSaleInfo,
  create,
  updateSaleStatus,
  getProductsOfSale,
};
