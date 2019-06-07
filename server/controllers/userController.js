'use strict';
var jwt = require('jsonwebtoken'),
    jsonwebtoken = require("jsonwebtoken"),
    bcrypt = require('bcrypt'),
    config = require("../common/config"),
    errors = require("../common/errorMessage"),
    Helpers = require('../common/helpers'),
    UserRepository = require('../repositories/userRepository'),
    userRepo = new UserRepository();

// USING FOR server.js
exports.GetAllUsers = async function (req, res) {
    let users = await userRepo.GetAllAsync();
    if (users === null || users === undefined) {
        res.end(errors.userNotFound);
        return false;
    }
    res.end(JSON.stringify(users));
    console.log('Running GetAllUser()');
    return true;
};

exports.Register = async function (req, res) {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    let result = await userRepo.AddNewAsync(req.body);
    if (result === null || result === undefined) {
        res.end('Register is not working!');
        return false;
    }
    res.end(JSON.stringify(result));
    console.log('Running Register Account()');
    return true;
};

exports.SignIn = async function (req, res) {
    let user = await userRepo.SignIn(req.body.email);
    if (user === null || user === undefined) {
        res.end(errors.userNotFound);
        return false;
    } else {
        if (!Helpers.comparePassword(req.body.password, user.password)) {
            res.json({ message: errors.pwdIncorrect });
        } else {
            var exp = new Date();
            return res.json({ token: jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id, exp: exp.setMinutes(exp.getMinutes() + config.jwtToken.expires) }, config.jwtToken.secret) });
        }
    }
};

exports.IsAuthenticated = function (req, res, next) {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === config.jwtToken.key) {
        jsonwebtoken.verify(req.headers.authorization.split(' ')[1], config.jwtToken.secret, function (err, decode) {
            if (err || decode === undefined) {
                req.user = undefined;
                return res.json({ message: errors.unauthorized });
            } else {
                req.user = decode;
                var current = new Date();
                if (current.getTime() > decode.exp) {
                    return res.json({ message: errors.unauthorized });
                }
                return next();
            }
        });
    } else {
        req.user = undefined;
        return res.json({ message: errors.unauthorized });
    }
};


// USING FOR api.js
class UserController {
    async GetAllUsers(req, res) {
        let users = await userRepo.GetAllAsync();
        if (users === null || users === undefined) {
            res.end(errors.userNotFound);
            return false;
        }
        res.end(JSON.stringify(users));
        console.log('Running GetAllUser()');
        return true;
    }

}

// module.exports = UserController;
