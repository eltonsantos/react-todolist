const express = require('express');
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.get("/test", (req, res) => {
  res.send("Auth route working");
})

router.post("/register", async (req, res) => {
  try {

    const hashedPassword = await bcrypt.hash(req.body.password, 12);

    const newUser = new User({
      email: req.body.email,
      password: hashedPassword,
      name: req.body.name
    });

    const savedUser = await newUser.save();

    return res.json(savedUser);

  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
})

module.exports = router;