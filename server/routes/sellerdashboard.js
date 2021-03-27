const router = require("express").Router();
const sellerdetails = require("../models/SellerDetails");
const verify = require("./verifytoken");

// router.post(
//   "/",

//   async (req, res) => {
//     //Email present or not
//     const seller = await sellerdetails.findOne({ email: req.body.email });
//     if (!seller) return res.status(400).send({ msg: "Email not registered" });

//     //Password is correct or not
//     const validPass = await bcrypt.compare(req.body.password, seller.password);
//     if (!validPass) return res.status(400).send({ msg: "Password is Wrong" });

//     // Create and assign token
//     const token = jwt.sign({ _id: seller._id }, "tghfythvh");
//     res.header("seller-auth-token", token);
//     res.status(200).send({ msg: token });
//   }
// );
// module.exports = router;
router.get(
  "/",
  verify,

  async (req, res) => {
    res.status(200).send({ msg: "Hey You are Verified" });
    //Email present or not
    // const seller = await sellerdetails.findOne({ email: req.body.email });
    // if (!seller) return res.status(400).send({ msg: "Email not registered" });

    // //Password is correct or not
    // const validPass = await bcrypt.compare(req.body.password, seller.password);
    // if (!validPass) return res.status(400).send({ msg: "Password is Wrong" });

    // // Create and assign token
    // const token = jwt.sign({ _id: seller._id }, "tghfythvh");
    // res.header("seller-auth-token", token);
    // res.status(200).send({ msg: token });
  }
);
module.exports = router;
