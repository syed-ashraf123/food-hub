const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const SellerDetails = require("./models/SellerDetails.js");
// const fs = require("fs");
// const path = require("path");
// const multer = require("multer");
const cors = require("cors");
const fileUpload = require("express-fileupload");

app.use(fileUpload());
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//Routers

const sellerregisterationRoute = require("./routes/sellerregisteration");
const sellerloginRoute = require("./routes/sellerlogin");
const sellerdashboardRoute = require("./routes/sellerdashboard");
const additemsRoute = require("./routes/additems");
const itemsRoute = require("./routes/items");
const usersignupRoute = require("./routes/usersignup");
const userloginRoute = require("./routes/userlogin");
const userdetailsRoute = require("./routes/userdetails");

// parse application/json
app.use(bodyParser.json());
// app.use(express.static(__dirname + "/uploads"));
app.use("/images", express.static(__dirname + "/routes/uploads/"));
// app.use("/images", express.static(__dirname + "/routes/uploads/"));
const CONNECTION_URL =
  "mongodb+srv://syed:7275456455@cluster0.hlj0c.mongodb.net/FoodDatabase?retryWrites=true&w=majority";

mongoose.connect(
  CONNECTION_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB");
  }
);

app.use("/restaurantregisteration", sellerregisterationRoute);
app.use("/sellerlogin", sellerloginRoute);
app.use("/sellerdashboard", sellerdashboardRoute);
app.use("/additems", additemsRoute);
app.use("/items", itemsRoute);
app.use("/usersignup", usersignupRoute);
app.use("/userlogin", userloginRoute);
app.use("/userdetails", userdetailsRoute);

app.get("/", async (req, res) => {
  var query = { area: req.query.area };
  const data = await SellerDetails.find(query);
  res.json(data);
});

app.listen(4000);
