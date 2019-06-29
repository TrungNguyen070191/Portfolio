const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const postController = require("../controllers/postController");
const multer = require("multer"),
  MIME_TYPE_MAP = {
    "image/png": "png",
    "image/jpeg": "jpeg",
    "image/jpg": "jpg"
  },
  storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const isValid = MIME_TYPE_MAP[file.mimetype];
      let error = new Error("Invalid mime type");
      if (isValid) {
        error = null;
      }
      cb(error, "assets/images");
    },
    filename: (req, file, cb) => {
      const name = file.originalname
        .toLowerCase()
        .split(" ")
        .join("-");
      const ext = MIME_TYPE_MAP[file.mimetype];
      cb(null, name + "-" + Date.now() + "." + ext);
    }
  }),
  // cpUpload = multer({ storage: storage }).fields([{ name: "mainImage", maxCount: 1 }, { name: "imgList", maxCount: 8 }]);
  cpUpload = multer({ storage: storage }).single("image");

router.get("/getAllPosts", userController.IsAuthenticated, postController.GetAllPost);
router.get("/getPost/:id", postController.GetPostById);
router.put("/updatePost/:id", postController.UpdatePost);
router.post("/addPost", userController.IsAuthenticated, postController.AddPost);
router.post("/uploadImage", userController.IsAuthenticated, cpUpload, postController.uploadImage);

module.exports = router;

// GET posts/getAllPosts/
// POST posts/addPost
