"use strict";

var ObjectId = require("mongodb").ObjectID;
var enums = require("../common/constants");
var dbAccess = require("../dbAccess");

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

  async GetPostById(id) {
    return await db.GetOneAsync(this.key, { $or: [{ _id: id, show: true }] });
  }

  async UpdatePost(id, data) {
    return await db.UpdateOneAsync(this.key, { _id: id }, data);
  }

  async DeletePost(id, data) {
    return await db.UpdateOneAsync(this.key, { _id: id }, data);
  }
}

module.exports = PostRepository;
