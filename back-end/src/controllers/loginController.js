 // model para fazer o login
 const md5 = require('md5');

 const secret = 'secreto';
 const jwtConfig = {
  expiresIn: '30d',
  algorithm: 'HS256',
};

const loginController = (req, res) => {
  const { email, password } = req.body;
  const criptPassword = md5(password)

  //fazer if para verificar se o banco achou o usuario e retornar ELE NA CONST dadosPessoa
  const token = jwt.sign({ dadosPessoa }, secret, jwtConfig);
  res.status(200).json(ObjetoPessoaUsuaria, token);

}

const register = (req, res) => {
  const { name, email, password } = req.body;
  const criptPassword = md5(password)
  // chamar model para inserir no db
  res.status(201).json({ message: 'Created'});

}

module.exports = { loginController, register }