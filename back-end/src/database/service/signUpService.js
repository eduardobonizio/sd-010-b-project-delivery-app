const { user } = require('../models');

const createUser = async (name, email, password) => {
    const created = await user.create({ name, email, password, role: "costumer" });
    return created;
};

module.exports = { createUser };

