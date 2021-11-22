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

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const salesDetails = await saleService.getById(id);
    return res.status(200).json(salesDetails);
  } catch (error) {
    console.log(error);
    return res.status(500).send('Erro interno');
  }
};

const updateSaleStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    await saleService.updateSaleStatus({ id, status });    
    return res.status(204).end();
  } catch (error) {
    console.log(error);
    return res.status(500).send('Erro interno');
  }
};

module.exports = {
  create,
  getAllSales,
  getById,
  updateSaleStatus,
};