const jwt = require('jsonwebtoken');
const fs = require('fs');

const getSecret = () => fs.readFileSync(
  `${__dirname}/../../jwt.evaluation.key`,
  { encoding: 'utf-8' },
).trim();

// Você pode deixar a função sem senha se quiser, ela vai pegar a senha dentro de jwt.evaluation.key automaticamente :)
const makeCrypt = (payload, secret = getSecret()) => {
  const token = jwt.sign(payload, secret, {
    expiresIn: '30d',
  });
  return token;
};

module.exports = {
  makeCrypt,
};
