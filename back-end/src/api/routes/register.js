const router = require('express').Router();
const { registerUser } = require('../controllers/registerController');

router.get('/', (req, res) => res.send('to na rota!'));
router.post('/', registerUser);

module.exports = router;