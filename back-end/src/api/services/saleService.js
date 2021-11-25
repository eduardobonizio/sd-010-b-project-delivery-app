const moment = require('moment');
const { Sale, SalesProducts } = require('../../database/models');

const finishSaleService = async (newSale) => {
  const { totalPrice, deliveryAddress, deliveryNumber, userId, sellerId, cart } = newSale;

  const saleDate = moment().utc().format();

  const dataSale = await Sale.create({
    totalPrice, deliveryAddress, deliveryNumber, saleDate, userId, sellerId, status: 'Pendente',
  });

  cart.forEach((product) => {
    const saleId = dataSale.id;
    const { id: productId, quantity } = product;
    SalesProducts.create({ saleId, productId, quantity });
  });

  return dataSale.id;
};

const allSalesByUserService = async (userId) => Sale
  .findAll({ where: { userId }, attributes: { exclude: ['user_id', 'seller_id'] } });

const saleByUserService = async (_userId) => {
  // const checkUserId = async (id, user) => {  
  //   const updatedPost = await BlogPost.findByPk(id, {
  //     include: [{ model: Category, as: 'categories', through: { attributes: [] } }],
  //     attributes: { exclude: ['id', 'published', 'updated'] },
  //   });
    
  //   if (user !== updatedPost.userId) {    
  //     console.log('updatepost console', updatedPost.userId, user);
  //     return { fieldError: true, message: 'Unauthorized user' };    
  //   }
  //   return { fieldError: false };
  // };
};

module.exports = { finishSaleService, allSalesByUserService, saleByUserService };
