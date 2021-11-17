const express = require('express');

const router = express.Router();
const usersController = require('../api/controller/usersController');

router.get('/', async (req, res) => {
  const purchase = await usersController.getPurchase();

  if (!purchase) {
    return res.status(404).json({
      status: 404,
      error: 'Compra não encontrada',
    });
  }

  return res.status(200).json({ data: purchase });
});

module.exports = router;