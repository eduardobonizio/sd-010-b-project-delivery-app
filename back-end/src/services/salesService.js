const { sale, product } = require('../database/models');
const { createSalesProducts } = require('./salesProductsService');

const createSale = async (saleData, productsArray) => {
    const { id } = await sale.create(saleData);
    const saleId = 'sale_id';
    const productId = 'product_id';
    await productsArray.map(async (productOrder) => {
        const payload = { 
            [saleId]: id, [productId]: productOrder.id, quantity: productOrder.qtd,
        };
        await createSalesProducts(payload);
    });
    return id;
};

const getSale = async (id) => {
    try {
        const result = await sale.findOne({ where: { id },
        include: [{
            model: product,
            as: 'products',
            through: { attributes: ['quantity'] },
        }],
            });
    return result;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createSale,
    getSale,
};

// refatorar posteriormente para transação atômica (transaction)