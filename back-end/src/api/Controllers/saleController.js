const saleService = require('../Services/saleService');

const create = async (req, res) => {
  const { sale } = req.body;
  try {
    await saleService.create(sale);
    return res.status(201).end();
  } catch (error) {
    console.log(error.message);
    return res.status(500).send('Erro interno');
  }
};

module.exports = {
  create,
};