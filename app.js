const express = require("express");
const mongoose = require("mongoose");
const app = express();

//database connect
const db =
  "mongodb+srv://adibaba:NOIoff09@cluster0.9nevc53.mongodb.net/user?retryWrites=true&w=majority";

mongoose.connect(db)
  .then(() => {
    console.log("connect success");
  })
  .catch((err) => {
    console.log("err");
  });



//middleware
const middleware = (req, res, next) => {
  console.log(`hello`); 
  next();
};

app.get("/", (req, res) => {
  res.send(`hello world form the server`);
});
app.get("/about", middleware, (req, res) => {
  res.send(`hello world form the about`);
});
// app.get("/contact", (req, res) => {
//   res.send(`hello world form the contact`);
// });
// app.get("/login", (req, res) => {
//   res.send(`hello world form the server`);
// });
// app.get("/register", (req, res) => {
//   res.send(`hello world form the server`);
// });

app.listen(3000, () => {
  console.log("runn");
});
