const jwt = require('jsonwebtoken');
const Sequelize = require('sequelize');
const { Sale, User, SaleProduct, Product } = require('../database/models');

const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);
const date = new Date();
const timezone = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
console.log(timezone)

const createOrder = async (req, res) => {
  const token = req.headers.authorization;  
  const { sellerId, totalPrice, deliveryAddress, deliveryNumber, status, products } = req.body;
  // products será um array com os ids e suas quantidades
  const { email } = jwt.decode(token);
  const { id } = await User.findOne({ where: { email } });
  const saleSaveDB = { 
    userId: id, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate: date, status };
  try {
    await sequelize.transaction(async (t) => {
      const { dataValues } = await Sale.create(saleSaveDB, { transaction: t });
      const saleProduct = products.map((product) => (
        { saleId: dataValues.id, productId: product.productId, quantity: product.quantity }
        ));
      await SaleProduct.bulkCreate(saleProduct, { transaction: t });
      return res.status(201).json({ saleId: dataValues.id });
    });
    } catch (_error) {
      return res.status(500).json({ message: 'Erro no geranciamento da transação no banco' });
    }
};

const findOrder = async (req, res) => {
  const { id } = req.params;
  const saleItens = [];
  const { dataValues: { 
    userId, saleDate, status, sellerId, totalPrice } } = await Sale.findOne({ where: { id } });
  const searchUser = await User.findOne({ where: { id: userId } });
  const sellerName = await User.findOne({ where: { id: sellerId } });
  const saleProds = await SaleProduct.findAll({ where: { saleId: id } });
  const searchProds = await Product.findAll();
  saleProds.forEach(({ productId, quantity }) => {
    const { name, price } = searchProds.find((prod) => prod.id === productId);
    const obj = { name, unitPrice: price, subTotal: price * quantity, quantity };
    saleItens.push(obj);
  });
  const saleObj = {
    id, userName: searchUser.name, sellerName: sellerName.name, saleDate, status, totalPrice, saleItens };
  return res.status(200).json(saleObj);
};

// const findAllOrders = (req, res) => {
//   const saleItens = [];
//   const { dataValues } = await Sale.findAll({ where: { id }});

// }

module.exports = { createOrder, findOrder };
