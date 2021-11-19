const jwt = require('jsonwebtoken');
const jwtKey = require("fs")
  .readFileSync("../back-end/jwt.evaluation.key", { encoding: "utf-8" })
  .trim();

const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
};

const jwtLogin =  (check) => {
    const token = jwt.sign({ data: check }, jwtKey, jwtConfig);
    return token;
    };
module.exports = { jwtLogin };
