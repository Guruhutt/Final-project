const { Joi, celebrate } = require("celebrate");
const validator = require("validator");

const validateURL = (value, helpers) => {
  if (validator.isURL(value)) {
    return value;
  }
  return helpers.error("string.uri");
};

const validateUserUpdate = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30).messages({
      "string.min": 'The minimum length of the "name" field is 2',
      "string.max": 'The maximum length of the "name" field is 30',
      "string.empty": 'The "name" field must be filled in',
    }),
  }),
});

const validateUserSignup = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().messages({
      "string.email": "Invalid email format",
    }),
    password: Joi.string().required().messages({
      "string.empty": "Password is required",
    }),
    name: Joi.string().required().min(2).max(30).messages({
      "string.min": "Name must be at least 2 characters",
      "string.max": "Name must be no more than 30 characters",
    }),
  }),
});

const validateUserSignin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().messages({
      "string.email": "Invalid email format",
    }),
    password: Joi.string().required().messages({
      "string.empty": "Password is required",
    }),
  }),
});

module.exports = {
  validateUserUpdate,
  validateUserSignup,
  validateUserSignin,
};
