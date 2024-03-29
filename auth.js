const express = require("express");
const router = express.Router();
const User = require("./schema");
const jwt = require("jsonwebtoken");

const middleware = (req, res, next) => {
  next();
};

router.get("/", (req, res) => {
  res.send(`hello world form the router server`);
});
router.get("/about", middleware, (req, res) => {
  res.send(`hello world form the about`);
});

//async/await

router.post("/register", async (req, res) => {
  const { name, email, phone, password } = req.body;

  if (!name || !email || !phone || !password) {
    return res.status(422).json({ err: "please fill the data" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ err: "Already exist" });
    }
    const user = new User({ name, email, phone, password });

    await user.save();

    res.status(201).json({ message: "success" });
  } catch (err) {
    res.json({ err });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Invalid" });
    }
    const userLogin = await User.findOne({ email: email });
    const isMatch = await User.findOne({ password: password });
    const token = await userLogin.generateAuthToken();

    res.cookie("jwtoken", token, {
      expires: new Date(Date.now() + 25892000000),
      httpOnly: true,
    });

    if (!userLogin || !isMatch) {
      res.json({ message: "user error" });
    } else {
      res.status(200).json({ message: "user sign-in Successfully" });
    }
  } catch (err) {
    res.status(500).json({ err });
  }
});

module.exports = router;
