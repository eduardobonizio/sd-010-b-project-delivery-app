const userService = require('../Services/userService');

const getAllSellers = async (req, res) => {
  try {
    const sellers = await userService.getAllSellers();
    return res.status(200).json(sellers);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send('Erro interno');
  }
};

module.exports = {
  getAllSellers,
};