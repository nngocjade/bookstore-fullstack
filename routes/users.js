const express = require("express");

const router = express.Router();

const usersController = require("../controllers/users.controller");

/* CREATE users */
router.post("/", usersController.createUser);

/* GET all users */
router.get("/:id", usersController.getSingleUser);

// /* GET single author by id */
// router.get("/:id", authorsController.getSingleAuthor);

// /* UPDATE author by id */
// router.put("/:id", authorsController.updateAuthor);

// /* DELETE author by id */
// router.delete("/:id", authorsController.deleteAuthor);

module.exports = router;
