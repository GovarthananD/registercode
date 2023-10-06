const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user_model");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { name, password, email, mobileNumber } = req.body;
    if (!password || password.trim() === "") {
      return res.status(400).send({ message: "Password is Mandatory" });
    }
    // if(!password){
    //     return res.status(400).send({message:'Password is Mandatory'})
    // };
    // const hashedValue = await bcrypt.hashSync(payload.password, 13);
    // payload.hashedPassword = hashedValue;
    // delete payload.password;

    // const newUser = new User(payload);

    // newUser
    //   .save()
    //   .then((data) => {
    //     res.status(201).send({
    //       message: "User Registration Successully.",
    //       userId: data._id,
    //     });
    //   })
    //   .catch((error) => {
    //     res.status(400).send({ message: "error while registering user" });
    //   });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.post("/signin", () => {
  try {
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});
router.get("/signout", () => {
  try {
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});
router.post("/forgot-password", () => {
  try {
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});
router.post("/reset-password", () => {
  try {
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
