const express = require("express");

const router = express.Router();

const authorsController = require("../controllers/authors.controller");

/* GET users listing. */

router.post("/", authorsController.createAuthor);

module.exports = router;
