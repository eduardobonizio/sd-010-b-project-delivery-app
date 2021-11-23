const { Sale, SalesProduct } = require('../models');

const insertIntoSalesProduct = async (products, saleId) => {
  await products.forEach(async (product) => {
    await SalesProduct.create({
      saleId,
      productId: product.id,
      quantity: product.quantity,
    });
  });
};

const createNewSale = async (body) => {
  const { products, user, totalPrice, deliveryAddress, deliveryNumber, sellerId } = body;
    const newSale = await Sale.create({
      userId: user.id,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      status: 'Pendente',
      sellerId,
    });

    await insertIntoSalesProduct(products, newSale.id);

    return newSale;
};

module.exports = {
  createNewSale,
};
