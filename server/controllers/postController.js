"use strict";
var Post = require("../models/postModel"),
  PostRepository = require("../repositories/postRepository"),
  postRepo = new PostRepository(),
  errors = require("../common/errorMessage");

/**
 * Get all post
 */
exports.GetAllPost = async (req, res) => {
  let posts = await postRepo.GetAllAsync();
  if (posts === null || posts === undefined) {
    res.end(errors.postNotFound);
    return false;
  }
  res.end(JSON.stringify(posts));
  console.log("Running GetAllPost()");
  return true;
};

exports.uploadImage = async (req, res) => {
  const url = req.protocol + "://" + req.get("host");
  const imagePath = url + "/assets/images/" + req.file.filename;
  res.end(
    res.status(201).json({
      message: "Image add success",
      imagePath: imagePath
    })
  );
  console.log("Running Upload Image()");
  return true;
};

/**
 * Add post
 */
exports.AddPost = async (req, res) => {
  let result = await postRepo.AddNewAsync(req.body);
  if (result === null || result === undefined) {
    res.end("Add post is not working!");
    return false;
  }
  res.end(JSON.stringify(result));
  console.log("Running Add Post()");
  return true;
};
