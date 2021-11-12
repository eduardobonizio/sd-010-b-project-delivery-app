const Joi = require('joi');
const { ApiError } = require('../../utils/ApiError');

const validateUserData = async (body) => {
  const { error } = Joi.object({
    name: Joi.string().min(12).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required().messages({
      'string.min': '"password" length must be 6 characters long',
    }),
  }).validate(body);
  if (error) {
    throw new ApiError(error.details[0].message, 400);
  }
};

module.exports = {
  validateUserData,
};
