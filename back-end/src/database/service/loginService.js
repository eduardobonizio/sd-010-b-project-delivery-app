const { user } = require('../models');

const checkUserExists = async (email, password) => {
    const check = await user.findOne({ where: { email, password } });
    return check;
};

module.exports = { checkUserExists };
