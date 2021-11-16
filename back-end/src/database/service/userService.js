const { user } = require('../models');
const { Op } = require("sequelize");

const checkUserLogin = async (email, password) => {
    const check = await user.findOne({ where:  { email, password } });
    return check;
};

const checkUserExists = async (name, email) => {
  const check = await user.findOne({ where: { [Op.or]: [{ name }, { email }] } });
  return check;
};

module.exports = { checkUserLogin, checkUserExists };

// const { Op } = require("sequelize");
// Post.findAll({
//   where: {
//     [Op.or]: [
//       { authorId: 12 },
//       { authorId: 13 }
//     ]
//   }
// });
