const { Sale } = require('../database/models');

const addNewSale = async (objeto) => {
    const { obj, id } = objeto;
    const date = new Date();
    const { sellerId, totalPrice, deliveryAddress, deliveryNumber } = obj;
    const saleAdded = await Sale.create({
        userId: id,
        sellerId,
        totalPrice,
        deliveryAddress,
        deliveryNumber,
        saleDate: date.toLocaleString(),
        status: 'Pendente',
    });

    return saleAdded;
};

const getAllSales = async () => {
    const sales = await Sale.findAll();

    return sales;
};

module.exports = {
    addNewSale,
    getAllSales,
};
