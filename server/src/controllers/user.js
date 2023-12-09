const Services = require('../services')
const Validations = require('../validations');

module.exports = {
    register: async(req, res, next) => {
        const { error } = Validations.user.createUser(req.body);
        if(error) return next(error);
        try {
            const newUser = await Services.userServices.createUser(req.body)
            if(newUser){
                const token = await Services.userServices.createAuthToken(newUser);
                if (token) res.json({token});
            } 
            else return next( {name : 'Duplicate Value', message : 'User email already exists'} );
        } catch (err) {
            return next(err);
        }
    },

    getUser: async(req, res, next) => {
        const { email } = req.params;
        try{
            const user = await Services.userServices.getUser(email);
            if(user) res.json(user);
            else return next( { name : 'Not Found', message : 'User not found'} );
        }
        catch (err) {
            return next(err);
        }
    },

    login: async(req, res, next) => {
        const { error } = Validations.user.createUser(req.body);
        const { email, password } = req.body;
        if(error) return next(error);
        try {
            // check if the user is registered or not registered
            const user = await Services.userServices.getUser(email);
            if(!user) return next( { name : 'Not Found', message : 'User not found'} );
            // checking credentials
            const userAunthenticated = await Services.userServices.authenticateUser(password, user);
            if(userAunthenticated) {
                const token = await Services.userServices.createAuthToken(user);
                res.json({token});
            }
            else {
                return next( { name : 'UnauthorizedError', message: 'Email or password is incorrect!'})
            } 
        } catch (err) {
            return next(err);
        }
    }
}
