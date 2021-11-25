const { User } = require('../database/models/index');

const getAllSellers = async () => {
  const sellers = await User.findAll({
    where: {
      role: 'seller',
    },
    attributes: ['id', 'name'],
  });
  return sellers;
};

module.exports = {
  getAllSellers,
};
