const Controllers = require('../controllers')

module.exports = (router) => {
    router.post('/users/login', Controllers.user.login);
    router.post('/users/register', Controllers.user.register);
}