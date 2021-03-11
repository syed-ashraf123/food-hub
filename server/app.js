const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Food = require("./models/Food.js");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const cors = require("cors");
app.use(cors());
app.use(express.static(__dirname + "/uploads"));
app.use("/images", express.static(__dirname + "/uploads/"));
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

app.post(
  "/",
  upload.fields([{ name: "thumbnail", maxCount: 1 }]),
  async (req, res) => {
    new Food({
      name: req.body.name,
      area: req.body.area,
      address: req.body.address,
      thumbnail: req.files["thumbnail"][0].filename,
      // img: req.file.filename,
    }).save();
    res.status(200).send({ Success: "Posted" });
  }
);

app.get("/", async (req, res) => {
  var query = { area: req.query.area };
  const data = await Food.find(query);
  res.json(data);
});

app.get("/items", async (req, res) => {
  var query = { _id: req.query.id };
  const data = await Food.find(query);
  res.status(200).send(data);
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
