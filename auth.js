const express = require("express");
const router = express.Router();
const User = require("./schema");

const middleware = (req, res, next) => {
  console.log(`hello`);
  next();
};

router.get("/", (req, res) => {
  res.send(`hello world form the router server`);
});
router.get("/about", middleware, (req, res) => {
  res.send(`hello world form the about`);
});
router.post("/register", (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(422).json({ err: "data fill kr bhai!!" });
  }
  User.findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({ err: "Already exist" });
      }

      const user = new User({ name, email, phone });

      user
        .save()
        .then(() => {
          res.status(201).json({ message: "success" });
        })
        .catch((err) => {
          res.status(500).json({ message: "mistake" });
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
