const { user } = require('../models');

const createUser = async (name, email, password, role) => {
    const created = await user.create({ name, email, password, role });
    console.log(created);
    return created;
};

module.exports = { createUser };

