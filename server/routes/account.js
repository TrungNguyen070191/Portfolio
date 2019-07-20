const express = require("express");
const router = express.Router();

const accountController = require("../controllers/accountController");
const userController = require("../controllers/userController");
const pftAccountController = require("../controllers/pftAccountController");

router.get('/', userController.IsAuthenticated, accountController.GetAllAccounts);
router.post('/signin', accountController.SignIn);
router.get('/getAllPFTAccount', pftAccountController.GetAllAccounts);
router.post('/addPFTAccount', pftAccountController.Register);

module.exports = router;

// GET /accounts/
// POST /accounts/signin/