const path = require('path');
const Dao = require('../dao');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config({path: path.join(__dirname , '../../', '.env')});

module.exports = {
    createUser: async (userObj) => {
        try {
            // Check if user with the same email already exists
            const existingUser = await Dao.userDao.getUserByEmail(userObj.email);
            if (existingUser) return false;
            // hash new user's password 
            const hashedPassword = await bcrypt.hash(userObj.password, 10);
            const newUser = await Dao.userDao.createUser({
                ...userObj,
                password: hashedPassword
            });
            newUser.password = undefined;
            return newUser;
        }catch (err) {
            if(err.name === 'SequelizeDatabaseError') return false;
            else throw new Error('Failed to register user');
        }
    },

    createAuthToken : async (userObj, tokenExpiry = '60d') => {
        const secret = process.env.SECRET;
        try {
            const token = jwt.sign({userId : userObj.id}, secret, {expiresIn : tokenExpiry});
            return token;
        } catch (err) {
            throw new Error('Failed to create auth token');
        }
    },

    authenticateUser: async (password, userObj) => {
        try {
            if(bcrypt.compareSync(password, userObj.password)) return true;
            return false;
        } catch (err) {
            console.log(err);
            throw new Error('Failed to authenticate user');
        }
    },

    getUser: async (userEmail) => {
        try{
            const user = await Dao.userDao.getUserByEmail(userEmail);
            if (!user) return false;
            return user;
        }
        catch (err) {
            if(err.name === 'SequelizeDatabaseError') return false;
            else throw new Error('Failed to get user');
        }
    },
}