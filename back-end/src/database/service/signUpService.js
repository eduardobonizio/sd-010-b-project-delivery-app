const { user } = require('../models');

const createUser = async (name, email, password) => {
    const created = await user.create({ name, email, password, role });
    return created;
};

module.exports = { createUser };

