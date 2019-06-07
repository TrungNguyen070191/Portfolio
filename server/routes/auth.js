const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get('/getAllUsers', userController.IsAuthenticated, userController.GetAllUsers);
router.post('/register', userController.Register);
router.post('/signin', userController.SignIn);

module.exports = router;
// GET /auth/getAllUsers
// POST /auth/register
// POST /auth/signin/