const { getUserByEmailService } = require('../services/userService');
const md5 = require('md5');

const getUserByEmail = async (req, res) => {
  const { email, password } = req.body;
  if(!email){
    return res.status(400).json({message: 'Campo de email vazio'})
  }
  try{
    const result = await getUserByEmailService(email);
    if(result === null){
      return res.status(404).json({message: 'Usuário nao existente'})
    }
    const { password: dbPassword } = result;
    if(md5(password) === dbPassword){
      return res.status(200).json({message: 'Logado com sucesso!'});
    }
    return res.status(401).json({ Message: 'Senha incorreta!' });
  }catch(err){
    return res.status(500).json({messa: 'Erro interno', err})
  }
}

module.exports={
  getUserByEmail,
}
