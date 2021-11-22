const { Sale } = require('../database/models');

const addNewSale = async (objeto) => {
    const { obj, id } = objeto;
    console.log('Obj', obj);
    // const date = new Date();
    // console.log(date);
    const saleAdded = await Sale.create({
        userId: id,
        ...obj,
        saleDate: Date.now(),
        status: 'Pendente',
    });

    return saleAdded.dataValues;
};

const getAllSales = async () => {
    const sales = await Sale.findAll();

    return sales;
};

module.exports = {
    addNewSale,
    getAllSales,
};
