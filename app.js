const mongoose = require("mongoose");

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
