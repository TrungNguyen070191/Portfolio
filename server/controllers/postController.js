"use strict";
var Post = require("../models/post"),
  PostRepository = require("../repositories/postRepository"),
  postRepo = new PostRepository()
  errors = require("../common/errorMessage");

exports.GetAllPost = async (req, res, next) => {
  let posts = await postRepo.GetAllAsync();
  if(posts === null || posts ===undefined){
    res.end(errors.post);
    )
  }
};
