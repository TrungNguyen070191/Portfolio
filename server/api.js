const express = require("express");
const finalhandler = require("finalhandler");
const bodyParser = require("body-parser");
const http = require("http");
const Router = require("router");
const routers = express.Router();

const app = express();
const hostName = "127.0.0.1";
const port = process.env.PORT || 3000;

// ROUTERS
var opts = { mergeParams: true };
var router = new Router(opts);
var api = new Router();
var users = new Router();
var accounts = new Router();
var post = new Router();

router.use("/api/", api);
api.use("/users/", users);
api.use("/accounts/", accounts);
api.use("/posts/", post);

api.use(bodyParser.json());
users.use(bodyParser.json());
accounts.use(bodyParser.json());
post.use(bodyParser.json());

// CONTROLLERS
const UserController = require("./controllers/userController");
const AccountController = require("./controllers/accountController");
const PostController = require("./controllers/postController");

var userService = new UserController();
var accountService = new AccountController();
var PostController = new PostController();

/*---------------------------------------------------
DEFINE APIs OF USER
---------------------------------------------------*/
users.get("", function(req, res) {
  userService.GetAllUsers(req, res);
});

/*---------------------------------------------------
DEFINE APIs OF ACCOUNT
---------------------------------------------------*/
accounts.get("", function(req, res) {
  accountService.GetAllAccounts(req, res);
});

accounts.post("/signin/", function(req, res) {
  accountService.SignIn(req, res);
});

/*---------------------------------------------------
DEFINE APIs OF POST
---------------------------------------------------*/
post.post("/addpost/", function(req, res) {
  PostController.AddPost(req, res);
});

post.get("/getAllPost", function(req, res) {
  PostController.GetAllPost(req, res);
});

// CREATE SERVER
const server = http.createServer((req, res) => {
  req.on("error", err => {
    console.error(err);
  });

  res.on("error", err => {
    console.error(err);
  });

  router(req, res, finalhandler(req, res));
});

server.listen(port, () => {
  console.log(`Server is running at http://${hostName}:${port}/`);
});
