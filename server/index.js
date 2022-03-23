require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(require("./routes"));

mongoose
  .connect(process.env.MONGO_PORT)
  .then(() => {
    console.log("Connected");
    app.listen(process.env.PORT);
  })
  .catch((e) => {
    console.log("Ошибка при подключении к БД" + e);
  });
