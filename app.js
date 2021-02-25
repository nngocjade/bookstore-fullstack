var express = require("express");
var app = express();
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");

const mongoose = require("mongoose");
const authorsRouter = require("./routes/authors");
const booksRouter = require("./routes/books");
const genresRouter = require("./routes/genres");
const usersRouter = require("./routes/users");

mongoose
  .connect("mongodb://localhost/test", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB database connection established successfully!");
  })
  .catch((err) => console.log("Could not connect to database!", err));

const db = mongoose.connection;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/authors", authorsRouter);
app.use("/books", booksRouter);
app.use("/genres", genresRouter);

module.exports = app;
