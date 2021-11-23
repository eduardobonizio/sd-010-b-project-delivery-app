/*
Material consultado sobre Joi
https://www.digitalocean.com/community/tutorials/how-to-use-joi-for-node-api-schema-validation
https://joi.dev/api/?v=17.4.2#general-usage
*/
const Joi = require('joi');

const id = Joi.number().integer().positive();
const text = Joi.string();
/*
Material consultado sobre validar email com Joi Library
https://stackoverflow.com/a/61589351
*/

const userDataSchema = Joi.object().keys({
id,
email: text.email({ minDomainAtoms: 2 }).required(),
password: text.min(6).required(),
}); 

module.exports = { userDataSchema };