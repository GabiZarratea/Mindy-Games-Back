import joi from 'joi';

const gamerRegister = joi.object({
  firstName: joi.string()
    .required()
    .messages({
      'any.required': 'First name is required',
      'string.empty': 'First name is required',
    }),
  lastName: joi.string()
    .required()
    .messages({
      'any.required': 'Last name is required',
      'string.empty': 'Last name is required',
    }),
  email: joi.string()
    .required()
    .email({ minDomainSegments: 2 })
    .messages({
      'any.required': 'Email is required',
      'string.empty': 'Email is required',
      'string.email': 'Invalid email',
    }),
  phone: joi.string()
    .optional()
    .min(10)
    .max(15),
  chooseGame: joi.string()
    .required()
    .messages({
        'any.required': 'Choose game is required',
      }),
  chooseDate: joi.string()
    .required()
    .messages({
      'any.required': 'Choose date is required',
    }),
  acceptTerms: joi.boolean()
    .required()
    .messages({
      'any.required': 'You are required to accept the terms to continue.',
    }),
});

export default gamerRegister;