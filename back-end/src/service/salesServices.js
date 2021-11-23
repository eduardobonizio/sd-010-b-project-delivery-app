<<<<<<< HEAD
const { User, Product, Sales, 
  // SalesProducts 
} = require('../database/models');

const addPurchase = async (saleId, products) => {
     console.log('add', saleId, products);
     return console.log('entrei');
  // const data = products.map(({ productId, quantity }) => SalesProducts.create({
  //     SaleId: saleId,
  //     ProductId: productId,
  //     quantity,
  //   }));
  // return data;

  // const data = await Promise.all(products.map(async ({ productId, quantity }) => {
  //   SalesProducts.create({
  //     SaleId: saleId,
  //     ProductId: productId,
  //     quantity,
  //   });
  // }));
  // return data;
=======
const { User, Product, Sale, SalesProducts } = require('../database/models');

const addSale = async (saleInfo) => {
  const sale = saleInfo;
  delete sale.products;
  const data = await Sale.create(sale);
  return data;
};

const addPurchase = async (products, saleId) => {
  const data = await Promise.all(products.map(async ({ productId, quantity }) => {
    return SalesProducts.create({
      sale_id: saleId,
      product_id: productId,
      quantity,
    });
  }));
  
  return data;
>>>>>>> 528ad7297d27edcc090cb2d9c5232cc96ac99699
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
<<<<<<< HEAD
  getPurchaseById,
  addPurchase,
=======
  // getPurchaseById,
  addSale,
>>>>>>> 528ad7297d27edcc090cb2d9c5232cc96ac99699
};
