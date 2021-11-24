const { usersService } = require('../services');

const getAllSellers = async (_req, res) => usersService.getAllSellers()
  .then(({ status, data }) => res.status(status).json({ data }));

const getAllUsers = async (_req, res) => usersService.getAllUsers()
  .then(({ status, data }) => res.status(status).json({ data }));

const deleteUser = async (req, res) => usersService.deleteUser(req.params)
  .then(({ status, data }) => res.status(status).json({ data }));

module.exports = { getAllSellers, getAllUsers, deleteUser };
