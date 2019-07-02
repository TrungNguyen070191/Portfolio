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
    return await db.GetOneAsync(this.key, { $or: [{ _id: ObjectId(id), show: true }] });
  }

  async UpdatePost(id, data) {
    return await db.UpdateOneAsync(this.key, { _id: ObjectId(id) }, {$set:{
      "categoryId": data.categoryId,
      "userId": data.userId,
      "title": data.title,
      "shortDescription": data.shortDescription,
      "tags": data.tags,
      "mainImage": data.tags,
      "imgList": data.imgList,
      "content": data.content,
      "comments": data.comments,
      "show": data.show
    }});
  }

  async DeletePost(id) {
    return await db.UpdateOneAsync(this.key, { _id: ObjectId(id) }, {$set:{
      "show": false
    }});
  }
}

module.exports = PostRepository;
