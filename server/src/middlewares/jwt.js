const expressJwt = require('express-jwt');
const path = require('path');
require('dotenv').config({path: path.join(__dirname , '../../', '.env')});

function authJwt() {
    const secret = process.env.SECRET;
    const api = process.env.API_URL;
    console.log(api);
    return expressJwt({
        secret,
        algorithms: ['HS256'],
    })
    .unless({
        path: [
            {url : /\/api\/users(.*)/,methods: ['POST', 'GET']},
        ]
    })
}

module.exports = authJwt