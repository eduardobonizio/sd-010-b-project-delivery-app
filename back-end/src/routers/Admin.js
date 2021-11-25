const express = require('express');
const validateJWT = require('../middleware/validateJWT');
const {
  getAllUserByAdmin,
  registerUserByAdmin,
  updateUserByAdmin,
  deleteUserByAdmin
} = require('../controllers/adminController');

const router = express.Router();

router.get('/manage', validateJWT, getAllUserByAdmin);
router.post('/manage', validateJWT, registerUserByAdmin);
router.put('/manage', validateJWT, updateUserByAdmin);
router.delete('/manage/:id',validateJWT, deleteUserByAdmin);


module.exports = router;
