const Sale = require('../../service/salesServices');

const addPurchase = async (req, res) => {
  try {
    const purchase = req.body;
    const { products } = purchase;
    const { id } = await Sale.addSale(purchase);
    const newPurchase = await Sale.addPurchase(products, id);
    return res.status(201).json(newPurchase);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
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
  try {
    const { id } = req.user;
    const { purchaseId } = req.params;
    const purchase = await Sale.getPurchaseById(id, purchaseId);
    return res.status(200).json(purchase);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  addPurchase,
  getAllPurchases,
  getPurchaseById,
};