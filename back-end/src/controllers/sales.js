const salesService = require('../services/sales');

const addSale = async (req, res) => {
    const obj = req.body;
    const { id } = req.user;
    const objeto = {
        id,
        obj,
    };
    const saleAdded = await salesService.addNewSale(objeto);

    return res.status(201).json(saleAdded);
};

module.exports = {
    addSale,
};
