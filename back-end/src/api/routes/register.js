const router = require('express').Router();
const { registerUser } = require('../controllers/registerController');

router.get('/register', (req, res) => res.send('to na rota!'));
router.post('/register', registerUser);

module.exports = router;