const md5 = require('md5');
const { getUserByEmailService, 
  createUserService, getUserByNameService } = require('../services/userService');

const getUserByEmail = async (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(400).json({ message: 'Campo de email vazio' });
  }
  try {
    const result = await getUserByEmailService(email);
    if (result === null) {
      return res.status(404).json({ message: 'Usuário nao existente' });
    }
    const { password: dbPassword } = result;
    if (md5(password) === dbPassword) {
      return res.status(200).json({ message: 'Logado com sucesso!' });
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
  if (emailResult || nameResult) {
    return res.status(409).json({ message: 'Email ou nome já cadastrados' });
  }
  // if (!name || !email || !registerPassword) {
  //   return req.status(400).json({ message: 'Campos inválidos!' });
  // }
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
