const { sale, product, user } = require('../database/models');
const { salesProducts } = require('../database/models');
const userService = require('./userService');

const getAll = async () => {
  const sales = await sale.findAll();
  return sales;
};

const getSale = async ({ id }) => {
  const sales = await sale.findByPk(id, { 
    include: [ 
      { model: product, as: 'products', through: { attributes: [] } },
      { model: user, as: 'customer' },
      { model: user, as: 'seller' },
    ],
  });
  const teste = Promise.all(sales.products.map(async (prod) => {
    return await salesProducts.findOne({ where: { sale_id: id, product_id: prod.id}});
  }));

  const prodSale = await teste;
  return { sales, prodSale };
};

const postSale = async ({  
  email, sellerId, totalPrice, deliveryAddress, deliveryNumber, status }) => {
  const userId = await userService.findUserByEmail(email);
  const saleDate = new Date();
  const { id } = await sale.create({ 
    userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status });
  return id;
};

const postProductSale = async (productArray) => {
  productArray.forEach(async (prod) => {
    await salesProducts.create(prod);
  });
  return 'Populei';
};

module.exports = {
  getAll,
  getSale,
  postSale,
  postProductSale,
};
