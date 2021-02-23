const Author = require("../models/author");

const createAuthor = async (req, res) => {
  try {
    const author = new Author({ name: req.body.name });

    await author.save();

    res.status(201).json({
      success: true,
      data: author,
      message: `Author ${author.name} created!`,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

module.exports = {
  createAuthor,
};
