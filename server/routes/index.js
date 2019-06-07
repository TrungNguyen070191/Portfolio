const express = require("express");
const router = express.Router();

const rootRoutes = require('./root');
// const accountRoutes = require('./account.js');
const authRoutes = require('./auth.js');

router.use("/", rootRoutes);
// router.use("/accounts", accountRoutes);
router.use("/auth", authRoutes);

module.exports = router;