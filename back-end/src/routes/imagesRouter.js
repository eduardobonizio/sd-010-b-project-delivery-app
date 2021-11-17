const express = require('express');
const path = require('path');
// const batatat = require('../../../assets/public/')

const router = express.Router();

router.get('/:name', async (req, res) => {
  const { name } = req.params;
  const newPath = path.join(__dirname, `../../../assets/public/${name}`);
  return res.sendFile(newPath);
});

module.exports = router;
