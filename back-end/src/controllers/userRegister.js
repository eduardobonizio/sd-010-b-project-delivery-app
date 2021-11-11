const userRegisterService = require('../services/userRegister');

const addUser = async (req, res, next) => {
    const { name, email, password, role } = req.body;

    const userAdded = await userRegisterService.addNewUser(name, email, password, role);
    if (!userAdded) {
        return next('userAlreadyExist');
    }

    return res.status(201).json({ message: `${role} cadastrado com sucesso!` });
};

module.exports = {
    addUser,
};
