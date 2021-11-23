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
  const { products, user, totalPrice, deliveryAddress, deliveryNumber } = body;
    const newSale = await Sale.create({
      userId: user.id,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      status: 'Ainda não sei o que colocar',
      sellerId: 1,
    });

    await insertIntoSalesProduct(products, newSale.id);

    return newSale;
};

module.exports = {
  createNewSale,
};
