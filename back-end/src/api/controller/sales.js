const Sale = require('../../service/salesServices');

const addPurchase = async (req, res) => {
  // try {
    const { userId, sellerId, totalPrice, deliveryAddress,
      deliveryNumber, saleDate, status, products } = req.body;
    const { id } = await Sale.addSale({
      userId,
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      saleDate,
      status,
    });
    const newPurchase = await Sale.addPurchase(products, id);
    console.log(newPurchase)
    return res.status(201).json({ data: newPurchase });
  // } catch (error) {
  //   console.log(error);
  //   return res.status(500).json(error);
  // }
};

const getAllPurchases = async (req, res) => {
  try {
    const { id } = req.user;
    const purchases = await Sale.getAllPurchases(id);
    return res.status(200).json(purchases);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getPurchaseById = async (req, res) => {
  // console.log('entrei');
    const { id } = req.params;
    // console.log('arroz');
    const purchase = await Sale.getPurchaseById(id);
    return res.status(200).json(purchase);
};

const getPurchaseBySellerId = async (req, res) => {
  try {
    const { id } = req.params;
    const purchase = await Sale.getPurchaseBySellerId(id);
    return res.status(200).json(purchase);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updatePurchaseStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const purchase = await Sale.updatePurchaseStatus(id, status);
    console.log('id', id, purchase, 'purchase');
    return res.status(204).json(purchase);
  } catch (error) {
    return res.status(500).json(error);
  }
 };
module.exports = {
  addPurchase,
  getAllPurchases,
  getPurchaseById,
  getPurchaseBySellerId,
  updatePurchaseStatus,
};