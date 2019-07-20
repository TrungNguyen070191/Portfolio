const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const pftUserController = require("../controllers/pftUserController");

router.get('/getAllUsers', userController.IsAuthenticated, userController.GetAllUsers);
router.post('/register', userController.Register);
router.post('/signin', userController.SignIn);

router.get('/getAllPFTUsers', pftUserController.GetAllUsers);
router.post('/registerPFTUser', pftUserController.Register);
// router.post('/signinPFTUser', pftUserController.SignIn);
module.exports = router;
// GET /auth/getAllUsers
// POST /auth/register
// POST /auth/signin/