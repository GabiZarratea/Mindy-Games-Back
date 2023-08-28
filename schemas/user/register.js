import joi from 'joi';

const userRegister = joi.object({
  username: joi.string()
    .required()
    .alphanum()
    .messages({
      'any.required': 'Username is required',
      'string.empty': 'Username is required',
    }),
  email: joi.string()
    .required()
    .email({ minDomainSegments: 2 })
    .messages({
      'any.required': 'Email is required',
      'string.empty': 'Email is required',
      'string.email': 'Invalid email',
    }),
    password: joi.string()
      .required()
      .min(8)
      .max(35)
      .alphanum()
      .messages({
        'any.required': 'Password is required',
        'string.empty': 'Password is required',
        'string.min': 'Password is too short',
        'string.max': 'Password is too long',
      }),
  photo: joi.string()
    .optional()
    .uri()
    .messages({
      'string.uri': 'Invalid photo URL',
    }),
  location: joi.string()
    .optional(),
});

export default userRegister;