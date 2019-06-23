'use strict';

var ObjectId = require('mongodb').ObjectID;
var enums = require('../common/constants');
var dbAccess = require('../dbAccess');

var db = new dbAccess();

class PostRepository {
  constructor() {
    this.key = enums.collectionsName.POST;
  }

  async GetAllAsync() {
    return await db.GetAllAsync(this.key);
  }

  async AddNewAsync(data) {
    return await db.AddNewAsync(this.key, data);
  }
}

module.exports = PostRepository;
