"use strict";

var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

/**
 * Post Schema
 */
var PostSchema = new Schema({
  categoryId: { type: String, trim: true, required: true },
  userId: { type: String, trim: true, required: true },
  title: { type: String, required: true },
  shortDescription: { type: String, required: true },
  tags: [String],
  mainImage: { type: String, required: true },
  imgList: [
    {
      description: { type: String },
      contentType: { type: String },
      imgPath: { type: String },
      title: { type: String }
    }
  ],
  content: { type: String, required: true },
  comments: [
    {
      userId: { type: String },
      createdDate: { type: Date, default: Date.now },
      text: { type: String }
    }
  ],
  createdDate: { type: Date, default: Date.now },
  show: { type: Boolean, default: true }
});

var PostModel = mongoose.model("Post", PostSchema);

module.exports = PostModel;
