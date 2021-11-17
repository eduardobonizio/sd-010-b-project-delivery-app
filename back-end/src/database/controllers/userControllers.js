const { validateCreate } = require('../services/userServices');
// console.log(validateCreate);

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const create = await validateCreate({ name, email, password });
    return res.status(201).json(create);
  } catch (error) {
    res.status(409).json({ error, message: 'Deu ruim!' });
  }
};

module.exports = {
  createUser,
};