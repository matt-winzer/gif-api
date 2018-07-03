const Joi = require('joi')

function validateGif(gif) {
  const gifSchema = Joi.object().keys({
    gifUrl: Joi.string().uri().required(),
    description: Joi.string().min(3).required()
  })
  return Joi.validate(gif, gifSchema)
}

module.exports = {
  validateGif
}