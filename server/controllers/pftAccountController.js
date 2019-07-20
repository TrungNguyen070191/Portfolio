'use strict';
var bcrypt = require('bcrypt');
var Helpers = require('../common/helpers'),
    PFTAccountRepository = require('../repositories/pftAccountReposotory'),

    accountRepo = new PFTAccountRepository();

exports.Index = function (req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

exports.GetAllAccounts = async function (req, res) {
    let accounts = await accountRepo.GetAllAsync();
    if (accounts === null) {
        res.end('Accounts is not found!');
        return false;
    }
    res.end(JSON.stringify(accounts));
    console.log('Running GetAllAccounts()');
    return true;
};

exports.SignIn = async function (req, res) {
    let account = await accountRepo.SignInAsync(req.body.userName, req.body.password);
    if (account === null || account === undefined) {
        res.end('Authentication failed. Account is not found!');
        return false;
    } else {
        if (!Helpers.comparePassword(req.body.password, account.password)) {
            res.status(401).json({ message: 'Authentication failed. Wrong password.' });
        } else {
            return res.json({ token: jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id }, 'RESTFULAPIs') });
        }
    }
};

exports.Register = async function (req, res) {
    console.log(req.body)
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    let result = await accountRepo.Register(req.body);
    if (result === null || result === undefined) {
        res.end('Register is not working!');
        return false;
    }
    res.end(JSON.stringify(result));
    console.log('Running Register Account()');
    return true;
};

class PFTAccountController {
    async GetAllAccounts(req, res) {
        let accounts = await accountRepo.GetAllAsync();
        if (accounts === null) {
            res.end('Accounts is not found!');
            return false;
        }
        res.end(JSON.stringify(accounts));
        console.log('Running GetAllAccounts()');
        return true;
    }

    async SignIn(req, res) {
        let account = await accountRepo.SignInAsync(req.body.userName, req.body.password);
        if (account === null) {
            res.end('Account is not found!');
            return false;
        }
        res.end(JSON.stringify(accounts));
        console.log('Running SignIn()');
        return true;
    }

    async Register(req, res) {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        let result = await accountRepo.AddNewAsync(req.body);
        if (result === null || result === undefined) {
            res.end('Register is not working!');
            return false;
        }
        res.end(JSON.stringify(result));
        console.log('Running Register Account()');
        return true;
    }
}