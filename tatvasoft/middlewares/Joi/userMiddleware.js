const Joi = require('joi')

module.exports = {
    /** User Register Middleware */
    registrationBody: Joi.object({
        first_name: Joi.string().max(200).required(),
        last_name: Joi.string().max(200).required(),
        email: Joi.string().max(200).required(),
        password: Joi.string().min(12).required(),
        dob: Joi.string().required(),
        role: Joi.string().required(),
    })
}