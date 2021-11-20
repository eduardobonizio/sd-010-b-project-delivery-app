const saleService = require('../Services/saleService');

const create = async (req, res) => {
  const { userId } = req;
  const { sale } = req.body;

  try {
    const saleId = await saleService.create({ ...sale, userId });
    return res.status(201).json({ saleId });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send('Erro interno');
  }
};

const getAllSales = async (req, res) => {
  const { userId } = req;

  const allSales = await saleService.getAllSales(userId);

  if (allSales.message) {
    return res.status(404).json(allSales.message);
  }

  return res.status(201).json(allSales);
};

module.exports = {
  create,
  getAllSales,
};