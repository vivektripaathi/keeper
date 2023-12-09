const models = require('../models');

module.exports = {
    createUser: async (userObj) => {
        let user = new models.user(userObj);
        return await user.save();
    },
    getUserByEmail: async (email) => {
        return models.user.findOne({ email });
    }
}