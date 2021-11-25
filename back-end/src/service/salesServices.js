const { User, Product, Sale, SalesProducts } = require('../database/models');

const addSale = async (saleInfo) => {
  const sale = saleInfo;
  delete sale.products;
  const data = await Sale.create(sale);
  return data;
};

const addPurchase = async (products, saleId) => {
  const data = await Promise
  .all(products.map(async (el) => 
      SalesProducts.create({
      SaleId: saleId,
      ProductId: el.productId,
      quantity: el.quantity,
    })));
  
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

const getPurchaseBySellerId = async (id) => {
  try {
  const data = await Sale.findAll({
    where: { sellerId: Number(id) },
  });
  return data;
} catch (err) {
  return { message: err };
}
};

// const newPurchase = async ({ products, emptyProducts }) => {
//   const { dataValues: purchase } = await Sales.create({
//     ...emptyProducts,
//   });
//   await addPurchase(purchase.id, products);
//   const purchaseDone = await setPurchaseById(purchase.id);
//   return purchaseDone;
// };

const getPurchaseById = async (id) => {
  const data = await Sale.findByPk(id, { 
    include: [ 
      { model: Product, as: 'products' },
      { model: User, as: 'user' },
      { model: User, as: 'seller' },
    ],
  });
  return data;
};

const updatePurchaseStatus = async (id, status) => {
  const data = await Sale.update(
    { status },
    { where: { id } },
  );
  return data;
};

module.exports = {
  addPurchase,
  // newPurchase,
  setPurchaseById,
  // getPurchaseById,
  getPurchaseBySellerId,
  addSale,
  getPurchaseById,
  updatePurchaseStatus,
};
