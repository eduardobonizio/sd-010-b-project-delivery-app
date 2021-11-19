const { Sale } = require('../database/models');

const addNewSale = async (objeto) => {
    const { obj, id } = objeto;
    const { sellerId, totalPrice, deliveryAddress, deliveryNumber } = obj;
    const saleAdded = await Sale.create({
        userId: id,
        sellerId,
        totalPrice,
        deliveryAddress,
        deliveryNumber,
        saleDate: new Date('2011-08-01T19:58:00.000Z'),
        status: 'Pendente',
    });

    return saleAdded;
};

module.exports = {
    addNewSale,
};
