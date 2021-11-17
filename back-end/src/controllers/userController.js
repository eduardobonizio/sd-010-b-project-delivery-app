const md5 = require('md5');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const { 
  getUserByEmailService, 
  createUserService, 
  getUserByNameService } = require('../services/userService');

let secret = fs
  .readFileSync(path.resolve('jwt.evaluation.key'), { encoding: 'utf8', flag: 'r' });

secret = secret.trim();

const getUserByEmail = async (req, res) => {
  const { email, password } = req.body;
  if (!email) return res.status(400).json({ message: 'Campo de email vazio' });
  
  try {
    const result = await getUserByEmailService(email); 
    const jwtConfig = { expiresIn: '1h', algorithm: 'HS256' };
    const token = jwt.sign({ data: result.dataValues }, secret, jwtConfig);
    if (result === null) return res.status(404).json({ message: 'Usuário nao existente' });
    const { password: dbPassword } = result;
    console.log(dbPassword, md5(password));
    if (md5(password) === dbPassword) {
      delete result.dataValues.password;
      delete result.dataValues.id;
      return res.status(200).json({ token, ...result.dataValues });
    }
    return res.status(401).json({ Message: 'Senha incorreta!' });
  } catch (err) {
    return res.status(500).json({ messa: 'Erro interno', err });
  }
};

const createUser = async (req, res) => {
  const { registerName: name, registerEmail: email, registerPassword, role } = req.body;
  const nameResult = await getUserByNameService(name);
  const emailResult = await getUserByEmailService(email);
  if (emailResult !== null) {
    return res.status(409).json({ message: 'Email já cadastrado' });
  }
  if (nameResult !== null) {
    return res.status(409).json({ message: 'Email já cadastrado' });
  }
  const password = md5(registerPassword);
  try {
    const result = await createUserService({ name, email, password, role });
    return res.status(201).json({ message: 'User created', result });
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', err });
  }
};

module.exports = {
  getUserByEmail,
  createUser,
};
