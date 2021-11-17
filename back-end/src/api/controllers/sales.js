const rescue = require('express-rescue');
const { Sale, User } = require('../../database/models');

const sales = rescue(async (req, res) => {
  /*  const idUser = await User.findOne({ where: { email } }); */
  /* console.log(idUser, 'id do usuario'); */
  const result = await Sale.findAll(/* { where: { userId: 3 } } */);
  if (!result) { return res.status(404).json({ message: 'deu merda corre!' }); }
  return res.status(200).json(result);
});

module.exports = {
  sales,
};
