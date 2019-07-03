'use strict';

var ObjectId = require('mongodb').ObjectID;
var dbAccess = require('../dbAccess');
var enums = require('../common/constants');

var db = new dbAccess();

class PFTAccountRepository {
    constructor() {
        this.key = enums.ptfCollectionsName.ACCOUNT;
    }

    async GetAllAsync() {
        return await db.GetAllAsync(this.key);
    }

    async SignInAsync(uName, pwd) {
        return await db.GetOneAsync(this.key, { $or: [{ userName: uName, password: pwd }] });
    }

    async Register(data) {
        return await db.AddNewAsync(this.key, data);
    }
}

module.exports = PFTAccountRepository;