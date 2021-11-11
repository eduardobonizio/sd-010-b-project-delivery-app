const { getUserByEmailService } = require('../services/userService')

const getUserByEmail = async (req, res) => {
  const { email } = req.body;
  if(!email){
    return res.status(400).json({message: 'Campo de email vazio'})
  }
  try{
    const result = await getUserByEmailService(email);
    if(result === null){
      return res.status(404).json({message: 'Usuário nao existente'})
    }
    return res.status(200).json(result);
  }catch(err){
    return res.status(500).json({messa: 'Erro interno', err})
  }
}

module.exports={
  getUserByEmail,
}
