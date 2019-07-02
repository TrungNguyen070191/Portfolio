const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const postController = require("../controllers/postController");

router.get("/getAllPosts", userController.IsAuthenticated, postController.GetAllPost);
router.get("/getPost/:id",userController.IsAuthenticated, postController.GetPostById);
router.put("/updatePost/:id",userController.IsAuthenticated, postController.UpdatePost);
router.delete("/deletePost/:id",userController.IsAuthenticated, postController.DeletePost);
router.post("/addPost", userController.IsAuthenticated, postController.AddPost);
router.post("/uploadImage", userController.IsAuthenticated, postController.AddImageToDirectory, postController.uploadImage);

module.exports = router;

// GET    posts/getAllPosts
// GET    posts/getPost/:id
// PUT    posts/updatePost/:id
// DELETE posts/deletePost/:id
// POST   posts/addPost
// POST   posts/uploadImage
