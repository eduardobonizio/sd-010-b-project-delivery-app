const { getSales, getSaleById } = require("../services/saleService");

const getAll = async (_req, res) => {
  try {
    const sales = await getSales();

    return res.status(200).json(sales);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Algo deu errado" });
  }
};

const getById = async (req, res) => {
  try {
    const sale = await getSaleById(req.params.id);

    return res.status(200).json(sale);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Algo deu errado" });
  }
};

module.exports = {
  getAll,
  getById,
};
