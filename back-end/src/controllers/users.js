const router = require('express').Router();

const jwt = require('jsonwebtoken');
const fs = require('fs');

const md5 = require('md5');
const { getAll, login, register, getByRole } = require('../services/users');
const validateToken = require('../middleware/validation');

router.get('/', async (_req, res) => {
  const users = await getAll();

  return res.status(200).json(users);
});

router.get('/sellers', async (_req, res) => {
  const users = await getByRole('seller');

  return res.status(200).json(users);
});

router.get('/customers', async (_req, res) => {
  const users = await getByRole('customer');

  return res.status(200).json(users);
});

router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const encryptedPass = md5(password);
    const user = await register(name, email, encryptedPass);
    return res.status(201).json({ user, message: 'ok', redirect: true });
  } catch (error) {
    return res.status(409).json({ message: error.message, redirect: false });
  }
});

router.post('/adm/register', validateToken, async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const encryptedPass = md5(password);
    const user = await register(name, email, encryptedPass, role);
    return res.status(201).json({ user, message: 'Cadastrado com sucesso', redirect: true });
  } catch (error) {
    return res.status(409).json({ message: error.message, redirect: false });
  }
});

router.post('/login', async (req, res) => {
  try {
    const secret = fs.readFileSync('jwt.evaluation.key', 'utf-8').trim();
    const jwtConfiguration = {
      expiresIn: '12h',
      algorithm: 'HS256',
  };
  const { email, password } = req.body;
  const encryptedPass = md5(password);
  const user = await login(email, encryptedPass);
  const token = jwt.sign(user, secret, jwtConfiguration);
    return res.status(200).json({ user: { ...user, token }, message: 'ok', toLogin: true });
  } catch (error) {
    return res.status(404).json({ user: { role: '' }, message: error.message, toLogin: false });
  }
});

module.exports = router;
