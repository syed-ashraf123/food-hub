const express = require("express");
const bodyParser = require("body-parser");
// const jsonParser = bodyParser.json();
// const urlencodedParser = bodyParser.urlencoded({ extended: false })

const mongoose = require("mongoose");
const app = express();
const Food = require("./models/Food.js");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const cors = require("cors");
const SellerDetails = require("./models/SellerDetails");
const fileUpload = require("express-fileupload");
app.use(fileUpload());

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
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
  "/restaurantregisteration",
  // upload.fields([
  //   { name: "thumbnail", maxCount: 3 },
  //   { name: "id", maxCount: 1 },
  // ]),
  async (req, res) => {
    // try {
    let sampleFile;
    let uploadPath;
    console.log(req.body);
    console.log(req.files.id.name);
    // console.log(req.files.thumbnail[0].name);
    // console.log(req.files.thumbnail);
    new SellerDetails({
      ownerName: req.body.name,
      email: req.body.email,
      password: req.body.password,
      area: req.body.area,
      restaurantName: req.body.restaurantname,
      address: req.body.address,
      cruisine: req.body.cruisine,
      minimumOrder: req.body.minimumorder,
      tel: req.body.tel,
      id: req.files.id.name + Date.now(),
      thumbnail: [
        Date.now() + req.files.thumbnail.name,
        Date.now() + req.files.thumbnail1.name,
        Date.now() + req.files.thumbnail2.name,
      ],
    }).save();
    const id = req.files.id;
    const thumbnail = req.files.thumbnail;
    const thumbnail1 = req.files.thumbnail1;
    const thumbnail2 = req.files.thumbnail2;
    uploadPath = __dirname + "/uploads/" + id.name;
    id.mv(uploadPath);
    uploadPath = __dirname + "/uploads/" + Date.now() + thumbnail.name;
    thumbnail.mv(uploadPath);
    uploadPath = __dirname + "/uploads/" + Date.now() + thumbnail1.name;
    thumbnail1.mv(uploadPath);
    uploadPath = __dirname + "/uploads/" + Date.now() + thumbnail2.name;
    thumbnail2.mv(uploadPath);
    res.status(200).send({ Success: "Posted" });
    // } catch (error) {
    //   res.status(400).send(error);
    // }
  }
);

// app.post(
//   "/sellerregisteration",
//   upload.fields([
//     { name: "thumbnail", maxCount: 1 },
//     { name: "id", maxCount: 3 },
//   ]),
//   async (req, res) => {
//     new Food({
//       name: req.body.name,
//       area: req.body.area,
//       address: req.body.address,
//       thumbnail: req.files["thumbnail"][0].filename,
//       // img: req.file.filename,
//     }).save();
//     res.status(200).send({ Success: "Posted" });
//   }
// );

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
