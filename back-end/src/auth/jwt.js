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

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;
  const segredo = await getSecret();

  if (!token) {
    return res.status(401).json({ message: 'missing auth token' });
    }
    const decoded = jwt.verify(token, segredo);
    try {
      const userWithoutPassword = {
        userEmail: decoded.user.email,
        userRole: decoded.user.role,
        userName: decoded.user.name,
      };
        req.user = userWithoutPassword;

        next();
      } catch (err) {
  return res.status(401).json({ err: 'deu ruim :/' });
}
};

module.exports = {
  makeCrypt,
  validateToken,
};
