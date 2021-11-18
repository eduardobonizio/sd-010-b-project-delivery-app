const { user } = require('../models');

const validateCreate = async ({ name, email, password }) => {
const create =  await user.create({ name, email, password, role: 'customer' });
return create;
};

module.exports = {
  validateCreate,
};
