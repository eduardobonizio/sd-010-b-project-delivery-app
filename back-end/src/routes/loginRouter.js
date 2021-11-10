const express = require('express');
// Controller
// jwt

const router = express.Router();

router.get('/', (_req, res) => {
  res.status(200).send('Você Acabou de entrar na rota de Login');
});

module.exports = router;