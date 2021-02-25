const express = require("express");

const router = express.Router();

const authController = require("../controllers/auth.controller");

/* get  */
router.post("/", authController.loginWithEmail);

module.exports = router;
