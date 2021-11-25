const adminService = require("../services/adminService");
const rescue = require("express-rescue");

const getAllUserByAdmin = rescue(async (_req, res) => {
  const newUser = await adminService.getAllUserByAdmin();
  return res.status(newUser.status).json(newUser.data);
});

const registerUserByAdmin = rescue(async (req, res) => {
  const { body } = req;
  const newUser = await adminService.registerUserByAdmin(body);
  return res.status(newUser.status).json(newUser.data);
});

const updateUserByAdmin = rescue(async (req, res) => {
  const { body } = req;
  const { id: user_id } = req.user;
  const updateUser = await adminService.updateUserByAdmin(body, user_id);
  return res.status(updateUser.status).json(updateUser.data);
});

const deleteUserByAdmin = rescue(async (req, res) => {
  const { id: user_id } = req.params;
  const deleteUser = await adminService.deleteUserByAdmin(user_id);
  return res.status(deleteUser.status).json(deleteUser.data);
});

module.exports = {
  getAllUserByAdmin,
  registerUserByAdmin,
  updateUserByAdmin,
  deleteUserByAdmin,
};
