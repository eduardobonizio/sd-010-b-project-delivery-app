const { User, Product, Sale, SalesProducts } = require('../database/models');

const addSale = async (saleInfo) => {
  const sale = saleInfo;
  delete sale.products;
  const data = await Sale.create(sale);
  console.log(data.id, 'data');
  return data;
};

const addPurchase = async (products) => {
  console.log(products);
  const data = await Promise.all(products.map(async ({ productId, quantity }) => {
    SalesProducts.create({
      ProductId: productId,
      quantity,
    });
  }));
  return data;
};

const setPurchaseById = async (id) => {
  const { dataValues: purchaseById } = await Sale.findByPk(id, {
    include: [{
      model: User, as: 'user', attributes: { exclude: ['id', 'password', 'role'] },
    }, {
      model: User, as: 'seller', attributes: { exclude: ['id', 'password', 'role'] },
    }, {
      model: Product,
as: 'products',
      through: { attributes: ['quantity'] },
    }],
  });
  purchaseById.products.map((product) => {
    const updateProduct = product;
    updateProduct.dataValues.quantity = updateProduct.dataValues.SalesProducts.quantity;
    delete updateProduct.dataValues.SalesProducts;
    return updateProduct;
  });
  return purchaseById;
};

// const newPurchase = async ({ products, emptyProducts }) => {
//   const { dataValues: purchase } = await Sales.create({
//     ...emptyProducts,
//   });
//   await addPurchase(purchase.id, products);
//   const purchaseDone = await setPurchaseById(purchase.id);
//   return purchaseDone;
// };

// const getPurchaseById = async (purchaseId, userId) => {
//   const purchaseById = await setPurchaseById(purchaseId);
//   if (purchaseById.userId === userId || purchaseById.sellerId === userId) {
//     return purchaseById;
//   }
//   return { error: 'Unauthorized user' };
// };

module.exports = {
  addPurchase,
  // newPurchase,
  setPurchaseById,
  // getPurchaseById,
  addSale,
};
