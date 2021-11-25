const jwt = require('jsonwebtoken');
const jwtKey = require("fs")
  .readFileSync("../back-end/jwt.evaluation.key", { encoding: "utf-8" })
  .trim();

const jwtValid = (token) => {
  // console.log('token', token);
  // console.log('jwtVerify');
    const verify = jwt.verify(token, jwtKey);
    // quando eu faço req.user ou req.qualquerCoisa eu consigo exportar o verify ou qualquer outro nome;
    return verify;
};
module.exports = { jwtValid };
