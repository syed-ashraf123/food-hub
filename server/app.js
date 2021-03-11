const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Food = require("./models/Food.js");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const cors = require("cors");
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://syed:7275456455@cluster0.hlj0c.mongodb.net/FoodDatabase?retryWrites=true&w=majority";

mongoose.connect(
  CONNECTION_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB");
  }
);

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./uploads");
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + "_" + file.originalname);
  },
});

var upload = multer({ storage: storage });

app.post("/", upload.single("image"), async (req, res) => {
  new Food({
    name: "Shahi",
    area: "Gomti Nagar",
    address: "sdsdd",
    img: req.file.filename,
  }).save();
});

app.get("/", async (req, res) => {
  var query = { area: "Gomti Nagar" };
  const data = await Food.find(query);
  res.json(data);
});

// new Food({
//   name: "Shahi",
//   area: "Gomti Nagar",
//   address: "sdsdd",
//   dishes: [
//     { name: "kulfi", proce: "1200" },
//     { name: "kulfcci", proce: "1400" },
//   ],
// }).save();

app.listen(4000);
