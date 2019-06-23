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

/**
 * Add post
 */
exports.AddPost = async (req, res) => {
  const url = req.protocol + "://" + req.get("host");
  req.body.mainImage = url + "/assets/images/" + req.files["mainImage"][0].filename;
  if (req.body.imgList) {
    req.body.imgList = req.imgList.map(image, index => {
      return {
        description: image.description,
        contentType: image.contentType,
        imgPath: url + "/assets/images" + req.files["imgList"][index].filename,
        title: image.title
      };
    });
  }
  let result = await postRepo.AddNewAsync(req.body);
  if (result === null || result === undefined) {
    res.end("Add post is not working!");
    return false;
  }
  res.end(JSON.stringify(result));
  console.log("Running Add Post()");
  return true;
};
