'use strict';

var ObjectId = require('mongodb').ObjectID;
var enums = require('../common/constants');
var dbAccess = require('../dbAccess');

var db = new dbAccess();

class UserRepository {
    constructor() {
        this.key = enums.collectionsName.USER;
    }

    async GetAllAsync() {
        return await db.GetAllAsync(this.key);
    }

    async SignIn(email) {
        return await db.GetOneAsync(this.key, { $or: [{ email: email }] });
    }

    async AddNewAsync(data) {
        return await db.AddNewAsync(this.key, data);
    }
}

module.exports = UserRepository;