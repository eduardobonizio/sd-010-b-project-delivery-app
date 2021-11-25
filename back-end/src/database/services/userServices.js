const { user } = require('../models');
const { createToken } = require('../middleware/tokenGeneration');

const validateCreate = async ({ name, email, password }) => {
const create =  await user.create({ name, email, password, role: 'customer' });
const token = createToken(create);
const userWithToken = { ...create.dataValues, token };
return userWithToken;

};

module.exports = {
  validateCreate,
};
