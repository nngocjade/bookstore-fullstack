const createAuthor = (req, res) => {
  const name = req.body.name;
  res.send(`Hello ${name}!!!`);
};

module.exports = {
  createAuthor,
};
