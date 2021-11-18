const { registerService } = require('../services');

const createUserCustomer = async (req, res) => registerService.createUserCustomer(req.body)
  .then(({ status, data }) => res.status(status).json({ data }));

const createUserAdmin = async (req, res) => registerService.createUserAdmin(req.body, req.userInfo)
  .then(({ status, data }) => res.status(status).json({ data }));

module.exports = {
  createUserCustomer,
  createUserAdmin,
};
