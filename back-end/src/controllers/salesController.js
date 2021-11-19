const { StatusCodes } = require('http-status-codes');
const rescue = require('express-rescue');
const service = require('../services/salesService');

const createSale = rescue(async (req, res) => {
    const { saleData, productsArray } = req.body;
    const result = await service.createSale(saleData, productsArray);
    res.status(StatusCodes.CREATED).json(result);
});

const getSale = rescue(async (req, res) => {
    const { id } = req.params;
    const sale = await service.getSale(Number(id));
    return res.status(StatusCodes.OK).json(sale);
});

const allSalesByUser = rescue(async (req, res) => {
    const { id } = req.query;
    const sales = await service.allSalesByUser(id);
    res.status(StatusCodes.ACCEPTED).json(sales);
});

module.exports = {
    createSale,
    getSale,
    allSalesByUser,
};