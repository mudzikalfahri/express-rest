const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }, () =>
  console.log("connected")
);

app.listen(3000);
