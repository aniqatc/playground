require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 3000;
const db = process.env.DB_URI.replace("<PASSWORD>", process.env.DB_PW);

const likeRouter = require("./db/likes/likeRouter");

mongoose
  .connect(db)
  .then(() =>
    console.log(
      "Connected to MongoDB Database:",
      mongoose.connection.db.databaseName,
    ),
  );

app.use(cors());
app.use(express.json());
app.use("/widget/", likeRouter);

app.listen(port, () => {
  console.log(`App running on port: ${port}...`);
});

app.get("/", (req, res) => {
  res.send("Hello world!");
});
