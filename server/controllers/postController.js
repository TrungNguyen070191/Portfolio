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
 * Upload image
 */
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
  const post = new Post({
    categoryId: req.body.categoryId,
    userId: req.body.userId,
    title: req.body.title,
    shortDescription: req.body.shortDescription,
    shortDescription: req.body.shortDescription,
    tags: req.body.tags,
    mainImage: req.body.tags,
    imgList: req.body.imgList,
    content: req.body.content,
    comments: req.body.comments
  });
  let result = await postRepo.AddNewAsync(post);
  if (result === null || result === undefined) {
    res.end("Add post is not working!");
    return false;
  }
  res.end(JSON.stringify(result));
  console.log("Running Add Post()");
  return true;
};

/**
 * Get Post by Id
 */
exports.GetPostById = async (req, res) => {
  let post = await postRepo.GetPostById(req.params.id);
  if (post) {
    res.status(200).json(post);
  } else {
    res.status(404).json({ message: "Post not found!" });
  }
};

/**
 * Update Post by Id
 */
exports.UpdatePost = async (req, res) => {
  const post = new Post({
    _id: req.body.id,
    categoryId: req.body.categoryId,
    userId: req.body.userId,
    title: req.body.title,
    shortDescription: req.body.shortDescription,
    shortDescription: req.body.shortDescription,
    tags: req.body.tags,
    mainImage: req.body.tags,
    imgList: req.body.imgList,
    content: req.body.content,
    comments: req.body.comments,
    show: req.body.show
  });
  let queue = await postRepo.UpdatePost(req.params.id, post);
  res.status(200).json("Update complete");
};

exports.DeletePost = async (req, res) => {
  const post = new Post({
    _id: req.body.id,
    categoryId: req.body.categoryId,
    userId: req.body.userId,
    title: req.body.title,
    shortDescription: req.body.shortDescription,
    shortDescription: req.body.shortDescription,
    tags: req.body.tags,
    mainImage: req.body.tags,
    imgList: req.body.imgList,
    content: req.body.content,
    comments: req.body.comments,
    show: false
  });
  let queue = await postRepo.DeletePost(req.params.id, post);
  res.status(200).json("Delete complete");
};
