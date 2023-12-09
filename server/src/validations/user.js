const Joi = require('joi');

module.exports = {
    createUser : (userObj) => {
        const schema = Joi.object({
            email: Joi.string().email().lowercase().required(),
            password: Joi.string().min(8).required(),
        });
        return schema.validate(userObj);
    }
}