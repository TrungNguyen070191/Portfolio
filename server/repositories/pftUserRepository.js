'use strict';

var dbAccess = require('../dbAccess');
var enums = require('../common/constants');

var db = new dbAccess();

class PFTUserRepository {
    constructor() {
        this.key = enums.ptfCollectionsName.USER;
    }

    async GetAllAsync() {
        return await db.GetAllAsync(this.key);
    }

    // async SignIn(email) {
    //     return await db.GetOneAsync(this.key, { $or: [{ email: email }] });
    // }

    async AddNewAsync(data) {
        return await db.AddNewAsync(this.key, data);
    }
}

module.exports = PFTUserRepository;